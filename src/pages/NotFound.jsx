import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound-wrap">
            <div className="notfound-inner">
                <div className="notfound-code">404</div>
                <h1 className="notfound-title">Page Not Found</h1>
                <p className="notfound-desc">
                    Looks like you've wandered into uncharted territory. This page doesn't exist — yet.
                </p>
                <Link to="/" className="notfound-btn">← Back to Portfolio</Link>
            </div>
            <div className="notfound-bg-glow" />
        </div>
    );
};

export default NotFound;
