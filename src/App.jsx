import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Github from "./components/Github";

import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import ThemePicker from "./components/ThemePicker";
import ParticleBackground from "./components/ParticleBackground";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import NotFound from "./pages/NotFound";
import "./App.css";

const MainApp = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <Banner />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Github theme={theme} />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className={`App ${theme === "light" ? "light" : ""}`}>
        <ParticleBackground theme={theme} />
        <ScrollToTop />
        <ThemePicker />
        {loading && <Loader onDone={() => setLoading(false)} />}
        <Routes>
          <Route path="/" element={<MainApp theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/Portfolio" element={<MainApp theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
