import { useState, useEffect } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';
import { useGeminiAI } from '../ai/useGeminiAI';

const calculateYOE = (experienceArray) => {
  if (!experienceArray || experienceArray.length === 0) return 0;
  let totalMonths = 0;
  experienceArray.forEach(exp => {
    if (!exp.startDate) return;
    const start = new Date(exp.startDate);
    const end = exp.isPresent ? new Date() : (exp.endDate ? new Date(exp.endDate) : new Date());
    const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (diffMonths > 0) totalMonths += diffMonths;
  });
  return Math.round((totalMonths / 12) * 10) / 10;
};

const Summary = () => {
  const { summary, personal, experience, skills, updateSummary } = useResumeStore();
  const { generateContent, loading, remainingUses } = useGeminiAI();
  const [localSummary, setLocalSummary] = useState(summary);

  useEffect(() => {
    setLocalSummary(summary);
  }, [summary]);

  const handleEnhance = async () => {
    if (!localSummary.trim() && !personal.jobTitle) return;
    
    const yoe = calculateYOE(experience);
    const techSkills = skills.technical?.join(', ') || 'general';
    
    const prompt = `Write a professional resume summary for a ${personal.jobTitle || 'professional'} with ${yoe} years of experience.
Technical skills: ${techSkills}.
Current draft: "${localSummary}".
Requirements:
- Exactly 3 sentences.
- Write in the first-person perspective (implied "I", e.g., "Experienced developer with...").
- Use ATS-friendly wording.
- Do NOT use buzzwords like passionate, hardworking, dedicated, or motivated.
- Focus on concrete achievements and core competencies.
Return ONLY the summary text, no quotes or filler.`;
    
    const enhanced = await generateContent(prompt);
    if (enhanced) {
      setLocalSummary(enhanced);
      updateSummary(enhanced);
    }
  };

  const handleChange = (e) => {
    setLocalSummary(e.target.value);
    updateSummary(e.target.value);
  };

  return (
    <div className="space-y-3">
      {loading ? (
        <div className="w-full h-[120px] bg-slate-200 animate-pulse rounded-lg border border-slate-300"></div>
      ) : (
        <textarea
          rows={5}
          value={localSummary}
          onChange={handleChange}
          placeholder="Write a 3-4 line summary..."
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
        />
      )}
      
      <div className="flex justify-between items-center">
        <div className="group relative">
          <button
            onClick={handleEnhance}
            disabled={loading || (!localSummary.trim() && !personal.jobTitle)}
            className="flex items-center gap-1.5 text-sm bg-violet-600 text-white hover:bg-violet-700 px-4 min-h-[44px] rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            <span>✨ Generate with AI</span>
          </button>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none z-10">
            {remainingUses} AI uses left today
          </div>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          {localSummary.length} / 600
        </p>
      </div>
    </div>
  );
};

export default Summary;
