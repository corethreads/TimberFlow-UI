
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Hammer,
  Package,
  Calculator,
  Settings,

  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isCollapsed,
  setIsCollapsed
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', path: '/projects', label: 'Projects', icon: Hammer },
    { id: 'inventory', path: '/inventory', label: 'Inventory', icon: Package },
    { id: 'estimates', path: '/estimates', label: 'Estimates', icon: Calculator },
    { id: 'ai_assistant', path: '/ai-assistant', label: 'AI Estimator', icon: Sparkles, premium: true },
    { id: 'settings', path: '/settings', label: 'Settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 h-screen bg-[#f8fafc] border-r border-slate-200/60 transform transition-all duration-300 ease-in-out lg:relative flex flex-col font-brand shadow-sm ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isCollapsed ? 'w-20' : 'w-72'} lg:translate-x-0`}
    >
      {/* Brand Header */}
      <div className={`h-24 flex items-center ${isCollapsed ? 'justify-center' : 'px-6'} overflow-hidden transition-all shrink-0`}>
        {isCollapsed ? (
          <span className="font-Nebula text-2xl font-black text-amber-600 tracking-tighter select-none">TF</span>
        ) : (
          <span className="font-Nebula text-2xl font-bold text-slate-900 tracking-[0.20em] block leading-none select-none whitespace-nowrap">
            TIMBER-FLOW
          </span>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className={`flex-1 ${isCollapsed ? 'px-3' : 'px-6'} py-6 space-y-1.5 overflow-y-auto custom-scrollbar transition-all`}>
        {!isCollapsed && (
          <p className="font-Nebula px-4 mb-5 text-[12px] font-bold text-slate-400 uppercase tracking-[0.3em] opacity-80 whitespace-nowrap">
            Main Workspace
          </p>
        )}
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center rounded-xl transition-all duration-200 group relative ${isCollapsed ? 'justify-center p-3' : 'justify-between px-4 py-3.5'
                } ${active
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/30'
                }`}
            >
              <div className={`flex items-center ${isCollapsed ? 'gap-0' : 'gap-4'}`}>
                <item.icon className={`w-5 h-5 transition-all duration-200 ${active ? 'text-amber-600' : 'group-hover:text-amber-500'
                  }`} />
                {!isCollapsed && (
                  <span className="font-Poppins text-[13px] font-semibold tracking-[0.1em]  whitespace-nowrap">{item.label}</span>
                )}
              </div>

              {!isCollapsed && (
                <div className="flex items-center">
                  {item.premium && !active && (
                    <Zap size={10} className="text-amber-500 fill-amber-500 opacity-50" />
                  )}
                  {active && (
                    <ChevronRight size={14} className="text-slate-300" />
                  )}
                </div>
              )}

              {/* Indicator for collapsed active state */}
              {isCollapsed && active && (
                <div className="absolute left-0 w-1 h-6 bg-amber-600 rounded-r-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className={`${isCollapsed ? 'p-3' : 'p-8'} mt-auto border-t border-slate-100 bg-slate-100/30 transition-all shrink-0`}>
        <div className="space-y-4">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold text-slate-900 tracking-wider uppercase whitespace-nowrap">Secure</p>
                <p className="text-[9px] text-slate-400 font-medium whitespace-nowrap">Session Active</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`w-full flex items-center justify-center gap-2 p-3 text-[10px] font-bold text-slate-400 hover:text-slate-900 rounded-xl transition-all border border-slate-200 hover:border-slate-300 bg-white uppercase tracking-[0.2em] shadow-sm`}
          >
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
            {!isCollapsed && "Collapse"}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
