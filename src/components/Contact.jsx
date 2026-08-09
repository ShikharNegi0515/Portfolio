import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");
        emailjs
            .send("service_h4oxfff", "template_2b1745r", formData, "b0EZPa20r0RM43iKZ")
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => setStatus("error"));
    };

    const contactLinks = [
        { icon: <FaGithub />, label: "GitHub", href: "https://github.com/ShikharNegi0515", target: "_blank" },
        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/shikhar-negi-745508235/", target: "_blank" },
        { icon: <FaEnvelope />, label: "Email", href: "mailto:shikharnegi31@gmail.com", target: "" },
        { icon: <FaPhone />, label: "+91 87550 62268", href: "tel:+918755062268", target: "" },
    ];

    return (
        <section id="contact" className="contact-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Get In Touch
            </motion.h2>

            <div className="contact-inner">
                {/* Contact chips */}
                <motion.div
                    className="contact-info-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.target || undefined}
                            rel={link.target ? "noopener noreferrer" : undefined}
                            className="contact-chip"
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </motion.div>

                {/* Form */}
                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={status === "Sending..."}>
                        {status === "Sending..." ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="contact-status success">✅ Message sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="contact-status error">❌ Failed to send. Please try again.</p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
