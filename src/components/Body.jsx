import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

import './Body.css';

const projects = [
  {
    name: "Lumora",
    description: "LUMORA is a secure learning platform designed to streamline college-provided resources and help students master the MERN stack efficiently. ",
    image: "https://postimg.cc/bDHgzb1Z",
    technologies: ["HTML5", "CSS", "JavaScript", "React", "Clerk"],
    link: "https://lumora-web.netlify.app/",
    gitlink: "https://github.com/ashishlukka1/lumora"
  },
  {
    name: "BlogShore",
    description: "Blog Shore is a full-stack web application designed to provide a clean, user-friendly platform for creating, publishing, and reading blog posts. It features a structured content management system, author-specific dashboards, and responsive UI.",
    image: "https://postimg.cc/Zvvq8PjR",
    technologies: ["HTML5", "CSS", "JavaScript", "React", "MongoDB", "Express JS"],
    link: "https://blogshore.netlify.app/",
    gitlink: "https://github.com/swarroopp/Blogshore"
  },
  {
    name: "Digital Academic Library",
    description: "Digital Academic Library is a comprehensive full-stack web application developed to provide a centralized, user-friendly platform for managing and accessing academic resources. ",
    image: "https://postimg.cc/0bqvXqyZ",
    technologies: ["React", "Node.js", "HTML", "CSS", "MongoDB"],
    link: "https://digital-academic-library.vercel.app/",
    gitlink: "https://github.com/ashishlukka1/Digital-Academic-Library"
  },
  {
    name: "Seminar Hall Reservation",
    description: "A concept for a parallel system to manage seminar hall resources and reduce congestion.",
    image: "https://postimg.cc/w1yS9fM3",
    technologies: ["HTML", "CSS", "ReactJS", "clerk"],
    link: "https://stalwart-cat-1329d9.netlify.app",
    gitlink: "https://youtube.com"
  }
];

function Body() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-items">
          <a href="https://drive.google.com/file/d/1Q818tZtm9U7budARxuCB6e_YqUiP0W5k/view?usp=sharing" className="mobile-menu-item">
            <div className="d-flex align-items-center">Resume <GoArrowUpRight size={25}/></div>
          </a>
          <div className="mobile-menu-item" onClick={() => navigate('/Projects')}>Projects</div>
          <div className="mobile-menu-item">About</div>
        </div>
      </div>

      <div className='hero-section'>
        <div className="box">
          <div className="fs-1 text-1 d-flex me">
            Hi, I am <span className="nam">Swaroop.</span>
          </div>
          <div className="online">
            <span className="d-flex align-items-center gap-2 px-2 py-1">
              <span className="status"></span>
              MERN STACK DEVELOPER | OPEN TO WORK
            </span>
          </div>
          <div className="small-text">
            This is my portfolio. I am a useless man with no reason to be alive.
            Sounds depressing but thats what they say.
          </div> 
          <div className="desktop-only profiles">
          <div className="btn resume d-flex">
            <a href="https://drive.google.com/file/d/1Q818tZtm9U7budARxuCB6e_YqUiP0W5k/view?usp=sharing">
              Resume <FaExternalLinkAlt size={16}/>
            </a>
            </div>

            <div className="btn p-1" onClick={() => navigate('/Projects')}>Projects</div>      
          </div>
        </div>

        <div className="imge">
          <img 
            src="https://w0.peakpx.com/wallpaper/783/202/HD-wallpaper-spider-man-post-post-malone-spider-man-sunflower.jpg" 
            alt="Spider-Man Art"
            className="profile-img img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;