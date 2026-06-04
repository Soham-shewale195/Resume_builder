import { Plus, Trash2 } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const Education = () => {
  const { education, addEducation, updateEducation, removeEducation } = useResumeStore();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 31 }, (_, i) => 2000 + i);

  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div key={edu.id} className="relative bg-white p-5 border border-slate-200 rounded-xl group shadow-sm">
          <button 
            onClick={() => removeEducation(edu.id)}
            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove Education"
          >
            <Trash2 size={18} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Institution Name</label>
              <input 
                type="text" 
                value={edu.institution} 
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                className="form-input" 
                placeholder="Harvard University" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Degree</label>
              <input 
                type="text" 
                value={edu.degree} 
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                className="form-input" 
                placeholder="Bachelor of Science" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Field of Study</label>
              <input 
                type="text" 
                value={edu.field} 
                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                className="form-input" 
                placeholder="Computer Science" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Year</label>
              <select 
                value={edu.startYear} 
                onChange={(e) => updateEducation(edu.id, 'startYear', e.target.value)}
                className="form-input bg-white"
              >
                <option value="">Select Year</option>
                {years.map(year => <option key={`start-${year}`} value={year}>{year}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">End Year</label>
              <select 
                value={edu.endYear} 
                onChange={(e) => updateEducation(edu.id, 'endYear', e.target.value)}
                className="form-input bg-white"
              >
                <option value="">Select Year</option>
                {years.map(year => <option key={`end-${year}`} value={year}>{year}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">CGPA / Percentage <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input 
                type="text" 
                value={edu.cgpa} 
                onChange={(e) => updateEducation(edu.id, 'cgpa', e.target.value)}
                className="form-input" 
                placeholder="8.5 / 10 or 85%" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Achievements / Honours <span className="text-slate-400 font-normal">(Optional)</span></label>
            <textarea 
              rows={2}
              value={edu.achievements}
              onChange={(e) => updateEducation(edu.id, 'achievements', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-y"
              placeholder="Dean's List, First Class Honours..."
            />
          </div>
        </div>
      ))}
      
      <button 
        onClick={addEducation}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-primary-300 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-colors font-medium"
      >
        <Plus size={18} />
        + Add Another Education
      </button>
    </div>
  );
};

export default Education;
