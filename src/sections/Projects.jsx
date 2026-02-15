import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCalendarAlt,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

const techColors = {
    "Next.js": "#818cf8",
    TypeScript: "#3178c6",
    Python: "#3776ab",
    PostgreSQL: "#336791",
    HTML: "#e34f26",
    CSS: "#1572b6",
    JavaScript: "#f7df1e",
    Firebase: "#ffca28",
    "React.js": "#61dafb",
    "Node.js": "#339933",
    "Express.js": "#68a063",
    MongoDB: "#47a248",
};

export default function Projects() {
    const { projects } = resumeData;
    const [expandedIdx, setExpandedIdx] = useState(null);

    return (
        <section id="projects" className="projects">
            <div className="projects-bg" />
            <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
                <SectionHeading
                    title="Projects"
                    subtitle="A showcase of my work — solutions I've built to solve real problems."
                />

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card project-card"
                        >
                            <div className="project-card-overlay" />
                            <div className="project-card-stripe" />

                            <div className="project-card-body">
                                <div className="project-date">
                                    <FaCalendarAlt />
                                    <span>{project.date}</span>
                                </div>

                                <h3 className="project-title">{project.title}</h3>

                                <p className="project-description">{project.description}</p>

                                <div style={{ marginBottom: "16px" }}>
                                    <button
                                        onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                                        className="project-features-toggle"
                                    >
                                        {expandedIdx === i ? (
                                            <>
                                                <FaChevronUp /> Hide Features
                                            </>
                                        ) : (
                                            <>
                                                <FaChevronDown /> Show Key Features
                                            </>
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {expandedIdx === i && (
                                            <motion.ul
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="project-features-list"
                                            >
                                                {project.features.map((feature, fi) => (
                                                    <li key={fi} className="project-feature-item">
                                                        <span className="project-feature-arrow">▹</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="project-tech-stack">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="project-tech-tag"
                                            style={{
                                                backgroundColor: (techColors[tech] || "#6366f1") + "18",
                                                color: techColors[tech] || "#818cf8",
                                                border: `1px solid ${(techColors[tech] || "#6366f1") + "30"}`,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FaGithub /> Source Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link project-link-live"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
