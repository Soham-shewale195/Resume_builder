import { Link } from 'react-router-dom';
import { FileText, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 text-white">
              <FileText size={24} className="text-primary-500" />
              <span className="font-bold text-xl tracking-tight">ResumeForge</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              The free, private, and AI-powered resume builder. Create professional, ATS-friendly resumes in minutes directly in your browser. No data ever leaves your device.
            </p>
            <div className="flex items-center text-sm">
              Made with <Heart size={14} className="text-red-500 mx-1" /> for job seekers everywhere.
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Builder</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/templates" className="hover:text-primary-400 transition-colors">Templates</Link></li>
              <li><Link to="/builder" className="hover:text-primary-400 transition-colors">Create Resume</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/blog/ats-friendly-resume-tips" className="hover:text-primary-400 transition-colors">ATS Resume Tips</Link></li>
              <li><Link to="/blog/how-to-make-resume-for-freshers" className="hover:text-primary-400 transition-colors">Fresher Resume Guide</Link></li>
              <li><Link to="/blog/react-developer-resume" className="hover:text-primary-400 transition-colors">React Developer Resume</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ResumeForge. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
