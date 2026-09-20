import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiSliders, FiBell, FiShield, FiUser } from 'react-icons/fi';
import './Settings.css';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifsEnabled, setNotifsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  const [privacyScope, setPrivacyScope] = useState('contacts');

  return (
    <div className="settings-page-container p-4 overflow-y-auto h-100">
      <div className="container py-4">
        {/* Header Title */}
        <div className="mb-5">
          <h2 className="fw-bold mb-1 text-color-main">Application Settings</h2>
          <p className="text-muted">Configure your communication styles, visual themes, privacy listings and alerts.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            {/* Visual Options Card */}
            <div className="card settings-card border-0 shadow-sm p-4 mb-4">
              <h5 className="settings-section-title d-flex align-items-center gap-2 mb-4">
                <FiSliders className="icon text-primary" />
                <span>Appearance & Theme</span>
              </h5>
              
              <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <div>
                  <h6 className="mb-1 option-header">Dark Mode Theme</h6>
                  <span className="text-muted option-desc">Enable deep background slate mode for screen comfort.</span>
                </div>
                <div className="form-check form-switch">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="darkModeToggle" 
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                  />
                </div>
              </div>
            </div>

            {/* Notification Options Card */}
            <div className="card settings-card border-0 shadow-sm p-4">
              <h5 className="settings-section-title d-flex align-items-center gap-2 mb-4">
                <FiBell className="icon text-warning" />
                <span>Alerts & Notifications</span>
              </h5>
              
              <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <div>
                  <h6 className="mb-1 option-header">Enable Notifications</h6>
                  <span className="text-muted option-desc">Show push notification banners on active chats.</span>
                </div>
                <div className="form-check form-switch">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="notifToggle"
                    checked={notifsEnabled}
                    onChange={(e) => setNotifsEnabled(e.target.checked)}
                  />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between py-3">
                <div>
                  <h6 className="mb-1 option-header">Alert Sounds</h6>
                  <span className="text-muted option-desc">Play chime feedback on new messages.</span>
                </div>
                <div className="form-check form-switch">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="soundToggle"
                    checked={soundEnabled}
                    onChange={(e) => setSoundEnabled(e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Privacy Card */}
            <div className="card settings-card border-0 shadow-sm p-4 mb-4">
              <h5 className="settings-section-title d-flex align-items-center gap-2 mb-4">
                <FiShield className="icon text-success" />
                <span>Security & Privacy</span>
              </h5>

              <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <div>
                  <h6 className="mb-1 option-header">Read Receipts</h6>
                  <span className="text-muted option-desc">Show blue check indicators when message bubbles are viewed.</span>
                </div>
                <div className="form-check form-switch">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="receiptsToggle"
                    checked={readReceipts}
                    onChange={(e) => setReadReceipts(e.target.checked)}
                  />
                </div>
              </div>

              <div className="py-3">
                <label className="form-label mb-1 option-header">Who can see my status</label>
                <span className="text-muted option-desc d-block mb-3">Limit status indicator visibility to select groups.</span>
                
                <select 
                  className="form-select settings-select"
                  value={privacyScope}
                  onChange={(e) => setPrivacyScope(e.target.value)}
                >
                  <option value="everyone">Everyone</option>
                  <option value="contacts">My Contacts</option>
                  <option value="none">Nobody</option>
                </select>
              </div>
            </div>

            {/* Account Management Card */}
            <div className="card settings-card border-0 shadow-sm p-4">
              <h5 className="settings-section-title d-flex align-items-center gap-2 mb-4">
                <FiUser className="icon text-accent" />
                <span>Account Management</span>
              </h5>

              <div className="d-flex flex-column gap-2">
                <button 
                  onClick={() => alert("Mock export initiated!")}
                  className="btn btn-outline-secondary text-start p-3 border rounded-3 w-100 btn-option-action"
                >
                  <h6 className="mb-0 fw-semibold">Export Active Chat Data</h6>
                  <span className="text-muted fs-8 d-block mt-1">Download backup archive of chats and profiles.</span>
                </button>

                <button 
                  onClick={() => alert("History wiped!")}
                  className="btn btn-outline-danger text-start p-3 border border-danger-subtle rounded-3 w-100 btn-option-action"
                >
                  <h6 className="mb-0 text-danger fw-semibold">Wipe Conversations History</h6>
                  <span className="text-muted fs-8 d-block mt-1">Delete all messages cache on mock profiles.</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
