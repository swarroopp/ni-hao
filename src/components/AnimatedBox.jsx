import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedBox() {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    
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
                marginLeft: "20px",
                textAlign: "left"
            }}
        >
            {/* Text always shows SWAROOP MALLIDI */}
            <motion.h1
                style={{
                    fontSize: "24px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    margin: 0,
                    position: "relative",
                    display: "inline-block",
                    color: isAnimationComplete ? "#ffffff" : "#ffffff"
                }}
            >
                SWAROOP MALLIDI
                
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
                    onAnimationComplete={() => setIsAnimationComplete(true)}
                />
            </motion.h1>
        </div>
    );
}