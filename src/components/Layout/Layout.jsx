import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { FiMenu, FiSend } from 'react-icons/fi';
import './Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-layout">
      {/* Sidebar navigation */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content page area */}
      <div className="main-content-wrapper d-flex flex-column">
        {/* Mobile Header Bar */}
        <header className="mobile-header d-md-none d-flex align-items-center justify-content-between px-3 glass-panel">
          <button 
            className="mobile-menu-btn d-flex align-items-center justify-content-center" 
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
          
          <div className="d-flex align-items-center gap-2">
            <div className="logo-icon-container small">
              <FiSend className="logo-icon" />
            </div>
            <span className="logo-text text-sm">Sync<span className="logo-highlight">Wave</span></span>
          </div>

          <div style={{ width: '40px' }}></div> {/* Spacer to balance menu button */}
        </header>

        {/* Content Body */}
        <main className="content-body flex-grow-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
