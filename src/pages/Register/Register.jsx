import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiCamera, FiSend } from 'react-icons/fi';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!name.trim()) tempErrors.name = "Full Name is required";
    if (!email) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email format is invalid";
    }
    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(phone)) {
      tempErrors.phone = "Phone format is invalid";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock registration successful -> navigate to login page
      navigate('/login');
    }
  };

  return (
    <div className="register-page-wrapper d-flex align-items-center justify-content-center">
      {/* Absolute theme button */}
      <div className="register-theme-btn">
        <ThemeToggle />
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9 col-sm-11">
            {/* Logo Brand Header */}
            <div className="text-center mb-4">
              <Link className="d-inline-flex align-items-center gap-2 text-decoration-none" to="/">
                <div className="logo-icon-container">
                  <FiSend className="logo-icon" />
                </div>
                <span className="logo-text text-white">Sync<span className="logo-highlight">Wave</span></span>
              </Link>
            </div>

            {/* Registration Form Card */}
            <div className="card register-glass-card glass-panel p-4 p-md-5 border-0 shadow-lg text-start">
              <h3 className="card-title fw-bold text-center mb-4 text-color-main">Create Account</h3>
              
              <form onSubmit={handleRegisterSubmit}>
                {/* Profile Photo Upload Section */}
                <div className="d-flex flex-column align-items-center mb-4 text-center">
                  <div className="avatar-preview-container position-relative">
                    <img 
                      src={avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"} 
                      alt="Profile Preview" 
                      className="rounded-circle register-avatar"
                    />
                    <label className="register-camera-btn">
                      <FiCamera />
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleAvatarChange} 
                        className="d-none"
                      />
                    </label>
                  </div>
                  <span className="fs-8 text-muted mt-2">Upload profile photo (optional)</span>
                </div>

                <div className="row">
                  {/* Full Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Full Name</label>
                    <div className="input-group-custom">
                      <FiUser className="input-icon" />
                      <input
                        type="text"
                        className={`form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({...errors, name: ''}); }}
                      />
                    </div>
                    {errors.name && <div className="invalid-feedback-custom">{errors.name}</div>}
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Email Address</label>
                    <div className="input-group-custom">
                      <FiMail className="input-icon" />
                      <input
                        type="email"
                        className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({...errors, email: ''}); }}
                      />
                    </div>
                    {errors.email && <div className="invalid-feedback-custom">{errors.email}</div>}
                  </div>
                </div>

                <div className="row">
                  {/* Mobile Number */}
                  <div className="col-md-12 mb-3">
                    <label className="form-label text-muted">Mobile Number</label>
                    <div className="input-group-custom">
                      <FiPhone className="input-icon" />
                      <input
                        type="tel"
                        className={`form-control-custom ${errors.phone ? 'is-invalid' : ''}`}
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors({...errors, phone: ''}); }}
                      />
                    </div>
                    {errors.phone && <div className="invalid-feedback-custom">{errors.phone}</div>}
                  </div>
                </div>

                <div className="row">
                  {/* Password */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Password</label>
                    <div className="input-group-custom">
                      <FiLock className="input-icon" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className={`form-control-custom ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors({...errors, password: ''}); }}
                      />
                      <button
                        type="button"
                        className="btn-toggle-eye"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                    {errors.password && <div className="invalid-feedback-custom">{errors.password}</div>}
                  </div>

                  {/* Confirm Password */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-muted">Confirm Password</label>
                    <div className="input-group-custom">
                      <FiLock className="input-icon" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className={`form-control-custom ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value); if (errors.confirmPassword) setErrors({...errors, confirmPassword: ''}); }}
                      />
                    </div>
                    {errors.confirmPassword && <div className="invalid-feedback-custom">{errors.confirmPassword}</div>}
                  </div>
                </div>

                {/* Sign Up Button */}
                <button type="submit" className="btn btn-indigo w-100 btn-lg mb-4 py-2 fs-6">
                  Sign Up
                </button>

                {/* Login redirection */}
                <div className="text-center">
                  <p className="mb-0 text-muted fs-8">
                    Already have an account? <Link to="/login" className="register-redirect-link fw-bold">Sign In</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
