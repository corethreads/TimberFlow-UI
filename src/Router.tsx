import React, { useState } from "react";
import { View } from "./UItypes/UItypes";
import Dashboard from "./presentations/Dashboard";

const TABRouter: React.FC = () => {

  const [activeView, setActiveView] = useState<View>(View.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  t
  // Helper to render the currently active tab/view
  const renderActiveView = () => {
    switch (activeView) {
      case View.DASHBOARD: return <Dashboard />;


    }
  };
}
