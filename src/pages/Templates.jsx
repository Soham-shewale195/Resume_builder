import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import useResumeStore from '../store/resumeStore';

const Templates = () => {
  const { selectedTemplate, setTemplate } = useResumeStore();

  const templates = [
    {
      id: 'ATSClassic',
      name: 'ATS Classic',
      description: 'Clean, traditional layout. Best for corporate jobs and strict ATS parsing.',
      color: 'bg-slate-100',
    },
    // Adding placeholders for others that could be implemented
    {
      id: 'ModernBlue',
      name: 'Modern Blue',
      description: 'Professional with a touch of color. Great for tech and modern companies.',
      color: 'bg-blue-50',
    },
    {
      id: 'Minimal',
      name: 'Minimalist',
      description: 'Lots of whitespace. Perfect for creatives and concise resumes.',
      color: 'bg-white',
    },
    {
      id: 'StudentPro',
      name: 'Student Pro',
      description: 'Prioritizes education and projects over work experience.',
      color: 'bg-green-50',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Helmet>
        <title>Resume Templates | ResumeForge</title>
        <meta name="description" content="Choose from our selection of free, ATS-friendly resume templates." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Template</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">All templates are 100% free, ATS-friendly, and fully customizable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((tpl) => (
              <div 
                key={tpl.id} 
                className={`bg-white rounded-2xl shadow-sm border ${selectedTemplate === tpl.id ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-slate-200 hover:border-slate-300'} overflow-hidden transition-all flex flex-col`}
              >
                <div className={`h-48 ${tpl.color} border-b border-slate-100 flex items-center justify-center p-4 relative`}>
                  {/* Mock thumbnail representation */}
                  <div className="w-32 h-40 bg-white shadow-md border border-slate-200 p-2 text-[4px] leading-tight flex flex-col gap-1">
                    <div className="h-2 w-1/2 bg-slate-800 mb-2"></div>
                    <div className="h-1 w-full bg-slate-200"></div>
                    <div className="h-1 w-5/6 bg-slate-200 mb-2"></div>
                    <div className="h-2 w-1/3 bg-slate-800"></div>
                    <div className="h-1 w-full bg-slate-200"></div>
                    <div className="h-1 w-full bg-slate-200"></div>
                    <div className="h-1 w-4/5 bg-slate-200"></div>
                  </div>
                  {selectedTemplate === tpl.id && (
                    <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Selected
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tpl.name}</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-1">{tpl.description}</p>
                  
                  {selectedTemplate === tpl.id ? (
                    <Link 
                      to="/builder"
                      className="w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-lg transition-colors"
                    >
                      Edit Resume
                    </Link>
                  ) : (
                    <button 
                      onClick={() => setTemplate(tpl.id)}
                      className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2 rounded-lg transition-colors"
                    >
                      Use Template
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
