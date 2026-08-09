import React, { Component } from "react";
import { motion } from "framer-motion";

const username = "ShikharNegi0515";

const GitHub = ({ theme }) => {
    const isDark = theme !== "light";
    const statsUrl = isDark
        ? `https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`
        : `https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true`;
    const streakUrl = isDark
        ? `https://streak-stats.demolab.com/?user=${username}&theme=tokyonight&hide_border=true`
        : `https://streak-stats.demolab.com/?user=${username}&theme=default&hide_border=true`;
    const calendarTheme = isDark
        ? { dark: ["#1a1a35", "#4c1d95", "#7c3aed", "#a855f7", "#d8b4fe"] }
        : { light: ["#fee2e2", "#fca5a5", "#f87171", "#ef4444", "#b91c1c"] };


    return (
        <section id="github" className="github-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                GitHub Activity
            </motion.h2>

            <div className="github-inner">

                {/* Row 1: GitHub Stats + Streak */}
                <div className="github-row-top">
                    <motion.div className="github-card"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                    >
                        <img src={statsUrl} alt="GitHub Stats" loading="lazy" />
                    </motion.div>
                    <motion.div className="github-card"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.5 }}
                    >
                        <img src={streakUrl} alt="GitHub Streak" loading="lazy" />
                    </motion.div>
                </div>

                {/* Row 2: LeetCode + Top Languages */}
                <div className="github-row-bottom">
                    <motion.div className="github-card"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.14, duration: 0.5 }}
                    >
                        <img
                            src={`https://leetcard.jacoblin.cool/MannuMistri?theme=${isDark ? 'dark' : 'light'}&font=Baloo%202`}
                            alt="LeetCode Stats" loading="lazy"
                            style={{ width: '100%', objectFit: 'contain' }}
                        />
                    </motion.div>
                    <motion.div className="github-card"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.18, duration: 0.5 }}
                    >
                        <img
                            src={isDark
                                ? `https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&langs_count=8`
                                : `https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&hide_border=true&langs_count=8`
                            }
                            alt="Top Languages" loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Row 3: Contribution Calendar */}
                <motion.div className="github-calendar-wrap"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h3>GitHub Contributions Calendar</h3>
                    <img
                        src={`https://ghchart.rshah.org/${isDark ? '7c3aed' : 'ff6b6b'}/${username}`}
                        alt="GitHub Contributions Calendar"
                        style={{ width: "100%", borderRadius: "8px" }}
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default GitHub;
