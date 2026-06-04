import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SectionAccordion = ({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = false, 
  borderColor = '#2563EB',
  completedCount = 0,
  totalCount = 0
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const isCompleted = totalCount > 0 && completedCount === totalCount;
  const badgeColor = isCompleted ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600';

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 border border-slate-200 overflow-hidden" style={{ borderLeftWidth: '4px', borderLeftColor: borderColor }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 min-h-[44px] bg-white hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600" style={{ backgroundColor: `${borderColor}15` }}>
            <Icon size={18} style={{ color: borderColor }} />
          </div>
          <h2 className="font-semibold text-slate-800">{title}</h2>
          
          {totalCount > 0 && (
            isCompleted ? (
              <CheckCircle2 size={20} className="ml-2 text-emerald-600" />
            ) : (
              <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${badgeColor}`}>
                {completedCount} / {totalCount} filled
              </span>
            )
          )}
        </div>
        
        <div className="text-slate-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-slate-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionAccordion;
