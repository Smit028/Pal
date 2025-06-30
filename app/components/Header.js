"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiSolidity } from 'react-icons/si'; // "S"-like icon

const tabs = ['Projects', 'Contact'];

export default function AnimatedHeaderTabs() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-black text-white px-2 py-3 flex items-center justify-between w-full overflow-x-auto sticky top-0 z-50">
      
       {/* Right "S" Text */}
      <div className="flex-shrink-0 pl-4 pr-2 text-xl font-bold text-white">
        S
      </div>

      {/* Center Tabs */}
      <div className="relative flex space-x-2 text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap overflow-x-auto min-w-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-3 py-1.5 transition-colors duration-300 ${
              activeTab === tab ? '#ECFAE5' : 'text-gray-400'
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 rounded-md"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

 
    </div>
  );
}
