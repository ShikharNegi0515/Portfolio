import React, { useState, useEffect } from "react";
import { FaPalette, FaTimes } from "react-icons/fa";

const themes = [
    { name: "Purple", color: "#7c3aed", light: "#a855f7", glow: "rgba(124, 58, 237, 0.35)" },
    { name: "Cyan", color: "#06b6d4", light: "#22d3ee", glow: "rgba(6, 182, 212, 0.35)" },
    { name: "Green", color: "#10b981", light: "#34d399", glow: "rgba(16, 185, 129, 0.35)" },
    { name: "Orange", color: "#f97316", light: "#fb923c", glow: "rgba(249, 115, 22, 0.35)" },
    { name: "Pink", color: "#ec4899", light: "#f472b6", glow: "rgba(236, 72, 153, 0.35)" },
];

const ThemePicker = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const savedColor = localStorage.getItem("portfolio-accent");
        if (savedColor) {
            applyTheme(JSON.parse(savedColor));
        }
    }, []);

    const applyTheme = (theme) => {
        const root = document.documentElement;
        root.style.setProperty("--accent", theme.color);
        root.style.setProperty("--accent-light", theme.light);
        root.style.setProperty("--accent-glow", theme.glow);
        localStorage.setItem("portfolio-accent", JSON.stringify(theme));
    };

    return (
        <div className={`theme-picker-wrap ${open ? "open" : ""}`}>
            <button className="theme-picker-toggle" onClick={() => setOpen(!open)} aria-label="Customize Theme">
                {open ? <FaTimes /> : <FaPalette />}
            </button>
            <div className="theme-picker-menu">
                <h4>Accent Color</h4>
                <div className="theme-picker-colors">
                    {themes.map((t) => (
                        <button
                            key={t.name}
                            className="theme-color-btn"
                            style={{ backgroundColor: t.color }}
                            onClick={() => applyTheme(t)}
                            title={t.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemePicker;
