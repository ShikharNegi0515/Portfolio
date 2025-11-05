import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer" className="footer-section">
            <p>© 2025 Shikhar Negi. All rights reserved.</p>

            <div className="footer-socials">
                <a
                    href="https://github.com/ShikharNegi0515"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/shikhar-negi-745508235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a href="mailto:shikharnegi31@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>

                <a href="tel:+918755062268" aria-label="Phone">
                    <FaPhone />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
