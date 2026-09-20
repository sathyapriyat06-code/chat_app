import React from 'react';
import { Link } from 'react-router-dom';
import { FiSend, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4 col-md-6">
            <Link className="d-flex align-items-center gap-2 mb-3 text-decoration-none" to="/">
              <div className="logo-icon-container small">
                <FiSend className="logo-icon" />
              </div>
              <span className="logo-text">Sync<span className="logo-highlight">Wave</span></span>
            </Link>
            <p className="footer-desc">
              A modern, hyper-fast, secure, and gorgeous messaging platform. Connecting you to the people that matter, instantly.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="#" className="social-icon" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" className="social-icon" aria-label="GitHub"><FiGithub /></a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="footer-title">Product</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#features">Features</a></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">API Docs</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Newsletter</h5>
            <p className="footer-desc">Stay updated with the latest wave of features and updates.</p>
            <form className="newsletter-form d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="form-control" />
              <button type="submit" className="btn btn-indigo px-3">Join</button>
            </form>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pb-4">
          <p className="copyright mb-0">© 2026 SyncWave Inc. All rights reserved.</p>
          <div className="footer-sub-links d-flex gap-3">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
