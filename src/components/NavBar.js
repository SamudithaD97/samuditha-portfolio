import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Modal, Form, Button, Alert } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import cv from '../assets/img/CV - W.M.S.D. Wijayasundara.pdf';
import emailjs from '@emailjs/browser';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState({ show: false, message: '', variant: '' });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_q0cvq1e';
  const EMAILJS_TEMPLATE_ID = 'template_yyo08cd';  
  const EMAILJS_PUBLIC_KEY = 'oAmVOkJKnrhxqle-8';

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    
    // Initialize EmailJS when component mounts
    emailjs.init(EMAILJS_PUBLIC_KEY);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const handleShowModal = () => setShowModal(true);
  
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
    setShowAlert({ show: false, message: '', variant: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Updated template params to match your EmailJS template exactly
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_message: formData.message
      };

      console.log('Sending template params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('SUCCESS!', result);
      setShowAlert({
        show: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        variant: 'success'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('EMAIL ERROR:', error);
      
      setShowAlert({
        show: true,
        message: 'Failed to send message. Please try again or contact me directly.',
        variant: 'danger'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1><span className="highlight-first">Samuditha</span><span className="highlight-second">W</span></h1>
            {/* <img src={logo} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
              {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> */}
              {/* <Nav.Link href="/blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link> */}
            </Nav>
            <span className="navbar-text d-flex align-items-center gap-4">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/samudithadw97/"><img src={navIcon1} alt="" /></a>
                {/* <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a> */}
              </div>
              <a href={cv} download="CV - W.M.S.D. Wijayasundara.pdf" className="cv-button">
                <h5 className="mb-0"><span className="cv-first">Download</span><span className="cv-second">CV</span></h5>
              </a>
              <button className="vvd" onClick={handleShowModal}>
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Form Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="w-100 text-center">
            <h2 className="mb-0">Let's Connect</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 pb-4">
          {showAlert.show && (
            <Alert 
              variant={showAlert.variant} 
              dismissible 
              onClose={() => setShowAlert({ show: false, message: '', variant: '' })}
              className="mb-3"
            >
              {showAlert.message}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #ddd',
                  borderRadius: '0',
                  padding: '18px 26px',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#121212',
                  transition: '0.3s ease-in-out'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #ddd',
                  borderRadius: '0',
                  padding: '18px 26px',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#121212',
                  transition: '0.3s ease-in-out'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                as="textarea"
                rows={6}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #ddd',
                  borderRadius: '0',
                  padding: '18px 26px',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#121212',
                  transition: '0.3s ease-in-out'
                }}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: '#4A90E2',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: '0.3s ease-in-out'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Router>
  )



}