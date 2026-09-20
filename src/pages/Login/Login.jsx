import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiSend } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!email) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email format is invalid";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock login validation successful -> navigate to app dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-page-wrapper d-flex align-items-center justify-content-center">
      {/* Top Absolute floating theme button */}
      <div className="login-theme-btn">
        <ThemeToggle />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-10">
            {/* Logo Brand Header */}
            <div className="text-center mb-4">
              <Link className="d-inline-flex align-items-center gap-2 text-decoration-none" to="/">
                <div className="logo-icon-container">
                  <FiSend className="logo-icon" />
                </div>
                <span className="logo-text text-white">Sync<span className="logo-highlight">Wave</span></span>
              </Link>
              <p className="text-white-50 mt-2">Connect. Communicate. Sync Instantly.</p>
            </div>

            {/* Glassmorphism Card panel */}
            <div className="card login-glass-card glass-panel p-4 p-md-5 border-0 shadow-lg text-start">
              <h3 className="card-title fw-bold text-center mb-4 text-color-main">Welcome Back</h3>
              
              <form onSubmit={handleLoginSubmit}>
                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label text-muted">Email Address</label>
                  <div className="input-group-custom">
                    <FiMail className="input-icon" />
                    <input
                      type="email"
                      className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({...errors, email: ''}); }}
                    />
                  </div>
                  {errors.email && <div className="invalid-feedback-custom">{errors.email}</div>}
                </div>

                {/* Password Field */}
                <div className="mb-3">
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

                {/* Remember Me and Forgot Link */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check form-switch d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="form-check-input"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe" className="form-check-label text-muted fs-8">Remember me</label>
                  </div>
                  <a href="#" className="forgot-link fs-8">Forgot Password?</a>
                </div>

                {/* Login Button */}
                <button type="submit" className="btn btn-indigo w-100 btn-lg mb-3 py-2 fs-6">
                  Sign In
                </button>

                {/* Google Sign In divider */}
                <div className="divider-container my-3">
                  <hr className="divider-line" />
                  <span className="divider-text text-muted fs-8">or continue with</span>
                  <hr className="divider-line" />
                </div>

                {/* Google Button */}
                <button 
                  type="button" 
                  onClick={() => navigate('/dashboard')}
                  className="btn btn-outline-custom-google w-100 py-2 d-flex align-items-center justify-content-center gap-2 mb-4"
                >
                  <FcGoogle className="fs-5" />
                  <span>Google Account</span>
                </button>

                {/* Register redirection link */}
                <div className="text-center">
                  <p className="mb-0 text-muted fs-8">
                    Don't have an account? <Link to="/register" className="register-redirect-link fw-bold">Sign Up</Link>
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

export default Login;
