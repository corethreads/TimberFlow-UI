
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import type { User } from '../services/authentication/types/auth';

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Updated Mock User Data using the new structure
  const [user] = useState<User>({
    id: 'user_1',
    businessname: 'Jcatins Workshop',
    businessid: 'BID-9921',
    username: 'Leoh Miller ',
    email: 'elias.m@timberflow.io'
  });

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans antialiased text-slate-900 overflow-hidden">
      {/* Persistent Navigation Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* Main UI Body */}
      <div className="flex-1 flex flex-col min-w-0 bg-white transition-all duration-300 overflow-hidden">
        {/* Global Navbar */}
        <Navbar
          user={user}
          notificationsCount={3}
          toggleSidebar={toggleSidebar}
        />

        {/* Dynamic Content Viewport */}
        <main className="flex-1 bg-white overflow-y-auto custom-scrollbar">
          <div className="p-6 lg:p-10 lg:pl-12 max-w-[1600px] w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

