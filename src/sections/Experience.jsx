import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

export default function Experience() {
    const { experience } = resumeData;

    return (
        <section id="experience" className="experience">
            <div className="experience-bg" />
            <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
                <SectionHeading
                    title="Experience"
                    subtitle="My professional journey and the impact I've made."
                />

                <div className="experience-list">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="experience-item"
                        >
                            {i < experience.length - 1 && (
                                <div className="experience-timeline-line" />
                            )}

                            <div className="experience-timeline-dot">
                                <FaBriefcase className="experience-timeline-dot-icon" />
                            </div>

                            <div className="glass-card experience-card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="experience-meta-item">
                                            <FaCalendarAlt className="experience-meta-icon" />
                                            {exp.duration}
                                        </span>
                                        <span className="experience-meta-item">
                                            <FaMapMarkerAlt className="experience-meta-icon" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="experience-responsibilities">
                                    {exp.responsibilities.map((resp, ri) => (
                                        <motion.li
                                            key={ri}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * ri }}
                                            className="experience-responsibility"
                                        >
                                            <span className="experience-arrow">▹</span>
                                            {resp}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
