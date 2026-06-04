import { create } from 'zustand';

const initialResumeData = {
  personal: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
    photo: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: {
    technical: [],
    soft: [],
    languages: [],
    tools: []
  },
  projects: [],
  certifications: [],
  achievements: [],
  selectedTemplate: 'ATSClassic',
  activeSection: 'personal'
};

const useResumeStore = create((set) => ({
  ...initialResumeData,
  
  // Actions
  updatePersonal: (field, value) =>
    set((state) => ({
      personal: { ...state.personal, [field]: value }
    })),
    
  updateSummary: (text) =>
    set({ summary: text }),

  addExperience: () =>
    set((state) => ({
      experience: [...state.experience, {
        id: crypto.randomUUID(),
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        isPresent: false,
        location: '',
        bullets: ["", "", ""]
      }]
    })),
    
  updateExperience: (id, field, value) =>
    set((state) => ({
      experience: state.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    })),
    
  removeExperience: (id) =>
    set((state) => ({
      experience: state.experience.filter(exp => exp.id !== id)
    })),

  addEducation: () =>
    set((state) => ({
      education: [...state.education, {
        id: crypto.randomUUID(),
        institution: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        cgpa: '',
        achievements: ''
      }]
    })),
    
  updateEducation: (id, field, value) =>
    set((state) => ({
      education: state.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    })),
    
  removeEducation: (id) =>
    set((state) => ({
      education: state.education.filter(edu => edu.id !== id)
    })),

  updateSkills: (group, tagsArray) =>
    set((state) => ({
      skills: { ...state.skills, [group]: tagsArray }
    })),

  addProject: () =>
    set((state) => ({
      projects: [...state.projects, {
        id: crypto.randomUUID(),
        name: '',
        techStack: '',
        liveUrl: '',
        githubUrl: '',
        description: ''
      }]
    })),
    
  updateProject: (id, field, value) =>
    set((state) => ({
      projects: state.projects.map(proj => 
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    })),
    
  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter(proj => proj.id !== id)
    })),

  addCertification: () =>
    set((state) => ({
      certifications: [...state.certifications, {
        id: crypto.randomUUID(),
        name: '',
        issuer: '',
        date: '',
        url: ''
      }]
    })),
    
  updateCertification: (id, field, value) =>
    set((state) => ({
      certifications: state.certifications.map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    })),
    
  removeCertification: (id) =>
    set((state) => ({
      certifications: state.certifications.filter(cert => cert.id !== id)
    })),

  updateAchievements: (array) =>
    set({ achievements: array }),

  setTemplate: (templateName) => 
    set({ selectedTemplate: templateName }),
    
  clearAll: () => set({ ...initialResumeData }),

  exportJSON: () => {
    set((state) => {
      const dataStr = JSON.stringify(state);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = 'resume_export.json';
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      return state;
    });
  },

  importJSON: (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        set((state) => {
          return {
            ...state,
            personal: json.personal || initialResumeData.personal,
            summary: json.summary || '',
            experience: json.experience || [],
            education: json.education || [],
            skills: json.skills || initialResumeData.skills,
            projects: json.projects || [],
            certifications: json.certifications || [],
            achievements: json.achievements || [],
            selectedTemplate: json.selectedTemplate || 'ATSClassic',
            activeSection: json.activeSection || 'personal'
          };
        });
      } catch (err) {
        console.error("Failed to parse JSON", err);
      }
    };
    reader.readAsText(file);
  }
}));

// Hydration and save logic is managed outside in main.jsx
export default useResumeStore;
