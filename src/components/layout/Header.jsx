import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2 } from 'lucide-react';

const Header = () => {
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    const handleSaved = () => {
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
    };

    window.addEventListener('resume-saved', handleSaved);
    return () => window.removeEventListener('resume-saved', handleSaved);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-500 text-white p-2 rounded-lg">
              <FileText size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">ResumeForge</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/templates" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Templates</Link>
            <Link to="/blog" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Resume Tips</Link>
          </nav>

          <div className="flex items-center gap-4">
            {showSaved && (
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={14} />
                <span>Auto-saved</span>
              </div>
            )}

            <Link 
              to="/builder" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-md shadow-primary-500/20"
            >
              Build Resume
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
