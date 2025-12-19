
import React from 'react';
import { COLORS, SCALELIST_COPY } from '../constants';
import { ProspectMonitor } from './ProspectMonitor';
import { LeadSimulator } from './LeadSimulator';

export const ScalelistWidget: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-[#121212] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/5">
      {/* Left Column: Value Prop */}
      <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#3477E4]"></div>
            <span className="text-[10px] font-bold text-[#3477E4] uppercase tracking-widest">The Scalelist Standard</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {SCALELIST_COPY.headline}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            {SCALELIST_COPY.subheadline}
          </p>
        </div>

        <ul className="space-y-4">
          {SCALELIST_COPY.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/90 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <button className="w-full md:w-auto px-20 py-4 bg-[#3477E4] text-white font-bold rounded-xl text-lg hover:bg-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20">
            {SCALELIST_COPY.cta}
          </button>
          <p className="mt-4 text-white/40 text-xs font-medium">
            Join 7,000+ sales teams. No credit card required.
          </p>
        </div>
      </div>

      {/* Right Column: Interactive Dashboard Simulation */}
      <div className="md:w-[45%] bg-gray-50 p-6 md:p-10 flex flex-col gap-6 border-l border-white/10">
        <div className="space-y-6">
          <div className="transform md:translate-x-4 rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <LeadSimulator />
          </div>
          
          <div className="transform md:-translate-x-4 -rotate-1 md:-rotate-1 hover:rotate-0 transition-transform duration-500">
            <ProspectMonitor />
          </div>
        </div>

        {/* Integration Badges */}
        <div className="mt-4">
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-3 text-center">Seamlessly Integrated With</label>
          <div className="flex justify-center items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-orange-600 rounded-sm"></div>
              <span className="text-[10px] font-black text-gray-900">HubSpot</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
              <span className="text-[10px] font-black text-gray-900">Zapier</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
              <span className="text-[10px] font-black text-gray-900">LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
