
import React, { useState } from 'react';
import { Prospect } from '../types';

const INITIAL_LEAD: Prospect = {
  name: "Marc Andreessen",
  title: "General Partner",
  company: "A16Z",
  email: null,
  phone: null,
  status: 'pending'
};

export const LeadSimulator: React.FC = () => {
  const [lead, setLead] = useState<Prospect>(INITIAL_LEAD);
  const [isEnriching, setIsEnriching] = useState(false);

  const startEnrichment = () => {
    setIsEnriching(true);
    setTimeout(() => {
      setLead({
        ...INITIAL_LEAD,
        email: "m.andreessen@a16z.com",
        phone: "+1 (415) 882-XXXX",
        status: 'verified'
      });
      setIsEnriching(false);
    }, 1500);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Enrichment Engine</span>
        {lead.status === 'verified' && (
          <span className="bg-green-100 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            VERIFIED
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white font-black text-sm">
          MA
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">{lead.name}</div>
          <div className="text-[10px] text-gray-500 font-medium">{lead.title} @ {lead.company}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">Professional Email</label>
          <div className={`h-8 flex items-center px-3 rounded-lg border text-xs font-medium transition-all ${lead.email ? 'bg-blue-50 border-blue-100 text-blue-700' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
            {isEnriching ? "Searching verified sources..." : lead.email || "••••••••@a16z.com"}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">Direct Mobile</label>
          <div className={`h-8 flex items-center px-3 rounded-lg border text-xs font-medium transition-all ${lead.phone ? 'bg-blue-50 border-blue-100 text-blue-700' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
            {isEnriching ? "Bypassing switchboards..." : lead.phone || "+1 (XXX) XXX-XXXX"}
          </div>
        </div>
      </div>

      <button 
        onClick={startEnrichment}
        disabled={isEnriching || lead.status === 'verified'}
        className={`mt-5 w-full py-3 rounded-xl text-xs font-bold transition-all shadow-md ${
          lead.status === 'verified' 
            ? 'bg-gray-100 text-gray-400 cursor-default shadow-none' 
            : 'bg-gray-900 text-white hover:bg-black active:scale-[0.97]'
        }`}
      >
        {isEnriching ? 'Finding Direct Data...' : lead.status === 'verified' ? 'Data Enriched' : 'Get Contact Info'}
      </button>
    </div>
  );
};
