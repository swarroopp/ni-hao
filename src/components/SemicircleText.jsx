import React from "react";

function SemicircleText({ data }) {
    const radius = 220; // try adjusting this to match arc around Lottie
    const centerX = 250;
    const centerY = 250;
    
  return (
    <svg
      width={centerX * 2}
      height={centerY}
      className="semicircle-text"
      viewBox={`0 0 ${centerX * 2} ${centerY}`}
    >
      <defs>
        <path
          id="semicirclePath"
          d={`
            M ${centerX - radius},${centerY}
            A ${radius},${radius} 0 0,1 ${centerX + radius},${centerY}
          `}
          fill="none"
        />
      </defs>
      {data.map((item, index) => (
        <text key={index} fill={item.color} fontSize="18" fontWeight="bold" letterSpacing="2px">
          <textPath
            href="#semicirclePath"
            startOffset={`${(index / data.length) * 100}%`}
            textAnchor="middle"
          >
            {item.text}
          </textPath>
        </text>
      ))}
    </svg>
  );
}

export default SemicircleText;
