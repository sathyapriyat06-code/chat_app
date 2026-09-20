import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import MessageBubble from '../../components/MessageBubble/MessageBubble';
import { mockGroups, mockGroupMessages, mockUsers } from '../../data/mockData';
import { FiChevronLeft, FiSmile, FiPaperclip, FiSend, FiInfo, FiUsers, FiLayers } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Groups.css';

const Groups = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [typingUser, setTypingUser] = useState('');
  const [showMemberDrawer, setShowMemberDrawer] = useState(true);

  const messagesEndRef = useRef(null);

  // Filter groups by search query
  const filteredGroups = mockGroups.filter(g =>
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update active group details when route parameter changes
  useEffect(() => {
    if (groupId) {
      const currentGroup = mockGroups.find(g => g.id === groupId);
      if (currentGroup) {
        setActiveGroup(currentGroup);
        setMessages(mockGroupMessages[groupId] || []);
        setInputText('');
        setTypingUser('');
      } else {
        navigate('/groups');
      }
    } else {
      setActiveGroup(null);
      setMessages([]);
    }
  }, [groupId, navigate]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingUser]);

  // Handle message send
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: `group-my-msg-${Date.now()}`,
      senderId: 'currentUser',
      senderName: 'Alex Rivera',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // Trigger mock auto-reply from a group member
    const replyingMemberId = activeGroup.memberIds.filter(id => id !== 'currentUser')[
      Math.floor(Math.random() * (activeGroup.memberIds.length - 1))
    ];
    const replyingMember = mockUsers.find(u => u.id === replyingMemberId) || { name: 'Sarah Chen' };

    setTimeout(() => {
      setTypingUser(replyingMember.name);
    }, 500);

    setTimeout(() => {
      setTypingUser('');
      const replyMsg = {
        id: `group-reply-msg-${Date.now()}`,
        senderId: replyingMemberId,
        senderName: replyingMember.name,
        text: getRandomGroupReply(replyingMember.name),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, replyMsg]);
    }, 2000);
  };

  const getRandomGroupReply = (name) => {
    const replies = [
      "I completely agree with that idea! Let's build it.",
      "Just checked the style variables. The colors match perfectly.",
      "I'm working on the next feature updates right now.",
      "Can we push this revision to staging today?",
      "Perfect sync! 🌊",
      "Let me pull down the latest repository branch and verify."
    ];
    return `${replies[Math.floor(Math.random() * replies.length)]}`;
  };

  // Helper to fetch details of a member in the group
  const getGroupMembers = () => {
    if (!activeGroup) return [];
    return activeGroup.memberIds.map(id => {
      if (id === 'currentUser') {
        return {
          id: 'currentUser',
          name: 'Alex Rivera',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
          status: 'online',
          bio: 'Lead Designer'
        };
      }
      return mockUsers.find(u => u.id === id);
    }).filter(Boolean);
  };

  return (
    <div className="groups-page-container d-flex h-100 w-100">
      {/* Left panel: Group channels listings */}
      <div className={`groups-left-panel h-100 border-end border-secondary-subtle d-md-block ${groupId ? 'd-none' : 'd-block'}`}>
        <div className="p-3 bg-card-custom border-bottom">
          <h4 className="mb-3 font-weight-bold d-flex align-items-center justify-content-between">
            <span>Groups</span>
            <span className="badge rounded-pill bg-light text-primary border fs-6">
              {mockGroups.length}
            </span>
          </h4>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search group channels..."
          />
        </div>

        <div className="groups-scroll flex-grow-1 p-2 overflow-y-auto">
          <AnimatePresence>
            {filteredGroups.length > 0 ? (
              filteredGroups.map((g, idx) => (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className={`group-channel-card d-flex align-items-center p-3 gap-3 ${groupId === g.id ? 'active' : ''}`}
                  onClick={() => navigate(`/groups/${g.id}`)}
                >
                  <img src={g.avatar} alt={g.name} className="rounded-circle group-card-avatar" />
                  <div className="group-card-content flex-grow-1 overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="group-card-name mb-0 text-truncate">{g.name}</h6>
                      <span className="group-card-time">{g.timestamp}</span>
                    </div>
                    <p className="group-card-last-msg mb-0 text-truncate text-muted">{g.lastMessage}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-5">
                <p className="text-muted fs-6 mb-0">No groups found</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Center & Right panels: Messaging area and member drawer */}
      {activeGroup ? (
        <div className={`groups-right-view flex-grow-1 d-flex h-100 ${groupId ? 'd-flex' : 'd-none d-md-flex'}`}>
          
          {/* Active Chat Conversation Panel */}
          <div className="active-group-chat flex-grow-1 d-flex flex-column h-100">
            {/* Header */}
            <div className="chat-header-bar d-flex align-items-center justify-content-between px-3 border-bottom bg-sidebar">
              <div className="d-flex align-items-center gap-3 overflow-hidden">
                <button onClick={() => navigate('/groups')} className="btn btn-back-mobile d-md-none p-1">
                  <FiChevronLeft className="fs-4" />
                </button>
                <img src={activeGroup.avatar} alt={activeGroup.name} className="rounded-circle active-chat-avatar" />
                <div className="active-user-details overflow-hidden">
                  <h5 className="mb-0 text-truncate active-user-name">{activeGroup.name}</h5>
                  <span className="active-user-status-text text-muted">{activeGroup.memberCount} members</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowMemberDrawer(!showMemberDrawer)}
                className={`btn btn-action-icon ${showMemberDrawer ? 'active' : ''}`}
                aria-label="Toggle group members details"
              >
                <FiInfo />
              </button>
            </div>

            {/* Messages body with sender tag wrapper */}
            <div className="messages-container flex-grow-1 p-4 overflow-y-auto">
              {messages.map((msg) => {
                const isSender = msg.senderId === 'currentUser';
                return (
                  <div key={msg.id} className={`group-message-block d-flex flex-column mb-3 ${isSender ? 'align-items-end' : 'align-items-start'}`}>
                    {!isSender && <span className="group-sender-name mb-1">{msg.senderName}</span>}
                    <MessageBubble message={msg} isSender={isSender} />
                  </div>
                );
              })}

              {typingUser && (
                <div className="d-flex flex-column align-items-start mb-3 animate-fade-in">
                  <span className="group-sender-name mb-1">{typingUser} is typing...</span>
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="chat-input-bar px-3 py-3 border-top bg-sidebar">
              <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
                <button type="button" className="btn btn-action-icon"><FiSmile /></button>
                <button type="button" className="btn btn-action-icon"><FiPaperclip /></button>
                <input
                  type="text"
                  className="form-control message-input-box"
                  placeholder="Send to group..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" className="btn btn-indigo send-message-btn p-2 d-flex align-items-center justify-content-center">
                  <FiSend className="logo-icon-send" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Panel: Togglable Member Drawer */}
          {showMemberDrawer && (
            <div className="group-member-drawer border-start border-secondary-subtle bg-sidebar p-3 d-flex flex-column">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2 pb-2 border-bottom">
                <FiUsers className="text-primary" />
                <span>Group Information</span>
              </h5>

              <p className="group-desc text-muted mb-4 fs-8">{activeGroup.description}</p>
              
              <h6 className="section-title mb-3">Group Members ({activeGroup.memberCount})</h6>
              <div className="member-list flex-grow-1 overflow-y-auto">
                {getGroupMembers().map(member => (
                  <div key={member.id} className="d-flex align-items-center gap-2 mb-3 py-1">
                    <div className="position-relative">
                      <img src={member.avatar} alt={member.name} className="rounded-circle member-avatar" />
                      <span className={`position-absolute bottom-0 end-0 badge border border-2 border-white rounded-circle p-1 status-dot ${member.status === 'online' ? 'bg-success' : 'bg-warning'}`} />
                    </div>
                    <div className="overflow-hidden">
                      <h6 className="member-name mb-0 text-truncate">{member.name}</h6>
                      <span className="member-role text-muted fs-9 d-block text-truncate">
                        {member.id === 'currentUser' ? 'Group Owner' : (member.bio || 'Member')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Default Groups Welcome view */
        <div className="dashboard-right-panel flex-grow-1 d-none d-md-flex flex-column align-items-center justify-content-center text-center p-5 bg-chat-area">
          <div className="welcome-illustration-wrapper mb-4">
            <svg viewBox="0 0 200 200" className="welcome-svg">
              <defs>
                <linearGradient id="gradGroup" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--secondary-color)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="url(#gradGroup)" opacity="0.08" className="svg-circle-pulse" />
              <circle cx="80" cy="90" r="24" fill="var(--primary-color)" opacity="0.4" />
              <circle cx="120" cy="90" r="24" fill="var(--secondary-color)" opacity="0.4" />
              <circle cx="100" cy="110" r="30" fill="url(#gradGroup)" />
              <circle cx="100" cy="105" r="3" fill="white" />
              <circle cx="107" cy="105" r="3" fill="white" />
              <circle cx="93" cy="105" r="3" fill="white" />
            </svg>
            <div className="illustration-float-icon">
              <FiLayers />
            </div>
          </div>

          <h3 className="fw-bold mb-2 text-color-main">SyncWave Groups</h3>
          <p className="text-muted max-w-sm mb-4">
            Select a collaborative group channel from the list to start messaging with multiple teammates instantly.
          </p>
        </div>
      )}
    </div>
  );
};

export default Groups;
