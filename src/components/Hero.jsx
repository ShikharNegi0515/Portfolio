import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    const handleResume = () => {
        const viewLink = "https://drive.google.com/file/d/1r_A4DjVpOXm2nPICYZNluFNlfTq1Z-BW/view?usp=sharing";
        const downloadLink = "https://drive.google.com/uc?export=download&id=1r_A4DjVpOXm2nPICYZNluFNlfTq1Z-BW";


        // Open in new tab
        window.open(viewLink, "_blank");

        // Trigger download
        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = "Shikhar_Negi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm Shikhar Negi</h1>
                <p>I'm a passionate Web Developer creating interactive and responsive websites.</p>

                <button className="hero-btn" onClick={handleResume}>
                    Resume
                </button>

                <div className="social-links">
                    <a
                        href="https://www.linkedin.com/in/shikhar-negi-745508235/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn linkedin"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>

                    <a
                        href="https://github.com/ShikharNegi0515"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn github"
                    >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
