import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { mockUsers, mockChats } from '../../data/mockData';
import { motion } from 'framer-motion';
import './Contacts.css';

const Contacts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMessageUser = (user) => {
    // Find if there is an existing chat with this user
    const existingChat = mockChats.find(chat => chat.userId === user.id);
    if (existingChat) {
      navigate(`/chat/${existingChat.id}`);
    } else {
      // If no chat, we default redirect to dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="contacts-page-container p-4 overflow-y-auto h-100">
      <div className="container py-4">
        {/* Title and Search Filter Toolbar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-5">
          <div>
            <h2 className="fw-bold mb-1 text-color-main">Contacts List</h2>
            <p className="text-muted mb-0">Browse through your synced team contacts, view online statuses, and start instant conversations.</p>
          </div>
          
          <div className="search-contacts-wrapper">
            <SearchBar 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Search contacts..." 
            />
          </div>
        </div>

        {/* Contacts Grid Deck */}
        <div className="row g-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div key={user.id} className="col-xl-3 col-lg-4 col-sm-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <UserCard 
                    user={user} 
                    onMessage={handleMessageUser} 
                  />
                </motion.div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted fs-5">No contacts matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
