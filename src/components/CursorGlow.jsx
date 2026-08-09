import React, { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
    const cursorRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const move = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
            setVisible(true);
        };
        const hide = () => setVisible(false);
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseleave", hide);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseleave", hide);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="cursor-glow"
            style={{ opacity: visible ? 1 : 0 }}
        />
    );
};

export default CursorGlow;
