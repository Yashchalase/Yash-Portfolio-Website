import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedinIn,
    FaPaperPlane,
} from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

export default function Contact() {
    const { email, phone, location, github, linkedin } = resumeData.personal;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.open(mailtoLink);
    };

    const contactInfo = [
        { icon: <FaEnvelope />, label: "Email", value: email, href: `mailto:${email}` },
        { icon: <FaPhone />, label: "Phone", value: phone, href: `tel:${phone}` },
        { icon: <FaMapMarkerAlt />, label: "Location", value: location, href: "#" },
    ];

    const socialLinks = [
        { icon: <FaGithub />, label: "GitHub", href: github },
        { icon: <FaLinkedinIn />, label: "LinkedIn", href: linkedin },
        { icon: <FaEnvelope />, label: "Email", href: `mailto:${email}` },
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact-bg" />
            <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a project in mind or want to collaborate? Let's connect!"
                />

                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-info-cards"
                    >
                        <div className="glass-card contact-info-card">
                            <h3 className="contact-info-title">Contact Information</h3>
                            <div className="contact-info-items">
                                {contactInfo.map((info, i) => (
                                    <a key={i} href={info.href} className="contact-info-link">
                                        <div className="contact-info-icon-box">{info.icon}</div>
                                        <div>
                                            <p className="contact-info-label">{info.label}</p>
                                            <p className="contact-info-value">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card contact-info-card">
                            <h3 className="contact-connect-title">Connect With Me</h3>
                            <div className="contact-socials">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card contact-form-card">
                            <div className="contact-form">
                                <div className="contact-form-row">
                                    <div className="contact-form-group">
                                        <label>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="contact-input"
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <label>Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="contact-input"
                                        />
                                    </div>
                                </div>
                                <div className="contact-form-group">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        required
                                        className="contact-input"
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or idea..."
                                        required
                                        rows={5}
                                        className="contact-input contact-textarea"
                                    />
                                </div>
                                <button type="submit" className="btn-primary btn-primary-full">
                                    <FaPaperPlane />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
