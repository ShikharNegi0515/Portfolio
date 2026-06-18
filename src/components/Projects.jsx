import React from "react";

import nicheImg from "../assets/niche.png";
import financeImg from "../assets/finance.png";
import atsifyImg from "../assets/ATSify.png";

// use external icon URLs so you don't need local icon files
const gitIcon = "https://img.icons8.com/color/256/git.png";
const netlifyIcon =
    "https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png";

const projectsData = [
    {
        name: "ATsify",
        description: "A premium ATS Resume Checker platform to analyze and optimize resumes.",
        image: atsifyImg,
        github: "https://github.com/ShikharNegi0515/ATSify-Smart-Resume-Checker--FrontEnd",
        netlify: "https://at-sify-smart-resume-checker-front.vercel.app/",
        tech: "React | NestJS | TypeScript",
    },
    {
        name: "Niche-Community Platform",
        description: "A modern full-stack platform featuring interactive discussions, profiles, and a glassmorphic UI.",
        image: nicheImg,
        github: "https://github.com/ShikharNegi0515/niche-community-frontend",
        netlify: "https://niche-community-frontend-3qpy.vercel.app/",
        tech: "React | Node.js | Express.js | MongoDB | CSS",
    },
    {
        name: "Personal Finance Manager",
        description: "A React app to manage tasks with add, edit, delete features.",
        image: financeImg,
        github: "https://github.com/ShikharNegi0515/PersonalFinanceManager",
        netlify: "https://personal-finance-manager-dusky.vercel.app/",
        tech: "HTML | CSS | React | Firebase | Chart.js",
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>

            <div className="projects-container">
                {projectsData.map((project, idx) => (
                    <div className="project-card" key={idx}>
                        <img
                            src={project.image}
                            alt={project.name}
                            className="project-img"
                        />

                        <div className="project-content">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>

                            <div className="tech-stack-badges" style={{ marginTop: 10 }}>
                                {project.tech.split("|").map((t) => (
                                    <span key={t.trim()} style={{ whiteSpace: "nowrap" }}>
                                        {t.trim()}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links" style={{ marginTop: 12 }}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.name} GitHub`}
                                >
                                    <img
                                        src={gitIcon}
                                        alt="GitHub"
                                        className="icon"
                                        style={{ width: 35, height: 35 }}
                                    />
                                </a>

                                <a
                                    href={project.netlify}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.name} Live Demo`}
                                >
                                    <img
                                        src={netlifyIcon}
                                        alt="Netlify"
                                        className="icon"
                                        style={{ width: 35, height: 35 }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
