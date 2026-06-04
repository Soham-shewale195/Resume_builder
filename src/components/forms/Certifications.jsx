import { Plus, Trash2 } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const Certifications = () => {
  const { certifications, addCertification, updateCertification, removeCertification } = useResumeStore();

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
              <input 
                type="month" 
                value={cert.date} 
                onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                className="form-input" 
              />
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
