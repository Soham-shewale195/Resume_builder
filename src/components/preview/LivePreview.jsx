import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useResumeStore from '../../store/resumeStore';

// Import all templates
import ATSClassic from '../templates/ATSClassic';
import ModernBlue from '../templates/ModernBlue';
import Minimal from '../templates/Minimal';
import StudentPro from '../templates/StudentPro';

const LivePreview = () => {
  const storeState = useResumeStore();
  const { selectedTemplate } = storeState;

  useEffect(() => {
    if (storeState.personal.photo) {
      console.log('preview updated');
    }
  }, [storeState.personal.photo]);

  const getTemplateComponent = () => {
    switch (selectedTemplate) {
      case 'ATSClassic':
        return <ATSClassic />;
      case 'ModernBlue':
        return <ModernBlue />;
      case 'Minimal':
        return <Minimal />;
      case 'StudentPro':
        return <StudentPro />;
      default:
        return <ATSClassic />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-200 overflow-hidden relative">
      <div className="flex-1 overflow-auto custom-scrollbar p-4 sm:p-8 flex justify-center items-start">
        {/* Scaled Wrapper for A4 simulation */}
        <div 
          className="transform-origin-top transition-transform duration-200 relative shadow-xl"
          style={{ transform: 'scale(0.75)', transformOrigin: 'top center' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTemplate}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {getTemplateComponent()}
            </motion.div>
          </AnimatePresence>
          
          {/* Watermark only visible in preview */}
          <div className="absolute bottom-4 right-8 text-slate-300 font-bold text-xl opacity-50 pointer-events-none select-none">
            ResumeForge.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
