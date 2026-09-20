import React, { useState } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { currentUser } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import './Profile.css';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(currentUser);
  const [showToast, setShowToast] = useState(false);

  const handleSaveProfile = (updatedData) => {
    // Save updated details into state
    setUserProfile(updatedData);
    
    // Simulate updating mock database reference
    currentUser.name = updatedData.name;
    currentUser.email = updatedData.email;
    currentUser.phone = updatedData.phone;
    currentUser.bio = updatedData.bio;
    currentUser.avatar = updatedData.avatar;

    // Show success alert toast
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="profile-page-container p-4 overflow-y-auto h-100">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            {/* Header Title */}
            <div className="mb-4">
              <h2 className="fw-bold mb-1 text-color-main">Profile Configurations</h2>
              <p className="text-muted">Manage your personal details, email addresses, phone contacts, and upload active profile photos.</p>
            </div>

            {/* Profile Card component */}
            <ProfileCard user={userProfile} onSave={handleSaveProfile} />
          </div>
        </div>
      </div>

      {/* Floating Success Toast Alert */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="success-toast-alert shadow-lg d-flex align-items-center gap-2 p-3"
          >
            <FiCheckCircle className="fs-5 text-success-indicator" />
            <div className="fw-semibold text-white">Profile updated successfully!</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
