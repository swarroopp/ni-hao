import React, { useEffect, useRef } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import "./ProjectsSection.css";
import BackgroundAnimation from "./BackgroundAnimation";

// Project data
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
    link: "https://seminarhall-vnrvjiet.vercel.app/",
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
    name: "Kaksya Sastra",
    description: "A website for s=the official space club for my college.",
    image: "https://i.postimg.cc/LsCDYv7m/Screenshot-2025-05-22-114959.png",
    technologies: ["HTML", "CSS", "ReactJS"],
    link: "https://kaksyasastra.vercel.app/",
    gitlink: "https://github.com/"
  },
  {
    name: "Parallel Hospital",
    description: "A concept for a parallel system to manage Hospitals and patient resources and reduce congestion.",
    image: "https://i.postimg.cc/15GhHXF1/Untitled-design-1.png",
    technologies: ["HTML", "CSS", "ReactJS", "clerk"],
    link: "https://parallel-hospital.netlify.app/",
    gitlink: "https://github.com/swarroopp/sswarroopp"
  }
];

function ProjectsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  // Preload images to prevent layout shifts
  const preloadImages = () => {
    projects.forEach(project => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        // Find the corresponding background element and remove loading class
        const backgroundEls = document.querySelectorAll('.project-background');
        backgroundEls.forEach(el => {
          if (el.style.backgroundImage.includes(project.image)) {
            el.classList.remove('loading');
          }
        });
      };
    });
  };

  useEffect(() => {
    // Preload project images
    preloadImages();
    
    // Set up intersection observer for section title
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("title-visible");
            titleObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    // Set up intersection observer for project cards with staggered animation
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation based on card index
            setTimeout(() => {
              entry.target.classList.add("appear");
            }, entry.target.dataset.index * 150); // Slightly longer delay for more noticeable effect
            projectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Register all project cards with the observer
    projectRefs.current.forEach((project) => {
      if (project) {
        projectObserver.observe(project);
      }
    });

    // Background Lottie animation (if available)
    const backgroundLottie = document.querySelector(".background-lottie");
    if (backgroundLottie) {
      setTimeout(() => {
        backgroundLottie.classList.add("lottie-loaded");
      }, 500);
    }

    // Initialize container
    const projectsWrapper = document.querySelector(".projects-wrapper");
    if (projectsWrapper) {
      setTimeout(() => {
        projectsWrapper.classList.add("page-ready");
      }, 100);
    }

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      projectRefs.current.forEach((project) => {
        if (project) projectObserver.unobserve(project);
      });
    };
  }, []);

  return (
    <div className="projects-wrapper">
      {/* Background animation */}
      <BackgroundAnimation />
      
      {/* Background lottie animation */}
      <div className="background-lottie"></div>="projects-wrapper"
      {/* Background lottie animation */}
      <div className="background-lottie"></div>
      
      {/* Main content */}
      <div className="content-overlay">
        <section className="projects-section" ref={sectionRef}>
          <h2 className="section-title" ref={titleRef}>My Projects</h2>
          
          <div className="projects-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                ref={(el) => {
                  projectRefs.current[index] = el;
                  if (el) el.dataset.index = index;
                }}
              >
                <div 
                  className="project-background loading" 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                
                <div className="project-content">
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-info">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-links">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                      >
                        Visit <IoOpenOutline />
                      </a>
                      <a 
                        href={project.gitlink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link github-link"
                      >
                        GitHub <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectsSection;