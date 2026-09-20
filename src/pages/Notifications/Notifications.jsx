import React, { useState } from 'react';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import { mockNotifications } from '../../data/mockData';
import { FiCheckSquare, FiBellOff } from 'react-icons/fi';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkAllRead = () => {
    const updated = notifications.map(notif => ({ ...notif, read: true }));
    setNotifications(updated);
  };

  const handleNotificationAction = (id, action) => {
    // Perform trigger side effects or logs
    console.log(`Notification ${id} received action: ${action}`);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-page-container p-4 overflow-y-auto h-100">
      <div className="container py-4">
        {/* Title Header with mark actions */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-5">
          <div>
            <h2 className="fw-bold mb-1 text-color-main d-flex align-items-center gap-2">
              <span>Alert Notifications</span>
              {unreadCount > 0 && (
                <span className="badge rounded-pill bg-danger fs-6 animate-pulse">
                  {unreadCount} New
                </span>
              )}
            </h2>
            <p className="text-muted mb-0">Monitor system changes, friend request approvals, and active incoming message triggers.</p>
          </div>

          {unreadCount > 0 && (
            <button 
              onClick={handleMarkAllRead}
              className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2 px-3 py-2 btn-mark-all"
            >
              <FiCheckSquare /> Mark all as read
            </button>
          )}
        </div>

        {/* List of Notification cards */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {notifications.length > 0 ? (
              notifications.map(notif => (
                <NotificationCard 
                  key={notif.id} 
                  notification={notif} 
                  onAction={handleNotificationAction}
                />
              ))
            ) : (
              <div className="text-center py-5">
                <FiBellOff className="fs-1 text-muted mb-3" />
                <p className="text-muted mb-0">All clear! No alerts available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
