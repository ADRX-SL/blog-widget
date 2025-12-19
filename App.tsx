
import React from 'react';
import { ScalelistWidget } from './components/ScalelistWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <div className="mb-12 text-center">
          <h1 className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">Scalelist Content Widget</h1>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <ScalelistWidget />
        
        <div className="mt-12 flex justify-center items-center gap-8 text-gray-400">
          <span className="text-[10px] font-bold tracking-widest uppercase">Verified Data</span>
          <span className="text-[10px] font-bold tracking-widest uppercase">Prospect Alerts</span>
          <span className="text-[10px] font-bold tracking-widest uppercase">CRM Workflows</span>
        </div>
      </div>
    </div>
  );
}

export default App;
