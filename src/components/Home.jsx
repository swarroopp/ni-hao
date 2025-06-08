import React, { useEffect, useRef } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import AnimatedBox from "./AnimatedBox";
import { IoOpenOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Body from "./Body";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SemicircleText from "./SemicircleText";
import ProjectsSection from "./ProjectsSection";
import { useNavigate } from 'react-router-dom';

function Home() {
  const projectsRef = useRef(null);
  const navigate = useNavigate();
  
  const arcTextData = [
    { text: "  ", color: "#ff0088" },
    { text: "Symmetry", color: "#ff0088" },
    { text: "Is", color: "#ffe4c4" },
    { text: "Not", color: "#3F2828" },
    { text: "Symmetric", color: "#ff0088" }
  ];
  
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Prevent flash of unstyled content and setup smooth scrolling
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";
    
    document.documentElement.classList.add('loading');
    document.body.classList.add('loading');
    
    // Remove loading class after content is loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.documentElement.classList.remove('loading');
        document.body.classList.remove('loading');
      }, 200);
    });
    
    // Fallback if load event doesn't fire
    setTimeout(() => {
      document.documentElement.classList.remove('loading');
      document.body.classList.remove('loading');
    }, 1000);
    
    return () => {
      window.removeEventListener('load', () => {});
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

    return (
      <div className="home-wrapper">
        {/* Main content overlay */}
        <div className="content-overlay">
          <div className="nav">
            <div className="ocnt">
              <div className="logo">
                <AnimatedBox />
              </div>
              <div className="nav-links">
                <ul>
                  <li><div onClick={() => navigate('/About')}>about</div> </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1Q818tZtm9U7budARxuCB6e_YqUiP0W5k/view?usp=sharing">
                      Resume <IoOpenOutline className="icon-open" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <Body />
          </div>
        </div>

      <div className="lottie-arc-wrapper">
        <DotLottieReact
          src="https://lottie.host/8f314386-ec4f-4a69-a2e0-c093235e4720/4xaWE3B7or.lottie"
          loop
          autoplay
          className="lottie-footer"
        />
        <SemicircleText data={arcTextData} />
      </div>

      {/* Projects Section */}
      <ProjectsSection />
      <div className="about  capsule" onClick={() => navigate('/About')}>
        About me
      </div>
    </div>
  );
}

export default Home;