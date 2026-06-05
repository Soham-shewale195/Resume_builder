import { Plus, Trash2 } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const Projects = () => {
  const { projects, addProject, updateProject, removeProject } = useResumeStore();

  return (
    <div className="space-y-6">
      {projects.map((proj) => (
        <div key={proj.id} className="relative bg-white p-5 border border-slate-200 rounded-xl group shadow-sm">
          <button 
            onClick={() => removeProject(proj.id)}
            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove Project"
          >
            <Trash2 size={18} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Project Name</label>
              <input 
                type="text" 
                value={proj.name} 
                onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                className="form-input" 
                placeholder="E-commerce Platform" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Tech Stack Used <span className="text-slate-400 font-normal">(comma-separated)</span></label>
              <input 
                type="text" 
                value={proj.techStack} 
                onChange={(e) => updateProject(proj.id, 'techStack', e.target.value)}
                className="form-input" 
                placeholder="React, Node.js, MongoDB" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Live URL <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input 
                type="url" 
                value={proj.liveUrl} 
                onChange={(e) => updateProject(proj.id, 'liveUrl', e.target.value)}
                className="form-input" 
                placeholder="https://myproject.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">GitHub URL <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input 
                type="url" 
                value={proj.githubUrl} 
                onChange={(e) => updateProject(proj.id, 'githubUrl', e.target.value)}
                className="form-input" 
                placeholder="github.com/user/project" 
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-slate-700">Description</label>
            </div>
            <textarea 
              rows={3}
              value={proj.description}
              onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-y"
              placeholder="- Built a full-stack platform supporting 10k+ users..."
            />
          </div>
        </div>
      ))}
      
      <button 
        onClick={addProject}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-primary-300 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-colors font-medium"
      >
        <Plus size={18} />
        + Add Another Project
      </button>
    </div>
  );
};

export default Projects;
