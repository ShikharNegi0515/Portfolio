import React from "react";
import { motion } from "framer-motion";

const categories = [
    {
        label: "Frontend",
        skills: [
            { name: "React", img: "https://img.icons8.com/officel/256/react.png" },
            { name: "TypeScript", img: "https://img.icons8.com/color/256/typescript.png" },
            { name: "JavaScript", img: "https://img.icons8.com/fluency/256/javascript.png" },
            { name: "Next.js", img: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=FFFFFF" },
            { name: "HTML", img: "https://img.icons8.com/color/256/html-5.png" },
            { name: "CSS", img: "https://img.icons8.com/fluency/256/css3.png" },
            { name: "Tailwind CSS", img: "https://img.icons8.com/color/256/tailwind_css.png" },
            { name: "Chakra UI", img: "https://img.icons8.com/color/256/chakra-ui.png" },
        ],
    },
    {
        label: "Backend",
        skills: [
            { name: "Node.js", img: "https://img.icons8.com/color/256/nodejs.png" },
            { name: "NestJS", img: "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000" },
            { name: "Express.js", img: "https://img.icons8.com/ios/100/express-js.png" },
            { name: "Python", img: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
            { name: "Flask", img: "https://img.icons8.com/ios-filled/100/flask.png" },
            { name: "Django", img: "https://img.icons8.com/?size=100&id=qV-JzWYl9dzP&format=png&color=000000" },
        ],
    },
    {
        label: "Database",
        skills: [
            { name: "MongoDB", img: "https://img.icons8.com/color/256/mongodb.png" },
            { name: "PostgreSQL", img: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000" },
            { name: "MySQL", img: "https://img.icons8.com/color/256/mysql-logo.png" },
            { name: "Redis", img: "https://img.icons8.com/color/256/redis.png" },
            { name: "Firebase", img: "https://img.icons8.com/color/256/firebase.png" },
        ],
    },
    {
        label: "Tools & DevOps",
        skills: [
            { name: "Git", img: "https://img.icons8.com/color/256/git.png" },
            { name: "Docker", img: "https://img.icons8.com/color/256/docker.png" },
            { name: "VS Code", img: "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000" },
            { name: "Postman", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
            { name: "npm", img: "https://img.icons8.com/color/256/npm.png" },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Skills &amp; Technologies
            </motion.h2>

            <div className="skills-inner">
                {categories.map((cat, ci) => (
                    <motion.div
                        className="skill-category"
                        key={cat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1, duration: 0.5 }}
                    >
                        <div className="skill-category-title">{cat.label}</div>
                        <div className="skills-grid">
                            {cat.skills.map((skill, si) => (
                                <motion.div
                                    className="skill-pill"
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: ci * 0.08 + si * 0.04, duration: 0.35 }}
                                    whileHover={{ y: -3 }}
                                >
                                    <img src={skill.img} alt={skill.name} />
                                    {skill.name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
