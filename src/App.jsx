import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
