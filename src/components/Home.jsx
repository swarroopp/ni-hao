import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import AnimatedBox from "./AnimatedBox";
import { IoOpenOutline } from "react-icons/io5";
import Body from "./Body";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SemicircleText from "./SemicircleText";

function Home() {
  const arcTextData = [
    { text: "  ", color: "#ff0088" },
    { text: "Symmetry", color: "#ff0088" },
    { text: "Is", color: "#ffe4c4" },
    { text: "Not", color: "#3F2828" },
    { text: "Symmetric", color: "#ff0088" }
  ];

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
                <li>About</li>
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
  <div className="scroll-projects">
    <div className="titlep">
    <h1 className="fs-1 projects-title">My Projects</h1>
    </div>

  </div>


    </div>

  );
}

export default Home;