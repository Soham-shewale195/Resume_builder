import { Plus, Trash2 } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const Certifications = () => {
  const { certifications, addCertification, updateCertification, removeCertification } = useResumeStore();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 40 }, (_, i) => currentYear - i);
  const months = [
    { value: '01', label: 'Jan' }, { value: '02', label: 'Feb' }, { value: '03', label: 'Mar' },
    { value: '04', label: 'Apr' }, { value: '05', label: 'May' }, { value: '06', label: 'Jun' },
    { value: '07', label: 'Jul' }, { value: '08', label: 'Aug' }, { value: '09', label: 'Sep' },
    { value: '10', label: 'Oct' }, { value: '11', label: 'Nov' }, { value: '12', label: 'Dec' },
  ];

  return (
    <div className="space-y-4">
      {certifications.map((cert) => (
        <div key={cert.id} className="relative bg-white p-5 border border-slate-200 rounded-xl group shadow-sm">
          <button 
            onClick={() => removeCertification(cert.id)}
            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove Certification"
          >
            <Trash2 size={18} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Certification Name</label>
              <input 
                type="text" 
                value={cert.name} 
                onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                className="form-input" 
                placeholder="AWS Certified Solutions Architect" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Issuing Organization</label>
              <input 
                type="text" 
                value={cert.issuer} 
                onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                className="form-input" 
                placeholder="Amazon Web Services" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
              <div className="flex gap-2">
                <select 
                  value={(cert.date || '').split('-')[1] || ''} 
                  onChange={(e) => {
                    const year = (cert.date || '').split('-')[0] || '';
                    updateCertification(cert.id, 'date', year ? `${year}-${e.target.value}` : `-${e.target.value}`);
                  }}
                  className="form-input bg-white w-1/2 px-2"
                >
                  <option value="">Month</option>
                  {months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                </select>
                <select 
                  value={(cert.date || '').split('-')[0] || ''} 
                  onChange={(e) => {
                    const month = (cert.date || '').split('-')[1] || '';
                    updateCertification(cert.id, 'date', month ? `${e.target.value}-${month}` : `${e.target.value}-`);
                  }}
                  className="form-input bg-white w-1/2 px-2"
                >
                  <option value="">Year</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Credential URL <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input 
                type="url" 
                value={cert.url} 
                onChange={(e) => updateCertification(cert.id, 'url', e.target.value)}
                className="form-input" 
                placeholder="https://credly.com/..." 
              />
            </div>
          </div>
        </div>
      ))}
      
      <button 
        onClick={addCertification}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-primary-300 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-colors font-medium"
      >
        <Plus size={18} />
        + Add Certification
      </button>
    </div>
  );
};

export default Certifications;
