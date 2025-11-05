import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // const resumeLink = "https://drive.google.com/uc?export=download&id=1CVbNOBVwdlDhqKE9SZTNovS4NEuSMq-I";

    const handleResumeDownload = () => {
        const viewLink = "https://drive.google.com/file/d/1r_A4DjVpOXm2nPICYZNluFNlfTq1Z-BW/view?usp=sharing";
        const downloadLink = "https://drive.google.com/uc?export=download&id=1r_A4DjVpOXm2nPICYZNluFNlfTq1Z-BW";


        window.open(viewLink, "_blank");

        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = "Shikhar_Negi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Shikhar Negi</div>

                {/* Hamburger Icon */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Nav Links */}
                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    <li>
                        <button className="resume-btn" onClick={handleResumeDownload}>
                            Resume
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
