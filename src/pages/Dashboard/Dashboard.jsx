import React from 'react';
import ChatList from '../../components/ChatList/ChatList';
import { FiSend, FiMessageSquare } from 'react-icons/fi';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container d-flex h-100 w-100">
      {/* Left chat listings panel */}
      <div className="dashboard-left-panel h-100">
        <ChatList activeChatId={null} />
      </div>

      {/* Right default welcome panel */}
      <div className="dashboard-right-panel flex-grow-1 d-none d-md-flex flex-column align-items-center justify-content-center text-center p-5">
        <div className="welcome-illustration-wrapper mb-4">
          {/* Animated SVG Chat vector */}
          <svg viewBox="0 0 200 200" className="welcome-svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--primary-color)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'var(--secondary-color)', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'var(--primary-color)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#grad1)" opacity="0.08" className="svg-circle-pulse" />
            <path d="M60 90 h80 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-60 l-20 20 v-20 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 z" fill="url(#grad2)" opacity="0.15" />
            <path d="M70 70 h80 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-20 v20 l-20 -20 h-40 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 z" fill="url(#grad1)" />
            <circle cx="100" cy="95" r="4" fill="white" />
            <circle cx="110" cy="95" r="4" fill="white" />
            <circle cx="120" cy="95" r="4" fill="white" />
          </svg>
          <div className="illustration-float-icon">
            <FiSend />
          </div>
        </div>

        <h3 className="fw-bold mb-2 text-color-main">SyncWave Dashboard</h3>
        <p className="text-muted max-w-sm mb-4">
          Select a conversation from the chat list to start syncing, or navigate to Contacts to search for new team members.
        </p>

        <span className="badge rounded-pill bg-indigo-subtle text-primary border border-indigo px-3 py-2 fw-semibold d-inline-flex align-items-center gap-2">
          <FiMessageSquare /> Secure end-to-end messaging active
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
