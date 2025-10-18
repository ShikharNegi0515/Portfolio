import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
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

