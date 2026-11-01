import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import resumeData from "../data/resumeData";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
    const { email, phone, location, github, linkedin, whatsapp } = resumeData.personal;
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
        if (!e.currentTarget.checkValidity()) {
            e.currentTarget.reportValidity();
            return;
        }
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

    const links = [
        { label: "Email", value: email, href: `mailto:${email}` },
        { label: "WhatsApp", value: phone, href: whatsapp, external: true },
        { label: "LinkedIn", value: "in/yash-chalase", href: linkedin, external: true },
        { label: "GitHub", value: "@yashchalase", href: github, external: true },
        { label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    ];

    const fields = [
        { name: "name", label: "Your name", type: "text", autoComplete: "name" },
        { name: "email", label: "Your email", type: "email", autoComplete: "email" },
    ];

    return (
        <section id="contact" className="section contact" aria-labelledby="contact-title">
            <div className="container">
                <p className="section-label" data-reveal>
                    <span className="section-index">(07)</span>
                    Contact
                </p>
                <h2 id="contact-title" className="contact-title" data-reveal>
                    Let&apos;s build something <em>together.</em>
                </h2>
                <a href={`mailto:${email}`} className="contact-email" data-reveal>
                    {email}
                    <FiArrowUpRight aria-hidden="true" />
                </a>

                <div className="contact-grid">
                    <div className="contact-side" data-reveal>
                        <ul className="contact-links">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                        <span className="contact-link-label">{link.label}</span>
                                        <span className="contact-link-value">{link.value}</span>
                                        <FiArrowUpRight aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="contact-location">
                            {location} — available for new opportunities.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form" noValidate data-reveal style={{ "--d": "80ms" }}>
                        <div className="contact-form-row">
                            {fields.map((field) => (
                                <div className="field" key={field.name}>
                                    <input
                                        id={`contact-${field.name}`}
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        autoComplete={field.autoComplete}
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor={`contact-${field.name}`}>{field.label}</label>
                                </div>
                            ))}
                        </div>
                        <div className="field">
                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="contact-subject">Subject</label>
                        </div>
                        <div className="field">
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=" "
                                required
                                rows={5}
                            />
                            <label htmlFor="contact-message">Tell me about your project or role</label>
                        </div>

                        {status === "success" && (
                            <p className="contact-status" role="status">
                                <FiCheck aria-hidden="true" />
                                {WEB3FORMS_KEY
                                    ? "Message sent — I'll get back to you soon."
                                    : "Your email client should open — send the message from there."}
                            </p>
                        )}
                        {status === "error" && (
                            <p className="contact-status contact-status-error" role="alert">
                                <FiAlertCircle aria-hidden="true" />
                                {errorMessage}
                            </p>
                        )}

                        <button type="submit" className="btn btn-solid contact-submit" disabled={status === "submitting"}>
                            {status === "submitting" ? "Sending…" : "Send message"}
                            <FiArrowRight aria-hidden="true" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
