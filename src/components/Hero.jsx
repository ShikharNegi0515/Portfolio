import React from "react";

const Hero = () => {
    const resumeLink = "https://drive.google.com/uc?export=download&id=1CVbNOBVwdlDhqKE9SZTNovS4NEuSMq-I";

    const handleResumeDownload = () => {
        window.open(resumeLink, "_blank");
    };
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm Shikhar Negi</h1>
                <p>I'm a passionate Web Developer creating interactive and responsive websites.</p>
                <button className="hero-btn" onClick={handleResumeDownload}>
                    Resume
                </button>
            </div>
        </section>
    );
};

export default Hero;
