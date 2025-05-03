import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import TravelDayPage from "./components/TravelDayPage";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "beige";
      return "light";
    });
  };

  return (
    <div className={`min-h-screen ${
      theme === "dark" 
        ? "bg-gray-900 text-gray-100" 
        : theme === "beige" 
          ? "bg-beige-100 text-gray-800" 
          : "bg-white text-gray-800"
    }`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Hero theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/skills" element={<Skills theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/blog" element={<Blog theme={theme} />} />
        <Route path="/experience" element={<Experience theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        - <Route path="/travel-day-:dayId" element={<TravelDayPage theme={theme} />} />
        + <Route path="/travel-day/:dayId" element={<TravelDayPage theme={theme} />} />
        <Route path="/travel-full-journal" element={<TravelDayPage theme={theme} initialDay={1} />} />
      </Routes>
    </div>
  );
}

export default App;