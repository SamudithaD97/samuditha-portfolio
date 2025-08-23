import React from 'react';
import pera from '../assets/img/pera.png';
import sliit from '../assets/img/SLIIT.png';
import luddy from '../assets/img/luddy.jpg';

export const Education = () => {
    return (
        <section className="education" id="education" style={{
            background: '#0a0a0a',
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
                        Education
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }}></div>
                </div>

                {/* Timeline Container */}
                <div className="timeline-container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        height: '700px',
                        width: '4px',
                        background: 'linear-gradient(180deg, #FF6B6B 0%, #4ECDC4 50%, #FFD93D 100%)',
                        transform: 'translateX(-50%)',
                        zIndex: '1'
                    }}></div>

                    {/* Master's Degree - Indiana University */}
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
                            background: '#FF6B6B',
                            borderRadius: '50%',
                            transform: 'translateX(50%)',
                            zIndex: '2',
                            border: '4px solid #0a0a0a',
                            boxShadow: '0 0 20px rgba(255, 107, 107, 0.5)'
                        }}></div>

                        <div className="education-card" style={{
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
                            {/* Indiana University Logo */}
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
                                        src={luddy} 
                                        alt="Indiana University" 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '12px'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    background: 'rgba(255, 107, 107, 0.2)',
                                    color: '#fff',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}>
                                    2025 - 2027 • PRESENT
                                </div>
                            </div>

                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                MS in Computer Science
                            </h3>
                            <h4 style={{ color: '#4A90E2', fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px' }}>
                                Indiana University, Indianapolis
                            </h4>
                            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '15px' }}>
                                Currently pursuing Master's degree in Computer Science at Indiana University Indianapolis. 
                                Advanced coursework focusing on software engineering, algorithms, and emerging technologies.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Computer Science', 'Software Engineering', 'Machine Learning', 'Data Structures', 'Research'].map((subject, index) => (
                                    <span key={index} style={{
                                        background: 'rgba(255, 107, 107, 0.2)',
                                        color: '#fff',
                                        padding: '4px 12px',
                                        borderRadius: '15px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bachelor's Degree - University of Peradeniya */}
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
                            background: '#4ECDC4',
                            borderRadius: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: '2',
                            border: '4px solid #0a0a0a',
                            boxShadow: '0 0 20px rgba(78, 205, 196, 0.5)'
                        }}></div>

                        <div className="education-card" style={{
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
                            {/* University of Peradeniya Logo */}
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
                                        src={pera} 
                                        alt="University of Peradeniya" 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '12px'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    background: 'rgba(78, 205, 196, 0.2)',
                                    color: '#fff',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}>
                                    2019 - 2024
                                </div>
                            </div>

                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                BSc (Hons) Applied Science
                            </h3>
                            <h4 style={{ color: '#4A90E2', fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px' }}>
                                University of Peradeniya, Sri Lanka
                            </h4>

                            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '15px' }}>
                                Comprehensive study in Applied Science with focus on computer science, physics, and mathematics. 
                                Strong foundation in scientific research methodology and analytical thinking.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Software Engineering', 'Database Management', 'Data Structures and Algorithms', 'Research Methods', 'Physics','Mathematics'].map((subject, index) => (
                                    <span key={index} style={{
                                        background: 'rgba(78, 205, 196, 0.2)',
                                        color: '#fff',
                                        padding: '4px 12px',
                                        borderRadius: '15px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Second Bachelor's Degree - SLIIT */}
                    <div className="timeline-item" style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        paddingRight: '60px',
                        position: 'relative',
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            position: 'absolute',
                            right: '50%',
                            top: '30px',
                            width: '20px',
                            height: '20px',
                            background: '#FFD93D',
                            borderRadius: '50%',
                            transform: 'translateX(50%)',
                            zIndex: '2',
                            border: '4px solid #0a0a0a',
                            boxShadow: '0 0 20px rgba(255, 217, 61, 0.5)'
                        }}></div>

                        <div className="education-card" style={{
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
                            {/* SLIIT Logo */}
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
                                        src={sliit} 
                                        alt="SLIIT" 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '12px'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    background: 'rgba(255, 217, 61, 0.2)',
                                    color: '#fff',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}>
                                    2020 - 2023
                                </div>
                            </div>

                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                BSc (Hons) Information Technology
                            </h3>
                            <h4 style={{ color: '#4A90E2', fontSize: '1.2rem', fontWeight: '600', marginBottom: '15px' }}>
                                Sri Lanka Institute of Information Technology
                            </h4>
                            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '15px' }}>
                                Specialized degree in Information Technology covering software development, database systems, 
                                networking, and emerging technologies. Strong emphasis on practical application and industry readiness.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Information Technology', 'Software Engineering', 'Database Systems', 'Web Development', 'Mobile Development'].map((subject, index) => (
                                    <span key={index} style={{
                                        background: 'rgba(255, 217, 61, 0.2)',
                                        color: '#fff',
                                        padding: '4px 12px',
                                        borderRadius: '15px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        {subject}
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