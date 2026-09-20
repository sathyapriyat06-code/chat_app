import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChatCard from '../ChatCard/ChatCard';
import { mockChats, mockUsers } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatList.css';

const ChatList = ({ activeChatId }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = mockChats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onlineUsers = mockUsers.filter(user => user.status === 'online');

  return (
    <div className="chat-list-container d-flex flex-column h-100 border-end border-secondary-subtle">
      {/* Search and Header Section */}
      <div className="p-3 bg-card-custom border-bottom">
        <h4 className="mb-3 font-weight-bold d-flex align-items-center justify-content-between">
          <span>Chats</span>
          <span className="badge rounded-pill bg-light text-primary font-weight-normal border fs-6">
            {mockChats.length}
          </span>
        </h4>
        <SearchBar 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search conversations..."
        />
      </div>

      {/* Online Now Horizontal Section */}
      {onlineUsers.length > 0 && (
        <div className="online-section p-3 border-bottom overflow-x-auto">
          <p className="section-title mb-2">Online Now</p>
          <div className="d-flex gap-3">
            {onlineUsers.map(user => (
              <div key={user.id} className="d-flex flex-column align-items-center online-avatar-container">
                <div className="online-ring">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="rounded-circle online-avatar"
                  />
                </div>
                <span className="online-avatar-name text-truncate">{user.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chats Scroll Section */}
      <div className="chats-scroll flex-grow-1 p-2 overflow-y-auto">
        <p className="section-title px-2 mb-2">Recent Messages</p>
        <AnimatePresence>
          {filteredChats.length > 0 ? (
            filteredChats.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <ChatCard 
                  chat={chat} 
                  isActive={activeChatId === chat.id} 
                />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-5">
              <p className="text-muted fs-6 mb-0">No conversations found</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatList;
