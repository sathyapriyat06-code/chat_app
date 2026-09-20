import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { FiMessageSquare, FiTrendingUp, FiTarget, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Lead UI/UX Architect",
      bio: "Crafting modern design states and interactive animations for next-gen products.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Sarah Chen",
      role: "Principal Frontend Developer",
      bio: "Specializing in React, complex dashboard architectures, and hyper-responsive grid integrations.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Marcus Vance",
      role: "System Performance Analyst",
      bio: "Ensuring zero-latency connections, local state syncing pipelines and performance audits.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    }
  ];

  return (
    <div className="about-page-container d-flex flex-column h-100 min-vh-100 justify-content-between">
      <div>
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Banner Section */}
        <section className="about-hero text-center py-5 container">
          <div className="py-5">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="display-4 fw-bold mb-3 text-color-main"
            >
              The Story behind <span className="text-gradient">SyncWave</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lead text-muted max-w-lg mx-auto"
            >
              A collaboration driven by design excellence and rapid communication efficiency. Built to redefine standard chat frontend interfaces.
            </motion.p>
          </div>
        </section>

        {/* Mission and Overview Section */}
        <section className="container py-5 border-top border-secondary-subtle">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-start">
              <h3 className="fw-bold mb-4 text-color-main d-flex align-items-center gap-2">
                <FiTarget className="text-primary" />
                <span>Our Mission</span>
              </h3>
              <p className="lead text-muted mb-4">
                To build digital communication hubs that eliminate layout clutter and deliver blazing speed with rich design aesthetics.
              </p>
              <p className="text-muted fs-6 mb-4">
                Modern platforms often trade simplicity for complexity, resulting in heavy, slow, and confusing visual landscapes. SyncWave approaches messaging with a visual-first philosophy: clean spacing, typography that pops, immediate theme transitions, and components that align with user needs.
              </p>
            </div>
            
            <div className="col-lg-6">
              <div className="card about-mission-card border-0 p-4 shadow-sm bg-card-custom">
                <h5 className="fw-bold text-color-main mb-3">SyncWave Core Values</h5>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex gap-3">
                    <div className="value-icon bg-indigo-subtle text-primary"><FiMessageSquare /></div>
                    <div>
                      <h6 className="mb-1 fw-bold text-color-main">Aesthetics Over Generic</h6>
                      <p className="text-muted fs-8 mb-0">We curate color palettes, customize card elevations, and avoid generic UI elements.</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3">
                    <div className="value-icon bg-cyan-subtle text-secondary"><FiTrendingUp /></div>
                    <div>
                      <h6 className="mb-1 fw-bold text-color-main">Lightning Local Performance</h6>
                      <p className="text-muted fs-8 mb-0">Engineered with Vite and lightweight state pipelines for instantaneous updates.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container py-5 border-top border-secondary-subtle mb-5">
          <div className="text-center mb-5 max-w-lg mx-auto">
            <h2 className="display-6 fw-bold text-color-main mb-3">Meet the Wave Creators</h2>
            <p className="lead text-muted">A dedicated trio of digital experts designing, codecrafting, and optimizing SyncWave.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="col-lg-4 col-md-6 col-sm-10">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="card team-member-card border-0 p-4 shadow-sm text-center h-100 hover-lift"
                >
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="rounded-circle team-avatar mb-4 mx-auto"
                  />
                  <h5 className="fw-bold mb-1 text-color-main">{member.name}</h5>
                  <span className="badge bg-indigo-subtle text-primary mb-3 px-3 py-1">{member.role}</span>
                  <p className="text-muted fs-8 flex-grow-1 px-2">{member.bio}</p>
                  
                  <hr className="my-3 card-divider" />
                  
                  <div className="d-flex justify-content-center gap-3 team-socials">
                    <a href="#" className="team-social-icon" aria-label="Twitter"><FiTwitter /></a>
                    <a href="#" className="team-social-icon" aria-label="LinkedIn"><FiLinkedin /></a>
                    <a href="#" className="team-social-icon" aria-label="GitHub"><FiGithub /></a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
