import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import AnimatedBox from "./AnimatedBox";
import { IoOpenOutline } from "react-icons/io5";
import Body from "./Body";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
  return (
    <div className="home-wrapper">
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
        <div className="nav">
          <div className="ocnt">
            <div className="logo">
              <h2>SWAROOP MALLIDI</h2>
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
    </div>
  );
}

export default Home;