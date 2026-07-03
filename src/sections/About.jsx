import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaCheckCircle,
} from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

const SKILL_COUNT = Object.values(resumeData.skills).flat().length;

export default function About() {
    const { name, summary, highlights, location, email, phone } =
        resumeData.personal;

    const stats = [
        { label: "Projects Built", value: `${resumeData.projects.length}+` },
        { label: "Years Experience", value: "1+" },
        { label: "Technologies", value: `${SKILL_COUNT}+` },
        { label: "CGPA", value: "8.44" },
    ];

    return (
        <section id="about" className="about">
            <div className="about-bg" />
            <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me better — my background, passion, and what drives me."
                />

                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card about-card">
                            <h3 className="about-name-heading">
                                Hello! I&apos;m <span className="gradient-text">{name}</span>
                            </h3>
                            <p className="about-summary">{summary}</p>

                            <div className="about-highlights">
                                {highlights.map((highlight, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="about-highlight-item"
                                    >
                                        <FaCheckCircle className="about-highlight-icon" />
                                        <span className="about-highlight-text">{highlight}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="about-contact-info">
                                <div className="about-contact-item">
                                    <FaMapMarkerAlt className="about-contact-item-icon" />
                                    {location}
                                </div>
                                <a href={`mailto:${email}`} className="about-contact-item about-contact-link">
                                    <FaEnvelope className="about-contact-item-icon" />
                                    {email}
                                </a>
                                <a href={`tel:${phone.replace(/\s/g, "")}`} className="about-contact-item about-contact-link">
                                    <FaPhone className="about-contact-item-icon" />
                                    {phone}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-stats">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="glass-card about-stat-card"
                                >
                                    <div className="about-stat-value gradient-text">{stat.value}</div>
                                    <div className="about-stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
