import React from "react";

const Navbar = () => {
    const resumeLink = "https://drive.google.com/uc?export=download&id=1CVbNOBVwdlDhqKE9SZTNovS4NEuSMq-I";

    const handleResumeDownload = () => {
        window.open(resumeLink, "_blank");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Shikhar Negi</div>
            <ul className="navbar-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <button className="resume-btn" onClick={handleResumeDownload}>
                        Resume
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
