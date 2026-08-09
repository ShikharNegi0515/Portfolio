import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/Photo.png";
import Terminal from "./Terminal";

const Hero = () => {
    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1o6Wqzl92fxHLx8K-C3Qi9ij1IXUItZIn/view?usp=sharing", "_blank");
    };

    const fadeUp = { hidden: { opacity: 0, y: 30 }, show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" } }) };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-inner">
                {/* Left: Text */}
                <div className="hero-content">
                    <motion.div className="hero-badge" custom={0} variants={fadeUp} initial="hidden" animate="show">
                        <span className="dot" />
                        Available for opportunities
                    </motion.div>

                    <motion.p className="hero-greeting" custom={1} variants={fadeUp} initial="hidden" animate="show">
                        Hi there, I'm
                    </motion.p>

                    <motion.h1 className="hero-name" custom={2} variants={fadeUp} initial="hidden" animate="show">
                        Shikhar Negi
                    </motion.h1>

                    <motion.div className="hero-typewriter" custom={3} variants={fadeUp} initial="hidden" animate="show">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer", 2000,
                                "React Enthusiast", 2000,
                                "Backend Engineer", 2000,
                                "Problem Solver", 2000,
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            speed={50}
                        />
                    </motion.div>

                    <motion.p className="hero-desc" custom={4} variants={fadeUp} initial="hidden" animate="show">
                        I build <strong>scalable, interactive web applications</strong> with React, TypeScript,
                        Node.js &amp; NestJS. Passionate about clean code, great UX, and shipping products that matter.
                    </motion.p>

                    <motion.div className="hero-actions" custom={5} variants={fadeUp} initial="hidden" animate="show">
                        <button className="btn-primary" onClick={handleResume}>View Resume</button>
                        <a href="#projects" className="btn-secondary">See Projects</a>
                    </motion.div>

                    <motion.div className="hero-socials" custom={6} variants={fadeUp} initial="hidden" animate="show">
                        <a href="https://github.com/ShikharNegi0515" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shikhar-negi-745508235/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:shikharnegi31@gmail.com" className="hero-social-link" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>

                {/* Right: Photo */}
                <motion.div
                    className="hero-image-wrap"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                >
                    <div className="hero-image-ring" />
                    <div className="hero-image-ring-inner" />
                    <img src={profileImg} alt="Shikhar Negi" className="hero-img" />
                </motion.div>
            </div>
            <div style={{ padding: "0 20px" }}>
                <Terminal />
            </div>
        </section>
    );
};

export default Hero;
