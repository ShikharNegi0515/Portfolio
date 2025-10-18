// GitHub.jsx
import React from "react";

const GitHub = () => {
    const username = "ShikharNegi0515"; // replace with your GitHub username

    return (
        <section id="github" className="github-section">
            <h2 className="github-heading">GitHub Stats & Contributions</h2>

            {/* GitHub Stats */}
            <div className="github-stats">
                <div className="stat-card">
                    <h3>GitHub Stats</h3>
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
                        alt="GitHub Stats"
                        className="github-img"
                    />
                </div>

                <div className="stat-card">
                    <h3>GitHub Streak</h3>
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical`}
                        alt="GitHub Streak"
                        className="github-img"
                    />
                </div>
            </div>

            {/* GitHub Contributions Calendar */}
            <div className="github-calendar-container">
                <h3>GitHub Contributions Calendar</h3>
                <img
                    src={`https://ghchart.rshah.org/${username}`}
                    alt="GitHub Contributions Calendar"
                    className="github-img-calander"
                />
            </div>
        </section>
    );
};

export default GitHub;
