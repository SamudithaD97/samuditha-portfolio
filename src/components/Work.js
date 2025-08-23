import React from 'react';
import raketman from '../assets/img/raketman.jpg';
import ec from '../assets/img/ec.png';

export const Work = () => {
    return (
        <section className="work" id="work" style={{
            background: '#121212',
            padding: '100px 0',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 style={{
                        color: '#fff',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Work Experience
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #AA367C 0%, #4A2FBD 100%)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }}></div>
                </div>

                {/* Timeline for Work Experience Only */}
                <div className="timeline-container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Timeline Line - Only for work experience */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        height: '500px', // Fixed height to cover only work experience
                        width: '4px',
                        background: 'linear-gradient(180deg, #AA367C 0%, #4A2FBD 100%)',
                        transform: 'translateX(-50%)',
                        zIndex: '1'
                    }}></div>

                    {/* Work Experience Cards */}
                    <div className="timeline-item" style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        paddingRight: '60px',
                        position: 'relative',
                        marginBottom: '60px'
                    }}>
                        {/* Timeline Dot */}
                        <div style={{
                            position: 'absolute',
                            right: '50%',
                            top: '30px',
                            width: '20px',
                            height: '20px',
                            background: '#AA367C',
                            borderRadius: '50%',
                            transform: 'translateX(50%)',
                            zIndex: '2',
                            border: '4px solid #121212',
                            boxShadow: '0 0 20px rgba(170, 54, 124, 0.5)'
                        }}></div>

                        <div className="work-card" style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '20px',
                            padding: '30px',
                            maxWidth: '500px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        }}
                        >
                            {/* Raketman Logo */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '25px',
                                    padding: '15px',
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                                }}>
                                    <img 
                                        src={raketman} 
                                        alt="Raketman Private Limited, Sri Lanka" 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '12px'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    background: 'rgba(170, 54, 124, 0.2)',
                                    color: '#fff',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}>
                                    AUG 2024 - JUN 2025
                                </div>
                            </div>

                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                Software Engineer
                            </h3>
                            <h4 style={{ color: '#4A90E2', fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px' }}>
                                Raketman Private Limited, Sri Lanka
                            </h4>
                            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '15px' }}>
                                Backend development using Java, ASP .NET, VB .NET, Python and Node.js. 
                                Integrating SAP APIs, web scraping, payment gateway integration, and mentoring junior engineers.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Java', 'Python', 'Node.js', 'SAP APIs', 'Stripe'].map((tech, index) => (
                                    <span key={index} style={{
                                        background: 'rgba(170, 54, 124, 0.2)',
                                        color: '#fff',
                                        padding: '4px 12px',
                                        borderRadius: '15px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Second Job */}
                    <div className="timeline-item" style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        paddingLeft: '60px',
                        position: 'relative',
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '30px',
                            width: '20px',
                            height: '20px',
                            background: '#4A2FBD',
                            borderRadius: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: '2',
                            border: '4px solid #121212',
                            boxShadow: '0 0 20px rgba(74, 47, 189, 0.5)'
                        }}></div>

                        <div className="work-card" style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '20px',
                            padding: '30px',
                            maxWidth: '500px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        }}
                        >
                            {/* Elysian Crest Logo */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '25px',
                                    padding: '15px',
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                                }}>
                                    <img 
                                        src={ec} 
                                        alt="Elysian Crest Private Limited, Sri Lanka" 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '12px'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    background: 'rgba(74, 47, 189, 0.2)',
                                    color: '#fff',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}>
                                    OCT 2022 - JUL 2024
                                </div>
                            </div>

                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                Software Engineer
                            </h3>
                            <h4 style={{ color: '#4A90E2', fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px' }}>
                                Elysian Crest Private Limited, Sri Lanka
                            </h4>
                            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '15px' }}>
                                Backend development with Java and Node.js, database management, Google Analytics integration, 
                                and team leadership. Created insightful reports through Jasper Studio.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Java', 'Node.js', 'MySQL', 'MongoDB', 'GA4'].map((tech, index) => (
                                    <span key={index} style={{
                                        background: 'rgba(74, 47, 189, 0.2)',
                                        color: '#fff',
                                        padding: '4px 12px',
                                        borderRadius: '15px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Separate Research Section */}
                <div className="research-section" style={{ marginTop: '80px', maxWidth: '1200px', margin: '80px auto 0' }}>
                    {/* Research Section Header */}
                    <div className="text-center mb-5">
                        <h2 style={{
                            color: '#fff',
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}>
                            Research Experience
                        </h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(90deg, #28a745, #20c997)',
                            margin: '0 auto',
                            borderRadius: '2px'
                        }}></div>
                    </div>

                    {/* Research Card - Standalone */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        {/* Remove timeline dot for research */}
                        
                        <div className="work-card" style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '20px',
                            padding: '40px',
                            maxWidth: '800px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        }}
                        >
                            <div style={{
                                background: 'linear-gradient(90deg, #28a745, #20c997)',
                                color: '#fff',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                marginBottom: '15px'
                            }}>
                                2022 - PRESENT • RESEARCH
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                Research Experience
                            </h3>
                            <h4 style={{ color: '#4A90E2', fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px' }}>
                                University of Peradeniya & SLIIT
                            </h4>
                            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '20px' }}>
                                Leading research projects on air quality prediction using PM 2.5 particles and banana production optimization. 
                                Developed machine learning models and mobile applications for real-world applications.
                            </p>
                            
                            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <h5 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px' }}>Published Research:</h5>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a 
                                href="https://ijemr.vandanapublications.com/index.php/ijemr/article/view/1352/1229"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#4A90E2',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: '500',
                                    padding: '15px 20px',
                                    background: 'rgba(74, 144, 226, 0.1)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(74, 144, 226, 0.3)',
                                    display: 'inline-block',
                                    transition: 'all 0.3s ease',
                                    lineHeight: '1.4',
                                    maxWidth: '100%',
                                    wordBreak: 'break-word',
                                    textAlign: 'center'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = 'rgba(74, 144, 226, 0.2)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = 'rgba(74, 144, 226, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                📄 "Optimize Banana Production through Innovative Growing System" - IJEMR 2023
                            </a>
                        </div>
                    </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                                {['Machine Learning', 'TensorFlow', 'Python', 'React', 'Data Analysis'].map((tech, index) => (
                                    <span key={index} style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: '#fff',
                                        padding: '4px 12px',
                                        borderRadius: '15px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};