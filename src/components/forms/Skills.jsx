import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useResumeStore from '../../store/resumeStore';
import { getSkillSuggestions } from '../../utils/skillSuggestions';

const SkillSection = ({ 
  title, category, placeholder, showAutoSuggest,
  inputs, setInputs, handleKeyDown, handleAdd, handleRemove,
  showSuggestions, setShowSuggestions, suggestions, skills, jobTitle 
}) => (
  <div className="mb-6 relative">
    <label className="block text-sm font-medium text-slate-700 mb-2">{title}</label>
    
    <div className="flex gap-2 mb-3">
      <input
        type="text"
        value={inputs[category]}
        onChange={(e) => setInputs({ ...inputs, [category]: e.target.value })}
        onKeyDown={(e) => handleKeyDown(e, category)}
        onFocus={() => showAutoSuggest && setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className="form-input"
        placeholder={placeholder}
      />
    </div>

    {showAutoSuggest && showSuggestions && suggestions.length > 0 && (
      <div className="absolute z-10 w-full mt-[-8px] bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
        <div className="p-2 text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-100">
          Suggested for {jobTitle}
        </div>
        {suggestions.map((skill, idx) => (
          <button
            key={idx}
            className="w-full text-left px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
            onClick={() => {
              handleAdd(category, skill);
              setShowSuggestions(false);
            }}
          >
            {skill}
          </button>
        ))}
      </div>
    )}

    <div className="flex flex-wrap gap-2">
      <AnimatePresence>
        {skills[category]?.map((skill, index) => (
          <motion.span 
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-800 px-3 py-1.5 rounded-full text-sm font-medium group border border-cyan-100"
          >
            {skill}
            <button
              onClick={() => handleRemove(category, index)}
              className="text-cyan-600 hover:text-red-500 transition-colors"
            >
              <X size={14} />
            </button>
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  </div>
);

const Skills = () => {
  const { personal, skills, updateSkills } = useResumeStore();
  const [inputs, setInputs] = useState({ technical: '', soft: '', languages: '', tools: '' });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = getSkillSuggestions(personal.jobTitle);

  const handleAdd = (category, value) => {
    const val = value.trim();
    if (!val) return;
    
    const currentList = skills[category] || [];
    if (!currentList.includes(val)) {
      updateSkills(category, [...currentList, val]);
    }
    setInputs({ ...inputs, [category]: '' });
  };

  const handleRemove = (category, index) => {
    const currentList = [...(skills[category] || [])];
    currentList.splice(index, 1);
    updateSkills(category, currentList);
  };

  const handleKeyDown = (e, category) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAdd(category, inputs[category]);
    }
  };

  const sharedProps = {
    inputs, setInputs, handleKeyDown, handleAdd, handleRemove,
    showSuggestions, setShowSuggestions, suggestions, skills, jobTitle: personal.jobTitle
  };

  return (
    <div>
      <p className="text-sm text-slate-500 mb-4">Type a skill and press <kbd className="px-1 py-0.5 bg-slate-100 rounded text-xs border border-slate-300">Enter</kbd> or comma to add.</p>
      
      <SkillSection title="Technical Skills" category="technical" placeholder="e.g., React, Python" showAutoSuggest={true} {...sharedProps} />
      <SkillSection title="Soft Skills" category="soft" placeholder="e.g., Leadership, Communication" {...sharedProps} />
      <SkillSection title="Languages" category="languages" placeholder="e.g., English, Spanish" {...sharedProps} />
      <SkillSection title="Tools & Software" category="tools" placeholder="e.g., Jira, Figma, Git" {...sharedProps} />
    </div>
  );
};

export default Skills;
