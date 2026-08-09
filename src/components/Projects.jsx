import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import nicheImg from "../assets/niche.png";
import typesprintImg from "../assets/TypeSprint.png";
import atsifyImg from "../assets/ATSify.png";

const projectsData = [
    {
        name: "TypeSprint",
        description: "A minimalist, fast-paced typing platform with real-time WPM analytics, error tracking, and customizable themes. Built with a full NestJS backend.",
        image: typesprintImg,
        github: "https://github.com/ShikharNegi0515/TypeSprint",
        live: "https://type-sprint-lime.vercel.app/",
        tech: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    },
    {
        name: "Niche Community",
        description: "A modern full-stack community platform featuring interactive discussions, user profiles, and a glassmorphic UI with real-time engagement.",
        image: nicheImg,
        github: "https://github.com/ShikharNegi0515/niche-community-frontend",
        live: "https://niche-community-frontend-3qpy.vercel.app/",
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
        name: "ATSify",
        description: "A premium ATS Resume Checker platform that analyzes and scores resumes against job descriptions using AI-powered keyword matching.",
        image: atsifyImg,
        github: "https://github.com/ShikharNegi0515/ATSify-Smart-Resume-Checker--FrontEnd",
        live: "https://at-sify-smart-resume-checker-front.vercel.app/",
        tech: ["React", "NestJS", "TypeScript"],
    },
];

const Projects = () => {
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
                        >
                            <div className="project-thumb">
                                <img src={project.image} alt={project.name} loading="lazy" />
                                <div className="project-thumb-overlay" />
                            </div>

                            <div className="project-body">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>

                                <div className="project-tags">
                                    {project.tech.map((t) => (
                                        <span className="project-tag" key={t}>{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link gh">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
