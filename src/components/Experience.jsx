import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

// ── Fill in your actual details below ─────────────────────────────────────
const timelineData = [
    {
        type: "work",
        icon: <FaBriefcase />,
        title: "Associate Fullstack Engineer",
        org: "Media NV",
        period: "Feb 2026 – May 2026",
        desc: "Contributed to building and optimizing end-to-end web applications, focusing on scalable architecture and seamless user experiences.",
        color: "#06b6d4",
    },
    {
        type: "work",
        icon: <FaBriefcase />,
        title: "Junior Data Analyst",
        org: "Bharat Electronics Limited (BEL)",
        period: "Jun 2024 – Sep 2024",
        desc: "Analyzed complex datasets, visualized insights, and collaborated with teams to drive data-informed decision-making processes.",
        color: "#f59e0b",
    },
    {
        type: "education",
        icon: <FaGraduationCap />,
        title: "B.Tech",
        org: "Govind Ballabh Pant Institute of Engineering & Technology",
        period: "2020 – 2024",
        desc: "Graduated with a focus on computer science fundamentals, data structures, algorithms, and web technologies.",
        color: "#7c3aed",
    },
    {
        type: "cert",
        icon: <FaCertificate />,
        title: "Full Stack Web Development",
        org: "Masai School",
        period: "Completed",
        desc: "Intensive full-stack web development program covering MERN stack, algorithms, and system design.",
        color: "#eab308",
        link: "https://drive.google.com/file/d/1jKIn9KRBr5p7NlTY0sW1lb8ZNHb--SqJ/view?usp=sharing"
    }
];

const typeLabel = { education: "Education", work: "Experience", cert: "Certification" };

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Experience &amp; Education
            </motion.h2>

            <div className="timeline">
                {timelineData.map((item, i) => (
                    <motion.div
                        className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                    >
                        <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 16px ${item.color}80` }}>
                            {item.icon}
                        </div>
                        <div className="timeline-card">
                            <span className="timeline-badge" style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}12` }}>
                                {typeLabel[item.type]}
                            </span>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-org">{item.org}</p>
                            <p className="timeline-period">{item.period}</p>
                            <p className="timeline-desc">{item.desc}</p>
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noreferrer" className="timeline-link" style={{ color: item.color, marginTop: '12px', display: 'inline-block', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>
                                    View Certificate ↗
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
                <div className="timeline-line" />
            </div>
        </section>
    );
};

export default Experience;
