import React, { useState } from 'react';
import { FiMessageSquare, FiUserPlus, FiInfo, FiCheck, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './NotificationCard.css';

const NotificationCard = ({ notification, onAction }) => {
  const [actionTaken, setActionTaken] = useState(null);

  const getIcon = (type) => {
    switch (type) {
      case 'message':
        return <FiMessageSquare className="notif-icon-style text-primary" />;
      case 'friend_request':
        return <FiUserPlus className="notif-icon-style text-warning" />;
      default:
        return <FiInfo className="notif-icon-style text-accent" />;
    }
  };

  const getBackgroundClass = (type) => {
    switch (type) {
      case 'message': return 'bg-msg';
      case 'friend_request': return 'bg-friend';
      default: return 'bg-system';
    }
  };

  const handleFriendAction = (action) => {
    setActionTaken(action);
    if (onAction) {
      onAction(notification.id, action);
    }
  };

  return (
    <div className={`card notification-card border-0 shadow-sm p-3 mb-3 ${notification.read ? 'read' : 'unread'} ${getBackgroundClass(notification.type)}`}>
      <div className="d-flex align-items-start gap-3">
        {/* Type Icon container */}
        <div className="notif-icon-container">
          {getIcon(notification.type)}
        </div>
        
        {/* Body content */}
        <div className="flex-grow-1">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="notif-title mb-0">{notification.title}</h6>
            <span className="notif-time text-muted">{notification.time}</span>
          </div>
          <p className="notif-body mb-0 text-muted">{notification.body}</p>
          
          {/* Action trigger overlay */}
          {notification.type === 'friend_request' && !actionTaken && (
            <div className="d-flex gap-2 mt-3">
              <button 
                onClick={() => handleFriendAction('accept')}
                className="btn btn-sm btn-indigo d-flex align-items-center gap-1 py-1 px-3"
              >
                <FiCheck /> Accept
              </button>
              <button 
                onClick={() => handleFriendAction('decline')}
                className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1 py-1 px-3"
              >
                <FiX /> Decline
              </button>
            </div>
          )}

          {actionTaken && (
            <div className="mt-3">
              <span className={`badge rounded-pill text-white py-1 px-3 ${actionTaken === 'accept' ? 'bg-success' : 'bg-secondary'}`}>
                Request {actionTaken === 'accept' ? 'Accepted' : 'Declined'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
