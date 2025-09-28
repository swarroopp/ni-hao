import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import About from './components/about.jsx';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: 'easeIn'
    }
  }
};

// Animated page wrapper component
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
