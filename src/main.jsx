import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import useResumeStore from './store/resumeStore';

// Hydrate from localStorage
const savedData = localStorage.getItem('rforge_v1');
if (savedData) {
  try {
    const parsed = JSON.parse(savedData);
    useResumeStore.setState({
      personal: parsed.personal || useResumeStore.getState().personal,
      summary: parsed.summary || '',
      experience: parsed.experience || [],
      education: parsed.education || [],
      skills: parsed.skills || useResumeStore.getState().skills,
      projects: parsed.projects || [],
      certifications: parsed.certifications || [],
      achievements: parsed.achievements || [],
      selectedTemplate: parsed.selectedTemplate || 'ATSClassic',
      activeSection: parsed.activeSection || 'personal'
    });
  } catch (e) {
    console.error('Failed to hydrate state from localStorage', e);
  }
}

// Subscribe with debounce 1500ms
let timeoutId = null;
useResumeStore.subscribe((state) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    const stateToSave = {
      personal: state.personal,
      summary: state.summary,
      experience: state.experience,
      education: state.education,
      skills: state.skills,
      projects: state.projects,
      certifications: state.certifications,
      achievements: state.achievements,
      selectedTemplate: state.selectedTemplate,
      activeSection: state.activeSection
    };
    localStorage.setItem('rforge_v1', JSON.stringify(stateToSave));
    
    // Dispatch event for Auto-saved indicator
    const event = new CustomEvent('resume-saved');
    window.dispatchEvent(event);
  }, 1500);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
