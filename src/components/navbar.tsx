
import React from 'react';
import { Search, Bell, Settings, Menu } from 'lucide-react';
import type { User } from '../services/authentication/types/auth';

interface NavbarProps {
  user: User;
  notificationsCount: number;
  toggleSidebar: () => void;
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  user,
  notificationsCount,
  toggleSidebar,
  onSearch
}) => {
  // Helper to get initials from the username
  const getInitials = (name: string) => {
    if (!name) return '??';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 lg:px-12 sticky top-0 z-40 shrink-0">
      <div className="flex items-center gap-8">
        <button
          onClick={toggleSidebar}
          className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all"
          aria-label="Toggle Sidebar"
        >
          <Menu size={22} />
        </button>

        {/* Modern Search */}
        <div className="relative hidden md:flex items-center group">
          <Search className="absolute left-5 w-4 h-4 text-slate-300 group-focus-within:text-slate-600 transition-colors duration-300" />
          <input
            type="text"
            placeholder="Search workshop resources..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-80 lg:w-[420px] pl-14 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-200 focus:bg-white transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-10">
        {/* Actions Group */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-2xl transition-all relative">
            <Bell size={20} />
            {notificationsCount > 0 && (
              <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 bg-amber-500 rounded-full ring-4 ring-white"></span>
            )}
          </button>
          <button className="hidden sm:flex p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all">
            <Settings size={20} />
          </button>
        </div>

        <div className="h-10 w-px bg-slate-100"></div>

        {/* User Profile */}
        <button className="flex items-center gap-4 p-1.5 hover:bg-slate-50 rounded-[20px] transition-all border border-transparent hover:border-slate-100 pr-5 group">
          <div className="relative">
            {/* Text-based Monogram */}
            <div className="w-11 h-11 rounded-2xl bg-slate-900 flex items-center justify-center ring-4 ring-slate-50 shadow-sm transition-all duration-300 group-hover:bg-amber-600">
              <span className="text-xs font-black text-white tracking-widest leading-none">
                {getInitials(user.username)}
              </span>
            </div>

            {/* Status Indicator (Hardcoded online for now) */}
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white rounded-full bg-emerald-500`}></div>
          </div>

          <div className="text-left hidden lg:block">
            <p className="text-sm font-bold text-slate-900 leading-none mb-1 tracking-tight">{user.username}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{user.businessname}</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
