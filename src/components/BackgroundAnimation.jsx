import React from 'react';

function BackgroundAnimation() {
  return (
    <div className="background-animation">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ff0088" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#3F2828" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gradient3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffe4c4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <g className="animated-circles">
          <circle className="circle1" cx="150" cy="150" r="80" fill="url(#gradient1)">
            <animate 
              attributeName="cx" 
              values="150;250;150" 
              dur="15s" 
              repeatCount="indefinite" 
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" 
            />
            <animate 
              attributeName="cy" 
              values="150;350;150" 
              dur="20s" 
              repeatCount="indefinite" 
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" 
            />
          </circle>
          
          <circle className="circle2" cx="850" cy="250" r="100" fill="url(#gradient2)">
            <animate 
              attributeName="cx" 
              values="850;750;850" 
              dur="17s" 
              repeatCount="indefinite" 
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" 
            />
            <animate 
              attributeName="cy" 
              values="250;150;250" 
              dur="22s" 
              repeatCount="indefinite" 
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" 
            />
          </circle>
          
          <circle className="circle3" cx="500" cy="650" r="120" fill="url(#gradient3)">
            <animate 
              attributeName="cx" 
              values="500;600;500" 
              dur="19s" 
              repeatCount="indefinite" 
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" 
            />
            <animate 
              attributeName="cy" 
              values="650;550;650" 
              dur="24s" 
              repeatCount="indefinite" 
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" 
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default BackgroundAnimation;