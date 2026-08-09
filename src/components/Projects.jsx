import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import nicheImg from "../assets/niche.png";
import typesprintImg from "../assets/TypeSprint.png";
import atsifyImg from "../assets/ATSify.png";

const projectsData = [
    {
        name: "TypeSprint",
        tagline: "Real-time Typing Platform",
        description: "A minimalist, fast-paced typing platform with real-time WPM analytics, error tracking, and customizable themes. Built with a full NestJS backend with JWT authentication and PostgreSQL.",
        image: typesprintImg,
        github: "https://github.com/ShikharNegi0515/TypeSprint",
        live: "https://type-sprint-lime.vercel.app/",
        tech: ["React", "TypeScript", "NestJS", "PostgreSQL"],
        highlights: [
            "Real-time WPM and accuracy tracking with custom keystroke engine",
            "JWT-based authentication with profile history & leaderboard",
            "Customizable themes (Dark, Light, Hacker) with live preview",
            "Responsive design with smooth micro-animations",
        ],
        challenge: "The biggest challenge was achieving sub-100ms keystroke response time while simultaneously computing WPM, tracking errors, and rendering the UI — all without jank. Solved by debouncing analytics updates and using a separate requestAnimationFrame loop for the timer.",
        category: "Full Stack",
    },
    {
        name: "Niche Community",
        tagline: "Modern Community Platform",
        description: "A modern full-stack community platform featuring interactive discussions, user profiles, and a glassmorphic UI with real-time engagement. Think Reddit meets Discord.",
        image: nicheImg,
        github: "https://github.com/ShikharNegi0515/niche-community-frontend",
        live: "https://niche-community-frontend-3qpy.vercel.app/",
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
        highlights: [
            "Community-based post and discussion system with nested comments",
            "User authentication with roles and profile management",
            "Glassmorphic UI with dark mode support",
            "RESTful API with Express.js and MongoDB Atlas",
        ],
        challenge: "Designing a scalable MongoDB schema for nested comments while keeping query performance acceptable was the core challenge. Used a hybrid tree + parent-reference model to balance read speed and write simplicity.",
        category: "Full Stack",
    },
    {
        name: "ATSify",
        tagline: "AI-Powered Resume Checker",
        description: "A premium ATS Resume Checker platform that analyzes and scores resumes against job descriptions using AI-powered keyword matching and semantic analysis.",
        image: atsifyImg,
        github: "https://github.com/ShikharNegi0515/ATSify-Smart-Resume-Checker--FrontEnd",
        live: "https://at-sify-smart-resume-checker-front.vercel.app/",
        tech: ["React", "NestJS", "TypeScript", "Python", "AI/ML"],
        highlights: [
            "AI-powered keyword extraction and semantic matching",
            "Resume scoring with detailed section-by-section feedback",
            "PDF parsing and structured data extraction",
            "Clean, premium dashboard with score visualization",
        ],
        challenge: "Parsing PDFs reliably across different resume formats was far harder than expected. Different tools handled fonts, columns, and special characters differently. Implemented a multi-pass parser with fallback strategies to handle edge cases.",
        category: "AI / Full Stack",
    },
];

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-card"
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 40 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header Image */}
                    <div className="modal-img-wrap">
                        <img src={project.image} alt={project.name} />
                        <div className="modal-img-overlay" />
                        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                            <FaTimes />
                        </button>
                        <div className="modal-header-text">
                            <span className="modal-category">{project.category}</span>
                            <h2>{project.name}</h2>
                            <p>{project.tagline}</p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                        <p className="modal-desc">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="modal-section">
                            <h4>Tech Stack</h4>
                            <div className="modal-tags">
                                {project.tech.map((t) => (
                                    <span className="project-tag" key={t}>{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="modal-section">
                            <h4>Key Highlights</h4>
                            <ul className="modal-highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>
                                        <FaCheckCircle className="modal-check" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Challenge */}
                        <div className="modal-section modal-challenge">
                            <h4>⚡ Engineering Challenge</h4>
                            <p>{project.challenge}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="modal-actions">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary modal-btn">
                                <FaGithub /> View Code
                            </a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary modal-btn">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Featured Projects
            </motion.h2>

            <div className="projects-inner">
                <div className="projects-grid">
                    {projectsData.map((project, i) => (
                        <motion.div
                            className="project-card"
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.55 }}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="project-thumb">
                                <img src={project.image} alt={project.name} loading="lazy" />
                                <div className="project-thumb-overlay">
                                    <span className="project-view-btn">View Details →</span>
                                </div>
                            </div>

                            <div className="project-body">
                                <div className="project-category-badge">{project.category}</div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>

                                <div className="project-tags">
                                    {project.tech.map((t) => (
                                        <span className="project-tag" key={t}>{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="project-link gh" onClick={(e) => e.stopPropagation()}>
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                                        className="project-link live" onClick={(e) => e.stopPropagation()}>
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
