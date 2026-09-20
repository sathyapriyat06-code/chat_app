import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { mockCalls } from '../../data/mockData';
import { 
  FiPhone, 
  FiVideo, 
  FiArrowDownLeft, 
  FiArrowUpRight, 
  FiMic, 
  FiMicOff, 
  FiVolume2, 
  FiVolumeX, 
  FiX 
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Calls.css';

const Calls = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCall, setActiveCall] = useState(null); // { name, avatar, type, isRinging, callDuration }
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);

  const filteredCalls = mockCalls.filter(call =>
    call.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    call.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Active call timer simulation
  useEffect(() => {
    let interval = null;
    if (activeCall && !activeCall.isRinging) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [activeCall]);

  const handleStartCall = (name, avatar, type) => {
    setActiveCall({
      name,
      avatar,
      type,
      isRinging: true
    });

    // Simulate connection after 2 seconds
    setTimeout(() => {
      setActiveCall(prev => {
        if (prev) {
          return { ...prev, isRinging: false };
        }
        return null;
      });
    }, 2000);
  };

  const handleEndCall = () => {
    setActiveCall(null);
    setIsMuted(false);
    setIsSpeaker(false);
  };

  const formatDuration = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getCallIcon = (status) => {
    switch (status) {
      case 'missed':
        return <FiArrowDownLeft className="call-arrow text-danger" />;
      case 'incoming':
        return <FiArrowDownLeft className="call-arrow text-success" />;
      default:
        return <FiArrowUpRight className="call-arrow text-primary" />;
    }
  };

  const getCallStatusLabel = (status, type) => {
    const formattedType = type === 'video' ? 'Video' : 'Audio';
    switch (status) {
      case 'missed': return `Missed ${formattedType}`;
      case 'incoming': return `Incoming ${formattedType}`;
      default: return `Outgoing ${formattedType}`;
    }
  };

  return (
    <div className="calls-page-container p-4 overflow-y-auto h-100 position-relative">
      <div className="container py-4">
        {/* Header Title with Search Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-5">
          <div>
            <h2 className="fw-bold mb-1 text-color-main">Call Logs</h2>
            <p className="text-muted mb-0">Review past audio and video calling waves, and trigger instant calls to active colleagues.</p>
          </div>
          
          <div className="search-calls-wrapper">
            <SearchBar 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Search call logs..." 
            />
          </div>
        </div>

        {/* List of Call Logs cards */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm calls-list-card p-3">
              {filteredCalls.length > 0 ? (
                filteredCalls.map((call, idx) => (
                  <div 
                    key={call.id} 
                    className={`d-flex align-items-center justify-content-between py-3 ${idx < filteredCalls.length - 1 ? 'border-bottom border-light-subtle' : ''}`}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <img src={call.avatar} alt={call.userName} className="rounded-circle call-avatar" />
                      <div>
                        <h6 className="call-name mb-1">{call.userName}</h6>
                        <div className="d-flex align-items-center gap-1">
                          {getCallIcon(call.status)}
                          <span className="text-muted fs-8">
                            {getCallStatusLabel(call.status, call.type)} • {call.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Dial Triggers */}
                    <div className="d-flex gap-2">
                      <button 
                        onClick={() => handleStartCall(call.userName, call.avatar, 'audio')}
                        className="btn btn-call-trigger audio"
                        aria-label="Start Audio Call"
                      >
                        <FiPhone />
                      </button>
                      <button 
                        onClick={() => handleStartCall(call.userName, call.avatar, 'video')}
                        className="btn btn-call-trigger video"
                        aria-label="Start Video Call"
                      >
                        <FiVideo />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted mb-0">No calls logs found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Calling Dialog Screen simulation */}
      <AnimatePresence>
        {activeCall && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="call-screen-overlay d-flex flex-column align-items-center justify-content-between py-5 text-center text-white"
          >
            {/* Header calling status */}
            <div className="pt-4">
              <span className="badge rounded-pill bg-white bg-opacity-10 border border-white border-opacity-10 px-3 py-2 mb-3">
                SYNCWAVE SECURED {activeCall.type.toUpperCase()} CALL
              </span>
              <h3 className="fw-bold mb-1">{activeCall.name}</h3>
              <p className="text-white-50 mb-0">
                {activeCall.isRinging ? 'Ringing...' : `Connected (${formatDuration(seconds)})`}
              </p>
            </div>

            {/* Calling Avatar ripple container */}
            <div className="call-avatar-wrapper position-relative">
              <div className={`avatar-ripple ${activeCall.isRinging ? 'ringing' : 'active'}`}></div>
              <img 
                src={activeCall.avatar} 
                alt={activeCall.name} 
                className="rounded-circle calling-avatar" 
              />
            </div>

            {/* Bottom Controls toolbar */}
            <div className="pb-4">
              <div className="d-flex align-items-center justify-content-center gap-4 mb-5">
                {/* Mute button */}
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={`btn btn-call-ctrl ${isMuted ? 'active' : ''}`}
                >
                  {isMuted ? <FiMicOff /> : <FiMic />}
                </button>
                
                {/* Speaker button */}
                <button 
                  onClick={() => setIsSpeaker(!isSpeaker)}
                  className={`btn btn-call-ctrl ${isSpeaker ? 'active' : ''}`}
                >
                  {isSpeaker ? <FiVolumeX /> : <FiVolume2 />}
                </button>
              </div>

              {/* Decline trigger button */}
              <button 
                onClick={handleEndCall}
                className="btn btn-decline-call d-flex align-items-center justify-content-center mx-auto"
                aria-label="Decline or End call"
              >
                <FiX />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Calls;
