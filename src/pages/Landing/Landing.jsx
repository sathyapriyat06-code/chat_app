import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FiMessageSquare, FiShield, FiZap, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FiMessageSquare />,
      title: "Real-time Syncing",
      desc: "Instant delivery, instant replies. SyncWave keeps your messages in perfect synchronization across all devices.",
      color: "var(--primary-color)"
    },
    {
      icon: <FiZap />,
      title: "Lighting Fast Speed",
      desc: "Engineered on modern performance stacks for zero latency. Load lists, search contacts, and message without waiting.",
      color: "var(--secondary-color)"
    },
    {
      icon: <FiShield />,
      title: "End-to-End Secure",
      desc: "Your privacy is our priority. Feel safe with premium-grade security layers protecting your chats and data.",
      color: "var(--accent-color)"
    }
  ];

  const testimonials = [
    {
      text: "SyncWave is by far the cleanest, fastest messaging layout I have ever used. The dark theme is absolute fire! 🔥",
      name: "Marcus Vance",
      role: "Digital Nomad & Photographer"
    },
    {
      text: "The transitions between sections and the messaging bubbles are so smooth. It's a gorgeous frontend interface.",
      name: "Sarah Chen",
      role: "Software Engineer"
    }
  ];

  return (
    <div className="landing-page-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section container py-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-6 text-start">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge bg-indigo-subtle text-primary px-3 py-2 rounded-pill mb-3 border border-indigo fs-7 fw-bold"
            >
              INTRODUCING SYNCWAVE v1.2
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-4 fw-bold lh-sm mb-3 text-color-main"
            >
              Connect. Communicate. <br />
              <span className="text-gradient">Sync Instantly.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lead text-muted mb-4 pe-lg-5"
            >
              Experience the new benchmark of chatting. Clean, hyper-responsive, beautiful, and secure layout designed for premium team and personal workflows.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="d-flex flex-wrap gap-3"
            >
              <button 
                onClick={() => navigate('/login')}
                className="btn btn-indigo btn-lg px-4"
              >
                Get Started Free
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Learn More
              </button>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-illustration-container d-flex justify-content-center"
            >
              {/* Mock Chat Mockup Vector */}
              <div className="hero-chat-mockup glass-panel p-4 shadow-xl rounded-xl">
                <div className="mock-header d-flex align-items-center gap-2 mb-4 pb-2 border-bottom">
                  <div className="mock-dot-green"></div>
                  <span className="mock-header-name">Sarah Chen</span>
                  <span className="badge rounded-pill bg-success-subtle text-success ms-auto fs-8">Online</span>
                </div>
                
                <div className="mock-chat-area d-flex flex-column gap-3 mb-4">
                  <div className="mock-bubble receiver">
                    <p className="mb-0">Did you check the new SyncWave layouts? 💻</p>
                  </div>
                  <div className="mock-bubble sender">
                    <p className="mb-0">Yes! The animations are super clean. 🔥</p>
                  </div>
                  <div className="mock-bubble receiver">
                    <p className="mb-0">Let's connect and sync our team chat today!</p>
                  </div>
                </div>

                <div className="mock-footer d-flex align-items-center gap-2 pt-2 border-top">
                  <div className="mock-input flex-grow-1">Type a message...</div>
                  <button className="mock-send-btn btn btn-indigo p-2 d-flex align-items-center justify-content-center">
                    <FiMessageSquare />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5 border-top border-secondary-subtle">
        <div className="container py-5 text-center">
          <div className="max-w-2xl mx-auto mb-5">
            <h2 className="display-6 fw-bold text-color-main mb-3">Designed for the Next Wave</h2>
            <p className="lead text-muted">A modern chat interface packed with everything you need to communicate efficiently.</p>
          </div>
          
          <div className="row g-4 pt-4">
            {features.map((feat, index) => (
              <div key={index} className="col-md-4">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="card feature-card h-100 border-0 p-4 shadow-sm hover-lift"
                >
                  <div className="feature-icon-wrapper mb-4" style={{ backgroundColor: `${feat.color}15`, color: feat.color }}>
                    {feat.icon}
                  </div>
                  <h4 className="fw-bold text-color-main mb-3">{feat.title}</h4>
                  <p className="text-muted fs-6 mb-0">{feat.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
<section className="reviews-section py-5 border-top border-secondary-subtle">
  <div className="container py-5">
    <div className="text-center mb-5">
      <h2 className="display-6 fw-bold text-color-main">
        Customer Reviews
      </h2>
      <p className="lead text-muted">
        Trusted by thousands of users worldwide.
      </p>
    </div>

    <div className="row g-4">
      <div className="col-lg-4 col-md-6">
        <div className="card testimonial-card border-0 p-4 shadow-sm h-100">
          <div className="mb-3 text-warning">★★★★★</div>
          <p className="text-muted">
            SyncWave has transformed our communication workflow. The interface
            is clean, responsive, and easy to use.
          </p>
          <h6 className="fw-bold mb-1">John Anderson</h6>
          <small className="text-muted">Project Manager</small>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card testimonial-card border-0 p-4 shadow-sm h-100">
          <div className="mb-3 text-warning">★★★★★</div>
          <p className="text-muted">
            The real-time synchronization works flawlessly. I can access my
            messages instantly on every device.
          </p>
          <h6 className="fw-bold mb-1">Sarah Williams</h6>
          <small className="text-muted">UI Designer</small>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card testimonial-card border-0 p-4 shadow-sm h-100">
          <div className="mb-3 text-warning">★★★★★</div>
          <p className="text-muted">
            Fast, secure, and visually appealing. One of the best messaging
            platforms I've used.
          </p>
          <h6 className="fw-bold mb-1">Michael Brown</h6>
          <small className="text-muted">Software Engineer</small>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 border-top border-secondary-subtle">
        <div className="container py-5">
          <h2 className="display-6 fw-bold text-center text-color-main mb-5">Loved by Creators</h2>
          <div className="row g-4 justify-content-center">
            {testimonials.map((test, index) => (
              <div key={index} className="col-md-5">
                <div className="card testimonial-card border-0 p-4 shadow-sm h-100">
                  <p className="testimonial-text mb-4 text-muted">"{test.text}"</p>
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar-placeholder">{test.name[0]}</div>
                    <div>
                      <h6 className="mb-0 fw-bold">{test.name}</h6>
                      <span className="text-muted fs-8">{test.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
