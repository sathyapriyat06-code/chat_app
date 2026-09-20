import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './UserCard.css';

const UserCard = ({ user, onMessage }) => {
  const getStatusLabel = (status) => {
    switch (status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      default: return 'Offline';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-success';
      case 'away': return 'bg-warning';
      default: return 'bg-secondary';
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
      className="card user-card h-100 border-0 shadow-sm overflow-hidden"
    >
      <div className="card-body p-4 d-flex flex-column align-items-center text-center">
        {/* Avatar with Status Ring */}
        <div className="position-relative mb-3">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="rounded-circle user-card-avatar"
          />
          <span className={`position-absolute bottom-0 end-0 badge border border-3 border-white rounded-circle p-2 status-ring ${getStatusColor(user.status)}`} />
        </div>
        
        {/* Name and Status Label */}
        <h5 className="user-card-name mb-1">{user.name}</h5>
        <span className={`badge rounded-pill text-white mb-3 px-3 py-1 bg-opacity-75 ${getStatusColor(user.status)}`}>
          {getStatusLabel(user.status)}
        </span>
        
        {/* Biography */}
        <p className="user-card-bio text-muted mb-4 flex-grow-1">
          {user.bio || "No status bio updated."}
        </p>
        
        {/* Action Button */}
        <button 
          onClick={() => onMessage(user)}
          className="btn btn-indigo w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <FiMessageSquare />
          <span>Send Message</span>
        </button>
      </div>
    </motion.div>
  );
};

export default UserCard;
