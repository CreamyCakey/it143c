import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AboutMe from './components/pages/aboutme';
import Navigation from './components/Navigation';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
