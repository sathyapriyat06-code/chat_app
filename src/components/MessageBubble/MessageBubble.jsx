import React from 'react';
import { motion } from 'framer-motion';
import './MessageBubble.css';

const MessageBubble = ({ message, isSender }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, type: 'spring', stiffness: 260, damping: 20 }}
      className={`message-bubble-wrapper d-flex mb-3 ${isSender ? 'justify-content-end' : 'justify-content-start'}`}
    >
      <div className={`message-bubble p-3 ${isSender ? 'sender' : 'receiver'}`}>
        <p className="message-text mb-1">{message.text}</p>
        <span className="message-time d-block text-end">{message.timestamp}</span>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
