import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChatList from '../../components/ChatList/ChatList';
import MessageBubble from '../../components/MessageBubble/MessageBubble';
import { mockChats, mockMessages } from '../../data/mockData';
import { FiChevronLeft, FiSmile, FiPaperclip, FiSend } from 'react-icons/fi';
import './Chat.css';

const Chat = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  
  const [chatInfo, setChatInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  // Load chat and messages when route parameter changes
  useEffect(() => {
    const currentChat = mockChats.find(c => c.id === chatId);
    if (!currentChat) {
      navigate('/dashboard');
      return;
    }
    setChatInfo(currentChat);
    setMessages(mockMessages[chatId] || []);
    setInputText('');
    setIsTyping(false);
  }, [chatId, navigate]);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: `my-msg-${Date.now()}`,
      senderId: 'currentUser',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setInputText('');

    // Trigger mock auto-reply
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyMsg = {
        id: `reply-msg-${Date.now()}`,
        senderId: chatInfo.userId,
        text: getRandomReply(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, replyMsg]);
    }, 1500);
  };

  const getRandomReply = () => {
    const replies = [
      "Awesome! That makes complete sense. 👍",
      "Let's sync up on this during our next standup.",
      "Thanks for the update. I'll review it shortly.",
      "SyncWave looks incredible! The frontend is so smooth. 🌊",
      "Perfect! Let's get right on it.",
      "I'm currently away from my desk, but I'll review this soon!"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  if (!chatInfo) return null;

  return (
    <div className="chat-page-container d-flex h-100 w-100">
      {/* Left chat list column - hidden on mobile when viewing active chat */}
      <div className={`chat-left-panel h-100 d-md-block ${chatId ? 'd-none' : 'd-block'}`}>
        <ChatList activeChatId={chatId} />
      </div>

      {/* Right active messaging interface column */}
      <div className={`chat-right-panel flex-grow-1 d-flex flex-column h-100 ${chatId ? 'd-flex' : 'd-none d-md-flex'}`}>
        {/* Chat Conversation Header */}
        <div className="chat-header-bar d-flex align-items-center justify-content-between px-3 border-bottom bg-sidebar">
          <div className="d-flex align-items-center gap-3 overflow-hidden">
            {/* Mobile back trigger */}
            <button 
              onClick={() => navigate('/dashboard')}
              className="btn btn-back-mobile d-md-none p-1"
              aria-label="Back to chats"
            >
              <FiChevronLeft className="fs-4" />
            </button>

            {/* Profile Avatar & Details */}
            <div className="position-relative">
              <img 
                src={chatInfo.avatar} 
                alt={chatInfo.name} 
                className="rounded-circle active-chat-avatar"
              />
              <span className={`position-absolute bottom-0 end-0 badge border border-2 border-white rounded-circle p-1 status-dot ${chatInfo.status === 'online' ? 'bg-success' : 'bg-warning'}`} />
            </div>

            <div className="active-user-details overflow-hidden">
              <h5 className="mb-0 text-truncate active-user-name">{chatInfo.name}</h5>
              <span className="active-user-status-text">
                {chatInfo.status === 'online' ? 'Online' : 'Away'}
              </span>
            </div>
          </div>
        </div>

        {/* Messaging Area container */}
        <div className="messages-container flex-grow-1 p-4 overflow-y-auto">
          {messages.map((msg) => (
            <MessageBubble 
              key={msg.id} 
              message={msg} 
              isSender={msg.senderId === 'currentUser'} 
            />
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="d-flex justify-content-start mb-3 animate-fade-in">
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input Toolbar */}
        <div className="chat-input-bar px-3 py-3 border-top bg-sidebar">
          <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
            <button type="button" className="btn btn-action-icon" aria-label="Add emoji">
              <FiSmile />
            </button>
            <button type="button" className="btn btn-action-icon" aria-label="Add attachment">
              <FiPaperclip />
            </button>
            
            <input
              type="text"
              className="form-control message-input-box"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            
            <button type="submit" className="btn btn-indigo send-message-btn p-2 d-flex align-items-center justify-content-center">
              <FiSend className="logo-icon-send" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
