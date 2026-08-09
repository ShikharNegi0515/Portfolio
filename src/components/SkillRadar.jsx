import React from "react";
import { motion } from "framer-motion";
import {
    RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ResponsiveContainer, Tooltip
} from "recharts";

const radarData = [
    { skill: "React / Frontend", level: 90 },
    { skill: "Node / NestJS", level: 82 },
    { skill: "TypeScript", level: 85 },
    { skill: "Databases", level: 75 },
    { skill: "Python / AI", level: 70 },
    { skill: "DevOps / Docker", level: 65 },
    { skill: "System Design", level: 72 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="radar-tooltip">
                <p className="radar-tooltip-label">{payload[0].payload.skill}</p>
                <p className="radar-tooltip-value">{payload[0].value}%</p>
            </div>
        );
    }
    return null;
};

const SkillRadar = () => {
    return (
        <motion.div
            className="skill-radar-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="skill-radar-title">Skill Proficiency</h3>
            <p className="skill-radar-sub">Self-assessed proficiency across core engineering domains</p>
            <ResponsiveContainer width="100%" height={360}>
                <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                    <PolarGrid stroke="rgba(124,58,237,0.2)" />
                    <PolarAngleAxis
                        dataKey="skill"
                        tick={{ fill: "var(--text-secondary)", fontSize: 12, fontWeight: 500 }}
                    />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, 100]}
                        tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                        tickCount={5}
                    />
                    <Radar
                        name="Proficiency"
                        dataKey="level"
                        stroke="var(--accent)"
                        fill="var(--accent)"
                        fillOpacity={0.25}
                        strokeWidth={2}
                        dot={{ fill: "var(--accent)", r: 4 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                </RadarChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default SkillRadar;
