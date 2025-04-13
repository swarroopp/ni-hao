import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedBox() {
    const [showCurve, setShowCurve] = useState(true);
    const [text, setText] = useState("SWAROOP");
    const [textSize, setTextSize] = useState(32);
    const [textY, setTextY] = useState(95);
    const [textColor, setTextColor] = useState("#ff0088"); // Initial pink color

    useEffect(() => {
        setTimeout(() => {
            setTextColor("#ff0000"); // Change text to red during animation
        }, 400); // Halfway through the animation

        setTimeout(() => {
            setShowCurve(false);
            setText("SWAROOP MALLIDI");
            setTextSize(24);
            setTextY(50);
            setTextColor("#ffffff");        
        }, 800);
    }, []);

    return (
        <svg
            width="300"
            height="100"
            viewBox="0 0 220 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => (window.location.href = "/")}
            style={{ cursor: "pointer", display: "block", margin: "auto" }}
        >
            {/* Animated Curve */}
            {showCurve && (
                <motion.path
                    d="M10,80 Q110,10 210,80"
                    stroke="#ff0088"
                    strokeWidth="4"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeIn" }} // Ease-in effect
                />
            )}

            {/* Animated Text */}
            <motion.text
                x="50%"
                y={textY}
                textAnchor="middle"
                fill={textColor}
                fontFamily="Arial, sans-serif"
                initial={{ fontSize: 32, y: 95, fill: "#ff0088" }}
                animate={{ fontSize: textSize, y: textY, fill: textColor }}
                transition={{ duration: 0.5, ease: "easeIn" }} // Ease-in for smooth effect
            >
                {text}
            </motion.text>
        </svg>
    );
}
