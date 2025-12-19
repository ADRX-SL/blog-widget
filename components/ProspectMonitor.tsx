
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';

export const ProspectMonitor: React.FC = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [jobChanged, setJobChanged] = useState(false);

  useEffect(() => {
    let timeout: any;
    if (isMonitoring) {
      timeout = setTimeout(() => {
        setJobChanged(true);
      }, 3000);
    } else {
      setJobChanged(false);
    }
    return () => clearTimeout(timeout);
  }, [isMonitoring]);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Scalelist Monitor</span>
        </div>
        <button 
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`text-[10px] px-2 py-1 rounded-md font-bold transition-colors ${isMonitoring ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}
        >
          {isMonitoring ? 'STOP MONITORING' : 'START MONITORING'}
        </button>
      </div>

      <div className="relative overflow-hidden p-3 bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            SK
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Sarah Koenig</div>
            <div className="text-[10px] text-gray-500">
              {jobChanged ? (
                <span className="flex items-center gap-1 text-blue-600 font-semibold">
                  VP Sales @ <span className="underline italic">NewCo Inc.</span>
                </span>
              ) : (
                'Dir. Outreach @ OldCorp'
              )}
            </div>
          </div>
        </div>

        {jobChanged && (
          <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-[1px] flex items-center justify-center">
            <div className="bg-white px-3 py-1.5 rounded-full shadow-lg border border-blue-100 flex items-center gap-2 animate-bounce">
              <span className="text-[10px] font-bold text-blue-600 italic">Job Change Detected!</span>
            </div>
          </div>
        )}
      </div>
      
      <p className="mt-3 text-[10px] text-gray-400 leading-tight">
        {isMonitoring 
          ? "Scalelist is tracking Sarah's LinkedIn for job updates..." 
          : "Enable monitoring to track your leads across company changes."}
      </p>
    </div>
  );
};
