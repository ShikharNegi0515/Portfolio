import React, { useState, useEffect } from "react";

const sections = ["hero", "about", "skills", "projects", "github", "contact"];
const navLabels = { hero: "Home", about: "About", skills: "Skills", projects: "Projects", github: "GitHub", contact: "Contact" };

const Navbar = ({ onToggleTheme, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            let current = "hero";
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) current = id;
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1o6Wqzl92fxHLx8K-C3Qi9ij1IXUItZIn/view?usp=sharing", "_blank");
    };

    return (
        <nav className="navbar" style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none" }}>
            <div className="navbar-container">
                <div className="navbar-logo">Shikhar Negi</div>

                <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span /><span /><span />
                </div>

                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    {sections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={activeSection === id ? "active" : ""}
                                onClick={() => setMenuOpen(false)}
                            >
                                {navLabels[id]}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="resume-btn" onClick={handleResume}>Resume</button>
                    </li>
                    <li>
                        <button
                            className="theme-toggle"
                            onClick={onToggleTheme}
                            aria-label="Toggle theme"
                            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {theme === "dark" ? "☀️" : "🌙"}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
