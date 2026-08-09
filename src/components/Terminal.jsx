import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

const commands = {
    whoami: "Shikhar Negi - Full Stack Developer specializing in React, NestJS, and Databases.",
    skills: "React, TypeScript, Node.js, NestJS, Python, Flask, Django, MongoDB, PostgreSQL, Docker.",
    projects: "CanvasX (AI Whiteboard), TypeSprint (Real-Time Typing Platform).",
    contact: "Email: example@email.com | GitHub: @ShikharNegi0515",
    clear: "CLEAR",
    help: "Available commands: whoami, skills, projects, contact, clear",
};

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: "output", text: "Welcome to ShikharOS v1.0.0" },
        { type: "output", text: "Type 'help' to see available commands." },
    ]);
    const [input, setInput] = useState("");
    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: "input", text: `guest@shikhar-portfolio:~$ ${input}` }];
            
            if (cmd === "") {
                setHistory(newHistory);
            } else if (commands[cmd]) {
                if (cmd === "clear") {
                    setHistory([]);
                } else {
                    setHistory([...newHistory, { type: "output", text: commands[cmd] }]);
                }
            } else {
                setHistory([...newHistory, { type: "output", text: `Command not found: ${cmd}` }]);
            }
            setInput("");
        }
    };

    const handleInfoClick = () => {
        setHistory(prev => [
            ...prev,
            { type: "input", text: `guest@shikhar-portfolio:~$ help` },
            { type: "output", text: commands.help }
        ]);
    };

    return (
        <motion.div
            className="terminal-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="terminal-header">
                <div className="terminal-btns">
                    <span className="close" />
                    <span className="minimize" />
                    <span className="maximize" />
                </div>
                <div className="terminal-title">guest@shikhar-portfolio: ~</div>
                <button className="terminal-info-btn" onClick={handleInfoClick} title="Available Commands">
                    <FaInfoCircle />
                </button>
            </div>
            <div className="terminal-body" ref={bodyRef}>
                {history.map((line, i) => (
                    <div key={i} className={`terminal-line ${line.type}`}>
                        {line.text}
                    </div>
                ))}
                <div className="terminal-input-line">
                    <span className="prompt">guest@shikhar-portfolio:~$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        autoComplete="off"
                        autoFocus
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Terminal;
