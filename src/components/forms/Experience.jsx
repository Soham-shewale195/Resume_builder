import { useState } from 'react';
import { Plus, Trash2, Sparkles, Loader2 } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';
import { useGeminiAI } from '../ai/useGeminiAI';

const Experience = () => {
  const { experience, addExperience, updateExperience, removeExperience } = useResumeStore();
  const { generateContent, loading, remainingUses } = useGeminiAI();
  const [activeAIBullet, setActiveAIBullet] = useState({ expId: null, index: null });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 40 }, (_, i) => currentYear - i);
  const months = [
    { value: '01', label: 'Jan' }, { value: '02', label: 'Feb' }, { value: '03', label: 'Mar' },
    { value: '04', label: 'Apr' }, { value: '05', label: 'May' }, { value: '06', label: 'Jun' },
    { value: '07', label: 'Jul' }, { value: '08', label: 'Aug' }, { value: '09', label: 'Sep' },
    { value: '10', label: 'Oct' }, { value: '11', label: 'Nov' }, { value: '12', label: 'Dec' },
  ];

  const handleEnhanceBullet = async (expId, index, bulletText, role) => {
    if (!bulletText.trim()) return;
    setActiveAIBullet({ expId, index });
    
    const prompt = `Rewrite this resume bullet point for a ${role || 'professional'} role.
Current bullet: "${bulletText}".
Requirements:
- Attempt to include quantified outcomes or metrics if possible.
- Use a single strong action verb at the start.
- Stay under 20 words total.
- Use ATS-friendly wording.
- Do not include bullet symbols, quotes, or filler text.
Return ONLY the rewritten bullet point.`;
    
    const enhanced = await generateContent(prompt);
    if (enhanced) {
      const exp = experience.find(e => e.id === expId);
      const newBullets = [...exp.bullets];
      newBullets[index] = enhanced;
      updateExperience(expId, 'bullets', newBullets);
    }
    setActiveAIBullet({ expId: null, index: null });
  };

  const handleBulletChange = (expId, index, text) => {
    const exp = experience.find(e => e.id === expId);
    const newBullets = [...exp.bullets];
    newBullets[index] = text;
    updateExperience(expId, 'bullets', newBullets);
  };

  return (
    <div className="space-y-6">
      {experience.map((exp) => (
        <div key={exp.id} className="relative bg-white p-5 border border-slate-200 rounded-xl group shadow-sm">
          <button 
            onClick={() => removeExperience(exp.id)}
            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove Experience"
          >
            <Trash2 size={18} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
              <input 
                type="text" 
                value={exp.company} 
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                className="form-input" 
                placeholder="Google" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Job Role</label>
              <input 
                type="text" 
                value={exp.role} 
                onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                className="form-input" 
                placeholder="Senior Developer" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
              <div className="flex gap-2">
                <select 
                  value={(exp.startDate || '').split('-')[1] || ''} 
                  onChange={(e) => {
                    const year = (exp.startDate || '').split('-')[0] || '';
                    updateExperience(exp.id, 'startDate', year ? `${year}-${e.target.value}` : `-${e.target.value}`);
                  }}
                  className="form-input bg-white w-1/2 px-2"
                >
                  <option value="">Month</option>
                  {months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                </select>
                <select 
                  value={(exp.startDate || '').split('-')[0] || ''} 
                  onChange={(e) => {
                    const month = (exp.startDate || '').split('-')[1] || '';
                    updateExperience(exp.id, 'startDate', month ? `${e.target.value}-${month}` : `${e.target.value}-`);
                  }}
                  className="form-input bg-white w-1/2 px-2"
                >
                  <option value="">Year</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <select 
                    value={(exp.endDate || '').split('-')[1] || ''} 
                    onChange={(e) => {
                      const year = (exp.endDate || '').split('-')[0] || '';
                      updateExperience(exp.id, 'endDate', year ? `${year}-${e.target.value}` : `-${e.target.value}`);
                    }}
                    disabled={exp.isPresent}
                    className="form-input bg-white w-1/2 px-2 disabled:bg-slate-100 disabled:text-slate-400"
                  >
                    <option value="">Month</option>
                    {months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                  </select>
                  <select 
                    value={(exp.endDate || '').split('-')[0] || ''} 
                    onChange={(e) => {
                      const month = (exp.endDate || '').split('-')[1] || '';
                      updateExperience(exp.id, 'endDate', month ? `${e.target.value}-${month}` : `${e.target.value}-`);
                    }}
                    disabled={exp.isPresent}
                    className="form-input bg-white w-1/2 px-2 disabled:bg-slate-100 disabled:text-slate-400"
                  >
                    <option value="">Year</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <input 
                    type="checkbox" 
                    checked={exp.isPresent} 
                    onChange={(e) => {
                      const isPresent = e.target.checked;
                      updateExperience(exp.id, 'isPresent', isPresent);
                      if (isPresent) {
                        updateExperience(exp.id, 'endDate', '');
                      }
                    }}
                    className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500"
                  />
                  Currently working here
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
              <input 
                type="text" 
                value={exp.location} 
                onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                className="form-input" 
                placeholder="San Francisco, CA" 
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-3">Bullet Points</label>
            <div className="space-y-4">
              {exp.bullets.map((bullet, index) => {
                const isGeneratingThis = activeAIBullet.expId === exp.id && activeAIBullet.index === index && loading;
                
                return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex gap-2 items-start">
                    <span className="mt-2 text-slate-400 font-bold">•</span>
                    {isGeneratingThis ? (
                      <div className="flex-1 h-[76px] bg-slate-200 animate-pulse rounded-lg border border-slate-300"></div>
                    ) : (
                      <textarea 
                        rows={3}
                        value={bullet}
                        onChange={(e) => handleBulletChange(exp.id, index, e.target.value)}
                        className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-y"
                        placeholder="Developed X using Y which achieved Z..."
                      />
                    )}
                  </div>
                  <div className="flex justify-end">
                    <div className="group relative">
                      <button
                        onClick={() => handleEnhanceBullet(exp.id, index, bullet, exp.role)}
                        disabled={loading || !bullet.trim()}
                        className="flex items-center gap-1.5 text-xs bg-violet-600 text-white hover:bg-violet-700 px-3 min-h-[44px] rounded-lg transition-colors font-medium disabled:opacity-50"
                      >
                        {isGeneratingThis ? 
                          <Loader2 size={14} className="animate-spin" /> : 
                          <Sparkles size={14} />
                        }
                        <span>✨ Improve this bullet</span>
                      </button>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none z-10">
                        {remainingUses} AI uses left today
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      ))}
      
      <button 
        onClick={addExperience}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-primary-300 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-colors font-medium"
      >
        <Plus size={18} />
        + Add Another Job
      </button>
    </div>
  );
};

export default Experience;
