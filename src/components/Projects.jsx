import React, { useEffect, useRef } from "react";
import "./Projects.css";
import AnimatedBox from "./AnimatedBox";
import { IoLogoGithub } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Projects array kept exactly as original
const projects = [
  {
    name: "Lumora",
    description: "LUMORA is a secure learning platform designed to streamline college-provided resources.",
    image: "https://i.postimg.cc/bDHgzb1Z/lumora.jpg",
    technologies: ["HTML5", "CSS", "JavaScript", "React"],
    link: "https://lumora-web.netlify.app/",
    gitlink: "https://github.com/ashishlukka1/lumora"
  },
  {
    name: "BlogShore",
    description: "Blog Shore is a full-stack web application designed for creating and reading blog posts.",
    image: "https://i.postimg.cc/Zvvq8PjR/blogshore.jpg",
    technologies: ["HTML5", "CSS", "JavaScript", "React"],
    link: "https://blogshore.netlify.app/",
    gitlink: "https://github.com/swarroopp/Blogshore"
  },
  {
    name: "Digital Library",
    description: "A comprehensive web application for managing academic resources.",
    image: "https://i.postimg.cc/0bqvXqyZ/library.jpg",
    technologies: ["React", "Node.js", "HTML", "CSS"],
    link: "https://digital-academic-library.vercel.app/",
    gitlink: "https://github.com/ashishlukka1/Digital-Academic-Library"
  },
  {
    name: "Seminar Hall Reservation",
    description: "A concept for a parallel system to manage seminar hall resources and reduce congestion.",
    image: "https://i.postimg.cc/cLXZMPN7/seminar-nihao.png",
    technologies: ["HTML", "CSS", "ReactJS", "clerk"],
    link: "https://stalwart-cat-1329d9.netlify.app",
    gitlink: "https://github.com/your-username/seminar-hall"
  },
  {
    name: "Leaktator",
    description: "A website for a system to manage hidden leaks before the condition worsens.",
    image: "https://i.postimg.cc/BQ1Kcsy2/Untitled-design-2.png",
    technologies: ["HTML", "CSS", "ReactJS", "ESP-32"],
    link: "https://thriving-alfajores-25084b.netlify.app/",
    gitlink: "https://github.com/your-username/seminar-hall"
  },
  {
    name: "Parallel Hospital",
    description: "A concept for a parallel system to manage Hoapitals an patient resources and reduce congestion.",
    image: "https://i.postimg.cc/15GhHXF1/Untitled-design-1.png",
    technologies: ["HTML", "CSS", "ReactJS", "clerk"],
    link: "https://teal-parfait-bd880a.netlify.app/",
    gitlink: "https://github.com/swarroopp/sswarroopp"
  }
];

function Projects() {
  // Reference for animation
  const projectsRef = useRef([]);

  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Get all project cards and observe them
    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="projects-wrapper">
      {/* Lottie background */}
      <div className="background-lottie">
        <DotLottieReact
          src="https://lottie.host/8f314386-ec4f-4a69-a2e0-c093235e4720/4xaWE3B7or.lottie"
          loop
          autoplay
        />
      </div>

      {/* Main content overlay */}
      <div className="content-overlay">
        <div className="nav d-flex">
          <div className="ocnt">
            <div className="h-2 svgp p-3">
              <AnimatedBox />
            </div>
            <div className="ends">
              <ul>
                <li className="nav-item">About</li>
                <li className="nav-item">
                  <a href="http://youtube.com/">
                    Resume <IoOpenOutline />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects-section">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div 
                className="project-card" 
                key={index}
                ref={el => projectsRef.current[index] = el}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div 
                  className="project-background" 
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-content">
                    <div className="tech-tags">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span className="tech-tag" key={techIndex}>{tech}</span>
                      ))}
                      {project.technologies.length > 3 && <span className="tech-tag">+{project.technologies.length - 3}</span>}
                    </div>
                    
                    <div className="project-info">
                      <h3 className="project-title">{project.name}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-links">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <span>View</span> <GoArrowUpRight size={16}/>
                        </a>
                        <a href={project.gitlink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                          <span>GitHub</span> <IoLogoGithub size={16}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;