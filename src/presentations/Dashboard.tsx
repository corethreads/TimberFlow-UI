
import React from 'react';
import {
  Hammer,
  Package,
  Calculator,
  Layout,
  PlusCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const workspaces = [
    { name: 'Projects', icon: Hammer, color: 'bg-blue-50 text-blue-600' },
    { name: 'Inventory', icon: Package, color: 'bg-amber-50 text-amber-600' },
    { name: 'Estimates', icon: Calculator, color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Minimal Header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-Poppins text-4xl font-extrabold text-slate-900 tracking-tight">
          Leoh Miller
        </h1>
        <p className="text-slate-400 font-medium tracking-wide uppercase text-[10px]">
          Workshop Dashboard • Master Carver
        </p>
      </div>

      {/* Simplified Workspace Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workspaces.map((space, idx) => (
          <div
            key={idx}
            className="group relative h-48 bg-white border border-slate-100 rounded-[32px] p-8 transition-all hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <div className={`w-12 h-12 rounded-2xl ${space.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
              <space.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{space.name}</h3>
            <p className="text-slate-400 text-xs mt-1">Open workspace</p>

            {/* Minimal Decorative Element */}
            <div className="absolute top-8 right-8 text-slate-100 transition-colors group-hover:text-slate-200">
              <Layout size={40} strokeWidth={1.5} />
            </div>
          </div>
        ))}

        {/* Action Box */}
        <div className="h-48 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white hover:border-amber-400 transition-all">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-white transition-all">
            <PlusCircle size={24} />
          </div>
          <p className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">New Workspace</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Customize Layout</p>
        </div>
      </div>

      {/* Large Placeholder Area */}
      <div className="h-64 border border-slate-100 bg-slate-50/30 rounded-[40px] flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[10px]">Active Focus Zone</p>
          <p className="text-slate-400 text-xs mt-2">Drag projects here to pin them to your daily view.</p>
        </div>

        {/* Abstract background shape */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;

