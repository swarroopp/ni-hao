import React, { useState, useEffect } from 'react';

// Animated Section Title Component
const AnimatedSectionTitle = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('timeline-title');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <h2
      id="timeline-title"
      style={{
        color: 'white',
        textAlign: 'center',
        marginBottom: '40px',
        fontSize: '2.5rem',
        position: 'relative',
        display: 'inline-block',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      {children}
      <div
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: 0,
          width: isVisible ? '100%' : '0%',
          height: '3px',
          backgroundColor: '#ff0088',
          borderRadius: '2px',
          transition: 'width 0.8s ease-in-out',
          transitionDelay: '0.2s'
        }}
      />
    </h2>
  );
};

const About = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [copied, setCopied] = useState(false);
  const email = "swaroopmallidi7777@gmail.com";

  // Education timeline data
  const educationData = [
    {
      id: 1,
      year: "2023 - Present",
      degree: "Bachelor of Technology",
      institution: "VNR VJIET, Hyderabad",
      field: "Information Technology",
      description: "Currently pursuing B.Tech in IT with focus on software development and emerging technologies.",
      gpa: "CGPA: 9.25/10"
    },
    {
      id: 2,
      year: "2021 - 2023",
      degree: "Higher Secondary Education",
      institution: "New Vision Jr College, Khammam",
      field: "MPC",
      description: "Completed intermediate education with Mathematics, Physics, and Chemistry as core subjects.",
      gpa: "Percentage: 94.7%"
    },
    {
      id: 3,
      year: "2019 - 2021",
      degree: "Secondary Education",
      institution: "Harvest Public School, Khammam",
      field: "CBSE Board",
      description: "Completed secondary education with excellent academic performance and active participation in coding competitions.",
      gpa: "Percentage: 95.2%"
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id'));
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', padding: 0 }}>
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .about-header {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 100;
          background-color: rgba(13, 13, 13, 0.9);
          padding: 10px 15px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 0, 136, 0.2);
        }

        .about-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 100px 20px 60px 20px;
        }

        .about-content {
          background-color: rgb(22, 19, 19);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 60px;
        }

        .section-title {
          color: white;
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #ff0088;
          border-radius: 2px;
        }

        .image-gallery {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
          align-items: flex-start;
        }

        .main-image-container {
          flex: 2;
        }

        .main-image {
          width: 100%;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
          transition: transform 0.3s ease;
        }

        .profile-image:hover {
          transform: scale(1.05);
        }

        .side-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-image {
          width: 100%;
          height: 185px;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
        }

        .side-image-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
          transition: transform 0.3s ease;
        }

        .side-image-img:hover {
          transform: scale(1.05);
        }

        .about-text {
          margin-top: 40px;
        }

        .text-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-heading {
          color: white;
          font-size: 2rem;
          margin-bottom: 24px;
          text-align: center;
        }

        .highlight {
          color: #ff0088;
        }

        .about-description {
          color: #ffe4c4;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 20px;
          text-align: justify;
        }

        .skills-highlight {
          margin-top: 40px;
          padding: 25px;
          background-color: #1c1919;
          border-radius: 15px;
          border-left: 4px solid #ff0088;
        }

        .skills-highlight h3 {
          color: white;
          margin-bottom: 20px;
          font-size: 1.3rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .skill-item {
          background-color: #cf006f;
          color: white;
          padding: 12px 20px;
          border-radius: 25px;
          text-align: center;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background-color: #ff0088;
          transform: translateY(-2px);
        }

        .timeline-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 20px;
        }

        .timeline-container {
          position: relative;
          margin-top: 60px;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #ff0088 0%, #cf006f 100%);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          width: 100%;
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item.timeline-left {
          display: flex;
          justify-content: flex-end;
          padding-right: calc(50% + 40px);
        }

        .timeline-item.timeline-left .timeline-content {
          width: 100%;
          max-width: 500px;
          text-align: right;
        }

        .timeline-item.timeline-left .timeline-dot {
          right: -50px;
          left: auto;
        }

        .timeline-item.timeline-right {
          display: flex;
          justify-content: flex-start;
          padding-left: calc(50% + 40px);
        }

        .timeline-item.timeline-right .timeline-content {
          width: 100%;
          max-width: 500px;
          text-align: left;
        }

        .timeline-item.timeline-right .timeline-dot {
          left: -50px;
          right: auto;
        }

        .timeline-content {
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          top: 30px;
          width: 20px;
          height: 20px;
          background-color: #ff0088;
          border: 4px solid rgb(22, 19, 19);
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 20px rgba(255, 0, 136, 0.5);
        }

        .education-card {
          background-color: rgb(22, 19, 19);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 0, 136, 0.2);
          transition: all 0.3s ease;
          position: relative;
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(255, 0, 136, 0.2);
          border-color: rgba(255, 0, 136, 0.4);
        }

        .education-year {
          color: #ff0088;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }

        .education-degree {
          color: white;
          font-size: 1.4rem;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .education-institution {
          color: #ffe4c4;
          font-size: 1.1rem;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .education-field {
          color: #cf006f;
          font-size: 1rem;
          margin-bottom: 12px;
          font-style: italic;
        }

        .education-description {
          color: #ffe4c4;
          line-height: 1.6;
          margin-bottom: 15px;
          opacity: 0.9;
        }

        .education-gpa {
          color: #ff0088;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 8px 16px;
          background-color: rgba(255, 0, 136, 0.1);
          border-radius: 20px;
          display: inline-block;
        }

        .footer {
          background-color: rgb(22, 19, 19);
          padding: 40px 20px;
          margin-top: 60px;
          border-top: 2px solid #ff0088;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-title {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .contact-item {
          color: #ffe4c4;
          font-size: 1rem;
          padding: 10px;
        }

        .contact-label {
          color: #ff0088;
          font-weight: 600;
          display: block;
          margin-bottom: 5px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 0, 136, 0.3);
          padding-top: 20px;
          color: #ffe4c4;
          font-size: 0.9rem;
        }

        @media screen and (max-width: 992px) {
          .about-header {
            position: relative;
            top: 0;
            left: 0;
            margin-bottom: 20px;
            text-align: center;
          }

          .about-container {
            padding: 20px 20px 60px 20px;
          }

          .image-gallery {
            flex-direction: column;
          }

          .side-images {
            flex-direction: row;
          }

          .timeline-line {
            left: 25px;
            transform: none;
          }

          .timeline-item.timeline-left,
          .timeline-item.timeline-right {
            padding-left: 70px;
            padding-right: 15px;
            justify-content: flex-start;
          }

          .timeline-item.timeline-left .timeline-content,
          .timeline-item.timeline-right .timeline-content {
            text-align: left;
          }

          .timeline-item.timeline-left .timeline-dot,
          .timeline-item.timeline-right .timeline-dot {
            left: -45px;
            right: auto;
          }
        }

        @media screen and (max-width: 768px) {
          .about-header {
            padding: 8px 12px;
            margin-bottom: 15px;
          }

          .about-content {
            padding: 26px;
          }

          .section-title {
            font-size: 2rem;
          }

          .about-heading {
            font-size: 1.6rem;
          }

          .side-images {
            flex-direction: column;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .main-image {
            height: 300px;
          }

          .side-image {
            height: 150px;
          }
        }
      `}</style>

      {/* Header with AnimatedBox */}
      <div className="about-header">
        <div 
          onClick={() => (window.location.href = "/")}
          style={{ 
            cursor: "pointer", 
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            padding: "8px",
            margin: 0,
            textAlign: "left"
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              margin: 0,
              position: "relative",
              display: "inline-block",
              color: "#ffffff"
            }}
          >
            SWAROOP MALLIDI
            
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to right, transparent, #ff0088 50%, transparent)",
                mixBlendMode: "lighten",
                zIndex: 1,
                animation: "slideRight 1.2s ease-in-out forwards"
              }}
            />
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="about-container">
        <div className="about-content">
          <h1 className="section-title">About Me</h1>
          
          {/* Image Gallery Section */}
          <div className="image-gallery">
            <div className="main-image-container">
              <div className="main-image">
                <img 
                  src="https://i.postimg.cc/HLbRLm7S/Screenshot-2025-06-08-104049.png" 
                  alt="Swaroop Mallidi - Profile" 
                  className="profile-image"
                />
              </div>
            </div>
            
            <div className="side-images">
              <div className="side-image">
                <img 
                  src="https://i.postimg.cc/KjpsWvdY/Screenshot-2025-06-08-104206.png" 
                  alt="Workspace" 
                  className="side-image-img"
                />
              </div>
              <div className="side-image">
                <img 
                  src="https://i.postimg.cc/nVT87nSg/Screenshot-2025-06-08-103748.png" 
                  alt="Projects" 
                  className="side-image-img"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="about-text">
            <div className="text-content">
              <h2 className="about-heading">
                Passionate <span className="highlight">Developer</span> & <span className="highlight">Problem Solver</span>
              </h2>
              <p className="about-description">
                I'm a dedicated software developer with a passion for creating innovative solutions 
                and learning cutting-edge technologies. My journey in programming started with curiosity 
                and has evolved into a commitment to building impactful digital experiences.
              </p>
              <p className="about-description">
                With expertise in modern web technologies and a strong foundation in computer science 
                principles, I enjoy tackling complex challenges and turning ideas into reality. 
                I believe in writing clean, efficient code and staying updated with industry trends.
              </p>
              
              <div className="skills-highlight">
                <h3>Core Competencies</h3>
                <div className="skills-grid">
                  <div className="skill-item">Frontend Development</div>
                  <div className="skill-item">Backend Architecture</div>
                  <div className="skill-item">Database Design</div>
                  <div className="skill-item">Problem Solving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline Section */}
      <div className="timeline-section">
        <AnimatedSectionTitle>My Timeline</AnimatedSectionTitle>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${visibleItems.has(item.id) ? 'visible' : ''} ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              data-id={item.id}
            >
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="education-card">
                  <div className="education-year">{item.year}</div>
                  <h3 className="education-degree">{item.degree}</h3>
                  <h4 className="education-institution">{item.institution}</h4>
                  <p className="education-field">{item.field}</p>
                  <p className="education-description">{item.description}</p>
                  <div className="education-gpa">{item.gpa}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Capsule */}
      <div style={{ textAlign: 'center', margin: '60px 0' }}>
        <div
          onClick={handleCopyEmail}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '12px 24px',
            backgroundColor: copied ? '#4caf50' : '#ff0088',
            color: 'white',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '16px',
            fontWeight: '500',
            border: 'none',
            outline: 'none',
            boxShadow: '0 4px 15px rgba(255, 0, 136, 0.3)',
            transform: copied ? 'scale(1.05)' : 'scale(1)',
            minWidth: '200px',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.target.style.backgroundColor = '#cf006f';
              e.target.style.transform = 'scale(1.05)';
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.target.style.backgroundColor = '#ff0088';
              e.target.style.transform = 'scale(1)';
            }
          }}
        >
          {copied ? '✓ Copied!' : email}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <h2 className="footer-title">Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              swaroopmallidi7777@gmail.com
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              Khammam, Telangana, India
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              +91 7842811303
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/swaroop-mallidi-7777/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Swaroop Mallidi. No rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;