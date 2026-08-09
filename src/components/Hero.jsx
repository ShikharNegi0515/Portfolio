import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope, FaBriefcase, FaTimes } from "react-icons/fa";
import profileImg from "../assets/Photo.png";
import Terminal from "./Terminal";

const EMAIL = "shikharnegi31@gmail.com";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const saved = localStorage.getItem("otw-status");
        return saved === null ? true : saved === "true";
    });
    const [showTooltip, setShowTooltip] = useState(false);
    const [showAdminHint, setShowAdminHint] = useState(false);
    const longPressTimer = useRef(null);

    useEffect(() => {
        localStorage.setItem("otw-status", String(isOpen));
    }, [isOpen]);

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1o6Wqzl92fxHLx8K-C3Qi9ij1IXUItZIn/view?usp=sharing", "_blank");
    };

    // Short click → open mailto for visitors
    const handleBadgeClick = () => {
        if (!isOpen) {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
            return;
        }
        const subject = encodeURIComponent("Interested in connecting — from your portfolio");
        const body = encodeURIComponent(
            `Hi Shikhar,\n\nI came across your portfolio and saw you're open to work.\nI'd love to connect and discuss potential opportunities.\n\n[Your name & company here]`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    // Long press (1.5s) → toggle mode for owner
    const handleMouseDown = () => {
        longPressTimer.current = setTimeout(() => {
            setIsOpen((prev) => !prev);
            setShowAdminHint(true);
            setTimeout(() => setShowAdminHint(false), 2500);
        }, 1500);
    };

    const handleMouseUp = () => {
        clearTimeout(longPressTimer.current);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: (i) => ({
            opacity: 1, y: 0,
            transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" }
        })
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-inner">
                {/* Left: Text */}
                <div className="hero-content">

                    {/* Open to Work Badge */}
                    <motion.div
                        className={`otw-badge ${isOpen ? "otw-open" : "otw-closed"}`}
                        custom={0} variants={fadeUp} initial="hidden" animate="show"
                        onClick={handleBadgeClick}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onTouchStart={handleMouseDown}
                        onTouchEnd={handleMouseUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        title={isOpen ? "Click to reach out via email" : "Currently not available"}
                    >
                        <span className={`otw-dot ${isOpen ? "otw-dot-open" : "otw-dot-closed"}`} />
                        <FaBriefcase className="otw-icon" />
                        {isOpen ? "Open to Work — Click to Connect" : "Not Available Right Now"}

                        {/* Tooltip for not-available state */}
                        <AnimatePresence>
                            {showTooltip && (
                                <motion.span
                                    className="otw-tooltip"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Not available right now 🙅
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Admin toggle hint */}
                    <AnimatePresence>
                        {showAdminHint && (
                            <motion.div
                                className="otw-admin-hint"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                ✅ Status updated: {isOpen ? "Open to Work" : "Not Available"}
                            </motion.div>
                        )}
                    </AnimatePresence>

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
                        <a href={`mailto:${EMAIL}`} className="hero-social-link" aria-label="Email">
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
