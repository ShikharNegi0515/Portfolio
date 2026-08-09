import React, { useEffect, useState } from "react";

const Loader = ({ onDone }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setFadeOut(true), 1800);
        const t2 = setTimeout(() => onDone(), 2300);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onDone]);

    return (
        <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
            <div className="loader-inner">
                <div className="loader-initials">
                    <span className="loader-s">S</span>
                    <span className="loader-n">N</span>
                </div>
                <div className="loader-bar">
                    <div className="loader-bar-fill" />
                </div>
                <p className="loader-label">Loading portfolio...</p>
            </div>
        </div>
    );
};

export default Loader;
