import React, { useState } from 'react';
import { FiMail, FiPhone, FiInfo, FiEdit2, FiCheck, FiCamera } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './ProfileCard.css';

const ProfileCard = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    bio: user.bio,
    avatar: user.avatar,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setIsEditing(false);
  };

  return (
    <div className="card profile-card border-0 shadow-lg p-4">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <h4 className="card-title font-weight-bold mb-0 text-gradient">My Profile</h4>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`btn-edit-toggle ${isEditing ? 'active' : ''}`}
          aria-label={isEditing ? 'Cancel edit' : 'Edit profile'}
        >
          {isEditing ? <FiCheck style={{ opacity: 0 }} /> : <FiEdit2 />}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        {/* Avatar Upload */}
        <div className="avatar-upload-wrapper mb-4">
          <img 
            src={formData.avatar} 
            alt={formData.name} 
            className="rounded-circle profile-avatar"
          />
          {isEditing && (
            <label className="avatar-camera-btn">
              <FiCamera />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleAvatarChange} 
                className="d-none"
              />
            </label>
          )}
        </div>

        {isEditing ? (
          <div className="w-100 flex-grow-1 edit-form-fields">
            <div className="mb-3">
              <label className="form-label text-muted">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control profile-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label text-muted">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control profile-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control profile-input"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-muted">Short Biography</label>
              <textarea
                name="bio"
                className="form-control profile-textarea"
                value={formData.bio}
                onChange={handleInputChange}
                rows="3"
              />
            </div>

            <div className="d-flex gap-3">
              <button 
                type="button" 
                onClick={() => { setIsEditing(false); setFormData(user); }} 
                className="btn btn-outline-secondary w-50"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-indigo w-50">
                Save Details
              </button>
            </div>
          </div>
        ) : (
          <div className="w-100 text-center">
            <h4 className="user-profile-name mb-1">{user.name}</h4>
            <p className="user-profile-bio text-muted px-4 mb-4">{user.bio}</p>
            
            <hr className="my-4 card-divider" />
            
            <div className="profile-details-list text-start">
              <div className="d-flex align-items-center gap-3 py-3 border-bottom border-light-subtle">
                <div className="profile-detail-icon"><FiMail /></div>
                <div className="overflow-hidden">
                  <span className="detail-label d-block">Email</span>
                  <span className="detail-value text-truncate">{user.email}</span>
                </div>
              </div>
              
              <div className="d-flex align-items-center gap-3 py-3 border-bottom border-light-subtle">
                <div className="profile-detail-icon"><FiPhone /></div>
                <div>
                  <span className="detail-label d-block">Phone</span>
                  <span className="detail-value">{user.phone}</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 py-3">
                <div className="profile-detail-icon"><FiInfo /></div>
                <div>
                  <span className="detail-label d-block">Status</span>
                  <span className="detail-value text-success font-weight-bold">Active Online</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileCard;
