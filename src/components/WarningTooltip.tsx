import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const WarningTooltip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full p-3 cursor-pointer hover:bg-yellow-500/30 transition-all duration-300">
          <AlertTriangle className="w-6 h-6 text-yellow-400" />
        </div>
        
        {isVisible && (
          <div className="absolute top-full right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-yellow-500/30 rounded-lg p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-yellow-400 font-semibold text-sm mb-1">Peringatan</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sebagian informasi masih bersifat dummy dan keseluruhan masih dalam pengembangan
                </p>
              </div>
            </div>
            <div className="absolute -top-2 right-6 w-4 h-4 bg-black/90 border-l border-t border-yellow-500/30 transform rotate-45"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WarningTooltip;