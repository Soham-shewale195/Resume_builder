import { useState } from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import useResumeStore from '../../store/resumeStore';

const Achievements = () => {
  const { achievements, updateAchievements } = useResumeStore();
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleAdd = () => {
    updateAchievements([...achievements, '']);
  };

  const handleUpdate = (index, value) => {
    const newArr = [...achievements];
    newArr[index] = value;
    updateAchievements(newArr);
  };

  const handleRemove = (index) => {
    const newArr = [...achievements];
    newArr.splice(index, 1);
    updateAchievements(newArr);
  };

  // Drag and Drop Handlers
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    
    // Reorder array
    const items = [...achievements];
    const draggedItem = items[draggedIndex];
    items.splice(draggedIndex, 1);
    items.splice(index, 0, draggedItem);
    
    updateAchievements(items);
    setDraggedIndex(index); // Update dragged index to new position
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="space-y-3">
      {achievements.map((ach, index) => (
        <div 
          key={index} 
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
          className={`flex items-start gap-2 p-2 bg-white border rounded-lg transition-colors ${draggedIndex === index ? 'opacity-50 border-slate-400 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}
        >
          <div className="mt-2.5 text-slate-400 cursor-grab hover:text-slate-600">
            <GripVertical size={18} />
          </div>
          
          <input 
            type="text" 
            value={ach} 
            onChange={(e) => handleUpdate(index, e.target.value)}
            className="flex-1 h-[44px] px-3 border-none outline-none bg-transparent" 
            placeholder="Winner of National Hackathon 2023" 
          />
          
          <button 
            onClick={() => handleRemove(index)}
            className="mt-2.5 text-slate-400 hover:text-red-500 transition-colors px-2"
            title="Remove"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
      
      <button 
        onClick={handleAdd}
        className="w-full flex items-center justify-center gap-2 py-3 mt-4 border-2 border-dashed border-slate-300 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 hover:border-slate-400 transition-colors font-medium"
      >
        <Plus size={18} />
        + Add Achievement
      </button>
    </div>
  );
};

export default Achievements;
