import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  FiMessageSquare, 
  FiUsers, 
  FiBell, 
  FiUser, 
  FiSettings, 
  FiInfo, 
  FiLogOut,
  FiSend,
  FiPhone,
  FiLayers
} from 'react-icons/fi';
import { currentUser } from '../../data/mockData';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to landing page
    navigate('/');
  };

  const navItems = [
    { path: '/dashboard', label: 'Chats', icon: <FiMessageSquare /> },
    { path: '/groups', label: 'Groups', icon: <FiLayers /> },
    { path: '/calls', label: 'Calls', icon: <FiPhone /> },
    { path: '/contacts', label: 'Contacts', icon: <FiUsers /> },
    { path: '/notifications', label: 'Alerts', icon: <FiBell />, badge: 2 },
    { path: '/profile', label: 'Profile', icon: <FiUser /> },
    { path: '/settings', label: 'Settings', icon: <FiSettings /> },
    { path: '/about', label: 'About', icon: <FiInfo /> },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && <div className="sidebar-overlay d-md-none" onClick={toggleSidebar}></div>}

      <div className={`app-sidebar ${isOpen ? 'show' : ''} d-flex flex-column`}>
        {/* Top Header Logo */}
        <div className="sidebar-header d-flex align-items-center justify-content-between">
          <NavLink className="d-flex align-items-center gap-2 text-decoration-none" to="/dashboard">
            <div className="logo-icon-container small">
              <FiSend className="logo-icon" />
            </div>
            <span className="logo-text text-sm">Sync<span className="logo-highlight">Wave</span></span>
          </NavLink>
          <div className="d-md-none">
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="sidebar-menu flex-grow-1 py-3 px-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              <span className="sidebar-link-label">{item.label}</span>
              {item.badge && (
                <span className="badge rounded-pill bg-danger ms-auto sidebar-badge animate-pulse">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Footer User Info */}
        <div className="sidebar-footer p-3 border-top border-secondary-subtle">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="online-ring">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="rounded-circle sidebar-avatar" 
              />
            </div>
            <div className="user-details overflow-hidden">
              <h6 className="user-name mb-0 text-truncate">{currentUser.name}</h6>
              <span className="user-status text-truncate d-block">Online</span>
            </div>
            <div className="ms-auto d-none d-md-block">
              <ThemeToggle />
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2 logout-btn"
          >
            <FiLogOut />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
