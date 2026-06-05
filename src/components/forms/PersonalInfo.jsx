import { useRef } from 'react';
import { Camera } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const PersonalInfo = () => {
  const { personal, updatePersonal } = useResumeStore();
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    updatePersonal(e.target.name, e.target.value);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('file selected', file.name);
      if (file.size > 2 * 1024 * 1024) {
        alert('File is too large. Please select an image under 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          console.log('image loaded');
          const canvas = document.createElement('canvas');
          const maxDim = 300;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxDim) {
              height = Math.round(height * (maxDim / width));
              width = maxDim;
            }
          } else {
            if (height > maxDim) {
              width = Math.round(width * (maxDim / height));
              height = maxDim;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
          console.log('canvas compression complete');
          updatePersonal('photo', compressedDataUrl);
          console.log('store updated');
          
          if (fileInputRef.current) fileInputRef.current.value = '';
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      {/* Photo Upload Row */}
      <div className="flex items-center gap-4 mb-2">
        <div 
          className="w-[60px] h-[60px] rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center overflow-hidden flex-shrink-0"
        >
          {personal.photo ? (
            <img src={personal.photo} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <Camera size={24} className="text-slate-400" />
          )}
        </div>
        <div>
          <button 
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md transition-colors"
          >
            Upload Photo
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handlePhotoUpload} 
            accept="image/png, image/jpeg, image/jpg, image/webp" 
            className="hidden" 
          />
          <p className="text-xs text-slate-500 mt-1">Recommended: Square image, max 1MB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input type="text" name="fullName" value={personal.fullName} onChange={handleChange} className="form-input" placeholder="Rahul Sharma" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Target Job Title</label>
          <input type="text" name="jobTitle" value={personal.jobTitle} onChange={handleChange} className="form-input" placeholder="React Developer" />
        </div>
        
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" name="email" value={personal.email} onChange={handleChange} className="form-input" placeholder="rahul@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input type="tel" name="phone" value={personal.phone} onChange={handleChange} className="form-input" placeholder="+91 98765 43210" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">City / Location</label>
            <input type="text" name="location" value={personal.location} onChange={handleChange} className="form-input" placeholder="Mumbai, India" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn URL</label>
          <input type="url" name="linkedin" value={personal.linkedin} onChange={handleChange} className="form-input" placeholder="linkedin.com/in/rahul" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">GitHub URL</label>
          <input type="url" name="github" value={personal.github} onChange={handleChange} className="form-input" placeholder="github.com/rahul" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">Portfolio URL</label>
          <input type="url" name="portfolio" value={personal.portfolio} onChange={handleChange} className="form-input" placeholder="https://rahul.dev" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
