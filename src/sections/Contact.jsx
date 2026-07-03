import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedinIn,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
} from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
    const { email, phone, location, github, linkedin } = resumeData.personal;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (status !== "idle") setStatus("idle");
    };

    const submitViaMailto = () => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        if (!WEB3FORMS_KEY) {
            submitViaMailto();
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                throw new Error(result.message || "Failed to send message.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage(err.message || "Something went wrong. Please email me directly.");
        }
    };

    const contactInfo = [
        { icon: <FaEnvelope />, label: "Email", value: email, href: `mailto:${email}` },
        { icon: <FaPhone />, label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
        { icon: <FaMapMarkerAlt />, label: "Location", value: location },
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
                                {contactInfo.map((info) => {
                                    const content = (
                                        <>
                                            <div className="contact-info-icon-box">{info.icon}</div>
                                            <div>
                                                <p className="contact-info-label">{info.label}</p>
                                                <p className="contact-info-value">{info.value}</p>
                                            </div>
                                        </>
                                    );

                                    return info.href ? (
                                        <a key={info.label} href={info.href} className="contact-info-link">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={info.label} className="contact-info-link">
                                            {content}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="glass-card contact-info-card">
                            <h3 className="contact-connect-title">Connect With Me</h3>
                            <div className="contact-socials">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
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
                        <form onSubmit={handleSubmit} className="glass-card contact-form-card" noValidate>
                            <div className="contact-form">
                                <div className="contact-form-row">
                                    <div className="contact-form-group">
                                        <label htmlFor="contact-name">Your Name</label>
                                        <input
                                            id="contact-name"
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
                                        <label htmlFor="contact-email">Your Email</label>
                                        <input
                                            id="contact-email"
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
                                    <label htmlFor="contact-subject">Subject</label>
                                    <input
                                        id="contact-subject"
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
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or idea..."
                                        required
                                        rows={5}
                                        className="contact-input contact-textarea"
                                    />
                                </div>

                                {status === "success" && (
                                    <p className="contact-status contact-status-success" role="status">
                                        <FaCheckCircle />
                                        {WEB3FORMS_KEY
                                            ? "Message sent! I'll get back to you soon."
                                            : "Your email client should open — send the message from there."}
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="contact-status contact-status-error" role="alert">
                                        <FaExclamationCircle />
                                        {errorMessage}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn-primary btn-primary-full"
                                    disabled={status === "submitting"}
                                >
                                    <FaPaperPlane />
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
