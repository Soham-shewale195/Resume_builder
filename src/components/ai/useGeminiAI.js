import { useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

const DAILY_LIMIT = 10;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export const useGeminiAI = () => {
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const [remainingUses, setRemainingUses] = useState(DAILY_LIMIT);

  // Get current date string (YYYY-MM-DD)
  const getTodayString = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  const getStorageKey = () => `rforge_ai_${getTodayString()}`;

  const checkLimit = useCallback(() => {
    const key = getStorageKey();
    const uses = parseInt(localStorage.getItem(key) || '0', 10);
    setRemainingUses(Math.max(0, DAILY_LIMIT - uses));
    if (uses >= DAILY_LIMIT) {
      setLimitReached(true);
      return false;
    }
    setLimitReached(false);
    return true;
  }, []);

  useEffect(() => {
    checkLimit();
  }, [checkLimit]);

  const incrementUsage = () => {
    const key = getStorageKey();
    const uses = parseInt(localStorage.getItem(key) || '0', 10);
    localStorage.setItem(key, (uses + 1).toString());
    checkLimit();
  };

  const generateContent = async (prompt) => {
    if (!checkLimit()) {
      toast('AI limit reached for today.', { 
        style: { background: '#f59e0b', color: '#fff' },
        duration: 3000
      });
      return null;
    }

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      toast.error('Missing API key. Please set VITE_GEMINI_API_KEY.', { duration: 4000 });
      return null;
    }

    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.7,
          }
        })
      });

      if (!response.ok) {
        if (response.status === 400) throw new Error('Invalid Gemini request');
        if (response.status === 401 || response.status === 403) throw new Error('Gemini API rejected request (Invalid Key)');
        throw new Error(`Network unavailable or API Error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates.length > 0) {
        incrementUsage();
        toast('Summary generated!', {
          style: { background: '#7C3AED', color: '#fff' },
          duration: 2000
        });
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid Gemini response');
      }
      
    } catch (error) {
      console.error("Gemini API Error:", error);
      let errorMessage = error.message || 'Something went wrong.';
      if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        errorMessage = 'Network unavailable';
      }
      toast.error(errorMessage, { duration: 3000 });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { generateContent, loading, limitReached, remainingUses };
};
