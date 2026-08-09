import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Photo.png";

const stats = [
    { num: 5, suffix: "+", label: "Projects Shipped" },
    { num: 15, suffix: "+", label: "Technologies" },
    { num: 1, suffix: "+", label: "Years Experience" },
];

// Animated counter hook
function useCountUp(target, duration = 1500, trigger) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!trigger) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, trigger]);
    return count;
}

const StatItem = ({ num, suffix, label, delay }) => {
    const ref = useRef(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const count = useCountUp(num, 1200, triggered);

    return (
        <motion.div
            className="stat-item"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <div className="num">{count}{suffix}</div>
            <div className="label">{label}</div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>

            <div className="about-inner">
                <motion.div
                    className="about-photo-wrap"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={profileImg} alt="Shikhar Negi" className="about-photo" />
                    <div className="about-photo-badge">🚀 Open to Work</div>
                </motion.div>

                <motion.div
                    className="about-text-wrap"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p>
                        I'm <strong>Shikhar Negi</strong>, a passionate <strong>Full Stack Developer</strong> who loves
                        crafting clean, scalable web applications. I thrive at the intersection of great design and
                        solid engineering.
                    </p>
                    <p>
                        My stack revolves around <strong>React, TypeScript, Node.js, NestJS</strong>, and databases like{" "}
                        <strong>MongoDB &amp; PostgreSQL</strong>. I enjoy building things end-to-end — from a polished UI
                        to a robust REST or WebSocket backend.
                    </p>
                    <p>
                        Currently building <strong>CanvasX</strong> — an AI-powered collaborative whiteboard platform.
                        I'm actively looking for <strong>full-time or internship opportunities</strong> where I can
                        contribute, grow, and make an impact.
                    </p>

                    <div className="about-stats">
                        {stats.map((s, i) => (
                            <StatItem key={s.label} {...s} delay={0.2 + i * 0.1} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
