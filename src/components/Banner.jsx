import React from "react";

const Banner = () => {
    const items = [
        "🚀 Currently Building: CanvasX — AI-Powered Collaborative Whiteboard",
        "⚡ Open to Full-Time & Internship Opportunities",
        "🛠️ Stack: React · NestJS · TypeScript · PostgreSQL",
        "🌐 Check out TypeSprint — Real-Time Typing Platform",
    ];
    const repeated = [...items, ...items];

    return (
        <div className="banner-wrap">
            <div className="banner-track">
                {repeated.map((item, i) => (
                    <span key={i} className="banner-item">
                        {item}
                        <span className="banner-dot">·</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Banner;
