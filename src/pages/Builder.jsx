import { useState, useEffect } from 'react';
import { User, FileText, Briefcase, GraduationCap, Code, LayoutTemplate, Award, Trophy, Download, Loader2, CheckCircle2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import useResumeStore from '../store/resumeStore';

import SectionAccordion from '../components/forms/SectionAccordion';
import PersonalInfo from '../components/forms/PersonalInfo';
import Summary from '../components/forms/Summary';
import Experience from '../components/forms/Experience';
import Education from '../components/forms/Education';
import Skills from '../components/forms/Skills';
import Projects from '../components/forms/Projects';
import Certifications from '../components/forms/Certifications';
import Achievements from '../components/forms/Achievements';
import LivePreview from '../components/preview/LivePreview';
import AdSlot from '../components/ads/AdSlot';
import ATSClassicPDF from '../components/templates/ATSClassicPDF';
import ModernBluePDF from '../components/templates/ModernBluePDF';
import MinimalPDF from '../components/templates/MinimalPDF';
import StudentProPDF from '../components/templates/StudentProPDF';

// Helper to count fields
const countFields = (obj) => {
  if (!obj) return { filled: 0, total: 0 };
  if (Array.isArray(obj)) {
    if (obj.length === 0) return { filled: 0, total: 1 }; // Treat empty array as 0/1 
    if (typeof obj[0] === 'string') {
      const filled = obj.filter(item => item.trim() !== '').length;
      return { filled, total: obj.length };
    }
    let filled = 0;
    let total = 0;
    obj.forEach(item => {
      const res = countFields(item);
      filled += res.filled;
      total += res.total;
    });
    return { filled, total };
  }
  if (typeof obj === 'object') {
    let filled = 0;
    let total = 0;
    Object.keys(obj).forEach(key => {
      // ignore IDs
      if (key === 'id') return;
      total += 1;
      const val = obj[key];
      if (Array.isArray(val) && val.length > 0) {
        if (typeof val[0] === 'string') {
          if (val.filter(v => v.trim() !== '').length > 0) filled += 1;
        } else {
          filled += 1; // has items
        }
      } else if (typeof val === 'boolean') {
        filled += 1; // boolean always counts as filled
      } else if (val && String(val).trim() !== '') {
        filled += 1;
      }
    });
    return { filled, total };
  }
  return { filled: obj ? 1 : 0, total: 1 };
};

const Builder = () => {
  const storeState = useResumeStore();
  const { 
    personal, summary, experience, education, skills, 
    projects, certifications, achievements, selectedTemplate, setTemplate 
  } = storeState;

  const [activeTab, setActiveTab] = useState('edit'); // 'edit' or 'preview'
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  
  // AdSense Modal State
  const [showAdModal, setShowAdModal] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const handleSaved = () => {
      setShowSaved(true);
      toast.success('Resume saved!');
      setTimeout(() => setShowSaved(false), 2000);
    };

    window.addEventListener('resume-saved', handleSaved);
    return () => window.removeEventListener('resume-saved', handleSaved);
  }, []);

  useEffect(() => {
    let timer;
    if (showAdModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    } else if (showAdModal && countdown === 0) {
      generateAndDownloadPDF();
    }
    return () => clearTimeout(timer);
  }, [showAdModal, countdown]);

  const handleDownloadClick = () => {
    setCountdown(3);
    setShowAdModal(true);
  };

  const getSelectedPDFTemplate = () => {
    switch (selectedTemplate) {
      case 'ATSClassic': return <ATSClassicPDF {...storeState} />;
      case 'ModernBlue': return <ModernBluePDF {...storeState} />;
      case 'Minimal': return <MinimalPDF {...storeState} />;
      case 'StudentPro': return <StudentProPDF {...storeState} />;
      default: return <ATSClassicPDF {...storeState} />;
    }
  };

  const generateAndDownloadPDF = async () => {
    setIsGenerating(true);
    setShowAdModal(false); // Close modal
    try {
      const PDFDoc = getSelectedPDFTemplate();
      const blob = await pdf(PDFDoc).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${(personal.fullName || 'Draft').replace(/ /g, '_')}_Resume.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const getStats = (data) => countFields(data);

  return (
    <div className="h-screen flex flex-col bg-slate-100 overflow-hidden">
      <Helmet>
        <title>Resume Builder | ResumeForge</title>
      </Helmet>
      
      {/* Top Bar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-20">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-primary-600 font-bold text-xl">
            <FileText size={24} />
            <span className="hidden sm:inline">ResumeForge</span>
          </Link>
          
          <div className="hidden sm:flex items-center gap-2">
            {showSaved && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1.5 rounded-full animate-in fade-in duration-300 mr-2">
                <CheckCircle2 size={14} />
                <span>Auto-saved</span>
              </div>
            )}
            <label className="text-sm text-slate-500 font-medium">Template:</label>
            <select 
              value={selectedTemplate} 
              onChange={(e) => setTemplate(e.target.value)}
              className="text-sm bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
            >
              <option value="ATSClassic">ATS Classic</option>
              <option value="ModernBlue">Modern Blue</option>
              <option value="Minimal">Minimal</option>
              <option value="StudentPro">Student Pro</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleDownloadClick}
          disabled={isGenerating}
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-70"
        >
          {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
          {isGenerating ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </header>
      
      {/* Mobile/Tablet Tabs */}
      <div className="lg:hidden flex border-b border-slate-200 bg-white shrink-0 z-10">
        <button 
          className={`flex-1 py-3 min-h-[44px] text-sm font-medium border-b-2 transition-colors ${activeTab === 'edit' ? 'border-primary-600 text-primary-600' : 'border-transparent text-slate-600'}`}
          onClick={() => setActiveTab('edit')}
        >
          Edit Resume
        </button>
        <button 
          className={`flex-1 py-3 min-h-[44px] text-sm font-medium border-b-2 transition-colors ${activeTab === 'preview' ? 'border-primary-600 text-primary-600' : 'border-transparent text-slate-600'}`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Panel (Forms) */}
        <div className={`w-full lg:w-[460px] h-full overflow-y-auto custom-scrollbar bg-slate-100 lg:border-r border-slate-200 flex-shrink-0 relative ${activeTab === 'edit' ? 'block' : 'hidden lg:block'}`}>
          <div className="p-4 sm:p-6 pb-32">
            
            {/* Spot 1: Below template selector and above form sections */}
            <AdSlot slotId="BUILDER_LEFT_PANEL" size="mobile-banner" className="mb-6 mx-auto" />
            
            <SectionAccordion 
              title="Personal Info" 
              icon={User} 
              defaultOpen={true} 
              borderColor="#2563EB"
              completedCount={getStats(personal).filled}
              totalCount={getStats(personal).total}
            >
              <PersonalInfo />
            </SectionAccordion>
            
            <SectionAccordion 
              title="Professional Summary" 
              icon={FileText} 
              borderColor="#7C3AED"
              completedCount={summary ? 1 : 0}
              totalCount={1}
            >
              <Summary />
            </SectionAccordion>
            
            <SectionAccordion 
              title="Work Experience" 
              icon={Briefcase} 
              borderColor="#059669"
              completedCount={getStats(experience).filled}
              totalCount={getStats(experience).total}
            >
              <Experience />
            </SectionAccordion>
            
            <SectionAccordion 
              title="Education" 
              icon={GraduationCap} 
              borderColor="#D97706"
              completedCount={getStats(education).filled}
              totalCount={getStats(education).total}
            >
              <Education />
            </SectionAccordion>
            
            <SectionAccordion 
              title="Skills" 
              icon={Code} 
              borderColor="#0891B2"
              completedCount={getStats(skills).filled}
              totalCount={4}
            >
              <Skills />
            </SectionAccordion>
            
            <SectionAccordion 
              title="Projects" 
              icon={LayoutTemplate} 
              borderColor="#DC2626"
              completedCount={getStats(projects).filled}
              totalCount={getStats(projects).total}
            >
              <Projects />
            </SectionAccordion>
            
            <SectionAccordion 
              title="Certifications" 
              icon={Award} 
              borderColor="#9333EA"
              completedCount={getStats(certifications).filled}
              totalCount={getStats(certifications).total}
            >
              <Certifications />
            </SectionAccordion>

            <SectionAccordion 
              title="Achievements" 
              icon={Trophy} 
              borderColor="#64748B"
              completedCount={getStats(achievements).filled}
              totalCount={getStats(achievements).total}
            >
              <Achievements />
            </SectionAccordion>

          </div>
        </div>
        
        {/* Right Panel (Preview) */}
        <div className={`flex-1 h-full bg-slate-200 overflow-y-auto custom-scrollbar relative ${activeTab === 'preview' ? 'block' : 'hidden lg:block'}`}>
          <div className="min-h-full flex flex-col">
            <LivePreview />
            
            {/* Spot 2: Below Live Preview */}
            <div className="pb-8 pt-4 w-full flex justify-center mt-auto">
              <AdSlot slotId="BUILDER_RIGHT_PANEL" size="leaderboard" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] mt-auto">
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-center">
            {/* Mock AdSense Slot 320x50 */}
            <AdSlot slotId="MOBILE_BOTTOM" size="mobile-banner" />
          </div>
          <button
            onClick={handleDownloadClick}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-70"
          >
            {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
            {isGenerating ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>
      </div>

      {/* AdSense Wait Modal */}
      {showAdModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center animate-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Your resume is being prepared...</h2>
            <p className="text-slate-500 text-sm mb-6">Downloading automatically in {countdown} seconds.</p>
            
            {/* 300x250 AdSense Unit */}
            <div className="mx-auto w-[300px] h-[250px] bg-slate-100 border border-slate-200 mb-6 flex items-center justify-center overflow-hidden">
              <AdSlot slotId="DOWNLOAD_MODAL" size="rectangle" />
            </div>

            <button
              onClick={generateAndDownloadPDF}
              className="text-primary-600 font-medium text-sm hover:underline"
            >
              Skip and download now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Builder;
