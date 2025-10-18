import React from "react";
import profileImg from "../assets/photo.jpg"; // replace with your actual image filename

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-container">
                <div className="about-image">
                    <img src={profileImg} alt="Shikhar Negi" />
                </div>
                <div className="about-text">
                    <p>
                        I'm <strong>Shikhar Negi</strong>, a passionate web developer with experience
                        in building responsive and interactive websites. I enjoy learning new technologies
                        and creating projects that make an impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
