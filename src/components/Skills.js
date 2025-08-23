import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    // Programming Languages
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    
    // Frontend
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    
    // Backend
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    
    // Databases
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    
    // Cloud Platforms
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    
    // DevOps & Tools
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    
    // AI/ML
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    
    // Mobile & Others
    { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' }
  ];

  return (
    <section className="skill" id="skills" style={{
      background: '#121212',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '64px',
              textAlign: 'center',
              padding: '60px 50px',
              marginTop: '-60px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
            }}>
              <h2 style={{
                fontWeight: '700',
                fontSize: '45px',
                color: '#fff',
                marginBottom: '60px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Technical Skills
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '18px',
                letterSpacing: '0.8px',
                lineHeight: '1.5em',
                margin: '14px auto 30px auto',
                textAlign: 'center',
                width: '56%'
              }}>
                Comprehensive expertise across multiple technologies and platforms, 
                built through years of hands-on experience in software development and cloud architecture.
              </p>
              
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={300}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item" style={{
                    padding: '20px',
                    margin: '0 10px'
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '30px 20px',
                      height: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    }}
                    >
                      <div style={{
                        width: '80px',
                        height: '80px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '50%',
                        padding: '15px'
                      }}>
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'contain',
                            filter: 'brightness(1.2)'
                          }}
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span style="color: #fff; font-size: 24px; font-weight: bold;">${skill.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <h5 style={{
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '0',
                        textAlign: 'center',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                      }}>
                        {skill.name}
                      </h5>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative element */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '40%',
        height: '40%',
        background: 'rgba(255, 255, 255, 0.01)',
        borderRadius: '50%',
        transform: 'translate(-50%, 50%)',
        zIndex: '0'
      }} />
    </section>
  );
};