import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      padding: '80px 0 40px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: `
          radial-gradient(circle at 20% 30%, rgba(170, 54, 124, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(74, 47, 189, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.05) 0%, transparent 50%)
        `,
        zIndex: 1
      }}></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Footer Content */}
        <Row className="align-items-center" style={{ marginBottom: '50px' }}>
          {/* Name/Brand Section */}
          <Col size={12} md={6} className="mb-4 mb-md-0">
            <div style={{ textAlign: 'left' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                background: 'linear-gradient(90deg, #AA367C 0%, #4A2FBD 50%, #4ECDC4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                <span>Samuditha</span><span style={{ marginLeft: '10px' }}>W</span>
              </h1>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '25px',
                maxWidth: '400px'
              }}>
                Software Engineer & Researcher passionate about creating innovative solutions 
                and pushing the boundaries of technology.
              </p>

              {/* Contact Info */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '12px',
                    background: 'rgba(170, 54, 124, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    📧
                  </div>
                  <span>sdwijaya@iu.edu</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '12px',
                    background: 'rgba(74, 47, 189, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    📍
                  </div>
                  <span>Indianapolis, Indiana, USA</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Social Links & Navigation */}
          <Col size={12} md={6}>
            <div style={{ textAlign: 'right' }}>
              {/* Quick Links */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  Quick Links
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '12px'
                }}>
                  {['About', 'Experience', 'Education', 'Projects', 'Contact'].map((link, index) => (
                    <a
                      key={index}
                      href={`#${link.toLowerCase()}`}
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = '#fff';
                        e.target.style.background = 'rgba(170, 54, 124, 0.2)';
                        e.target.style.transform = 'translateX(-5px)';
                        e.target.style.border = '1px solid rgba(170, 54, 124, 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.transform = 'translateX(0)';
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Icons */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>
                  Let's Connect
                </h4>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  <a 
                    href="https://www.linkedin.com/in/samudithadw97/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 119, 181, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 119, 181, 0.3)';
                      e.currentTarget.style.border = '1px solid rgba(0, 119, 181, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <img src={navIcon1} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                  </a>

                  <a 
                    href="https://github.com/SamudithaD97" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(88, 166, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(88, 166, 255, 0.3)';
                      e.currentTarget.style.border = '1px solid rgba(88, 166, 255, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <img src={navIcon4} alt="GitHub" style={{ width: '24px', height: '24px' }} />
                  </a>

                  <a 
                    href="https://www.facebook.com/samuditha.wijayasundara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(24, 119, 242, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(24, 119, 242, 0.3)';
                      e.currentTarget.style.border = '1px solid rgba(24, 119, 242, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <img src={navIcon2} alt="Facebook" style={{ width: '24px', height: '24px' }} />
                  </a>

                  <a 
                    href="https://www.instagram.com/samudithadw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(225, 48, 108, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(225, 48, 108, 0.3)';
                      e.currentTarget.style.border = '1px solid rgba(225, 48, 108, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <img src={navIcon3} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          textAlign: 'center'
        }}>
          <Row>
            <Col size={12}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.95rem',
                marginBottom: '10px'
              }}>
                © 2025 Samuditha Wijayasundara. All rights reserved.
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '0.85rem',
                margin: '0'
              }}>
                Built with ❤️ using React & Bootstrap
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};