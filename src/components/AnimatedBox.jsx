import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedBox() {
    const [text, setText] = useState("SWAROOP");
    const [textSize, setTextSize] = useState(32);
    const [expanded, setExpanded] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setExpanded(true);
            setText("SWAROOP MALLIDI");
            setTextSize(24);
        }, 1500); // Wait for sweep animation to finish
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div 
            onClick={() => (window.location.href = "/")}
            style={{ 
                cursor: "pointer", 
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                padding: "8px",
                margin: 0,
                marginLeft: "20px", // Align with the About and Resume section
                textAlign: "left"
            }}
        >
            {/* Text with gradient highlight */}
            <motion.h1
                style={{
                    fontSize: `${textSize}px`,
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    margin: 0,
                    position: "relative",
                    display: "inline-block",
                    color: "#ffffff"
                }}
                animate={{ 
                    fontSize: textSize
                }}
                transition={{ duration: 0.5 }}
            >
                {text}
                
                {/* Animated color sweep overlay */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(to right, transparent, #ff0088 50%, transparent)",
                        mixBlendMode: "lighten",
                        zIndex: 1
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                        duration: 1.2,
                        ease: "easeInOut"
                    }}
                />
            </motion.h1>
        </div>
    );
}