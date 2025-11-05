import React, { useState } from "react";
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

        const SERVICE_ID = "service_h4oxfff";
        const TEMPLATE_ID = "template_2b1745r";
        const PUBLIC_KEY = "b0EZPa20r0RM43iKZ";

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log("FAILED...", error);
                    setStatus("Failed to send message. Please check your EmailJS configuration.");
                }
            );
    };

    return (
        <section
            id="contact"
            className="contact-section"
            style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem", textAlign: "center" }}
        >
            <h2 style={{ marginBottom: "1.5rem" }}>Contact Me</h2>

            {/* Icon-based Contact Info */}
            <div className="contact-info" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "1.5rem", marginBottom: "2rem" }}>
                <a
                    href="https://github.com/ShikharNegi0515"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/shikhar-negi-745508235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a href="mailto:shikharnegi31@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>

                <a href="tel:+918755062268" aria-label="Phone">
                    <FaPhone />
                </a>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                ></textarea>
                <button type="submit">Send Message</button>
            </form>

            {status && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{status}</p>}
        </section>
    );
};

export default Contact;
