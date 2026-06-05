import { useState, useEffect } from 'react';
import useResumeStore from '../../store/resumeStore';

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
  const [localSummary, setLocalSummary] = useState(summary);

  useEffect(() => {
    setLocalSummary(summary);
  }, [summary]);



  const handleChange = (e) => {
    setLocalSummary(e.target.value);
    updateSummary(e.target.value);
  };

  return (
    <div className="space-y-3">
        <textarea
          rows={5}
          value={localSummary}
          onChange={handleChange}
          placeholder="Write a 3-4 line summary..."
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
        />
      
      <div className="flex justify-between items-center">
        <div></div>
        <p className="text-xs text-slate-500 font-medium">
          {localSummary.length} / 600
        </p>
      </div>
    </div>
  );
};

export default Summary;
