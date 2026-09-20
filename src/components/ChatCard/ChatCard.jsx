import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatCard.css';

const ChatCard = ({ chat, isActive }) => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate(`/chat/${chat.id}`);
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'online': return 'bg-success';
      case 'away': return 'bg-warning';
      default: return 'bg-secondary';
    }
  };

  return (
    <div 
      className={`chat-card d-flex align-items-center p-3 gap-3 ${isActive ? 'active' : ''}`}
      onClick={handleChatClick}
    >
      <div className="position-relative">
        <img 
          src={chat.avatar} 
          alt={chat.name} 
          className="rounded-circle chat-card-avatar"
        />
        <span className={`position-absolute bottom-0 end-0 badge border border-2 border-white rounded-circle p-1 status-dot ${getStatusClass(chat.status)}`} />
      </div>
      
      <div className="chat-card-content flex-grow-1 overflow-hidden">
        <div className="d-flex align-items-center justify-content-between mb-1">
          <h6 className="chat-card-name mb-0 text-truncate">{chat.name}</h6>
          <span className="chat-card-time">{chat.timestamp}</span>
        </div>
        
        <div className="d-flex align-items-center justify-content-between">
          <p className="chat-card-last-msg mb-0 text-truncate text-muted">{chat.lastMessage}</p>
          {chat.unreadCount > 0 && (
            <span className="badge rounded-pill bg-primary chat-card-unread">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
