import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
    FaDownload,
    FaProjectDiagram,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";
import resumeData from "../data/resumeData";

export default function Hero() {
    const { name, roles, heroTagline, github, linkedin } = resumeData.personal;
    const prefersReducedMotion = useReducedMotion();

    const typeSequence = roles.flatMap((role) => [role, 2000]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-bg-grid" />
            <div className="hero-bg-radial" />

            <motion.div
                animate={prefersReducedMotion ? false : { y: [-20, 20, -20], x: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="hero-orb hero-orb-1"
            />
            <motion.div
                animate={prefersReducedMotion ? false : { y: [20, -20, 20], x: [10, -10, 10] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="hero-orb hero-orb-2"
            />

            <div className="section-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
                <div className="hero-content">
                    <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="hero-status"
                        >
                            <span className="hero-status-dot" />
                            <span className="hero-status-text">Available for opportunities</span>
                        </motion.div>

                        <h1 className="hero-name">
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">{name.split(" ")[0]}</span>
                            <br />
                            <span className="hero-name-last">
                                {name.split(" ").slice(1).join(" ")}
                            </span>
                        </h1>

                        <div className="hero-typing">
                            <span className="hero-typing-prefix">I&apos;m a </span>
                            <TypeAnimation
                                sequence={typeSequence}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="gradient-text-2"
                            />
                        </div>

                        <p className="hero-summary">{heroTagline}</p>

                        <div className="hero-buttons">
                            <a href="https://drive.google.com/file/d/1P00L9diQi9PuLQkMtKOjB54heEoneSln/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <FaDownload />
                                Download Resume
                            </a>
                            <button onClick={() => scrollTo("experience")} className="btn-outline">
                                <FaProjectDiagram />
                                View Experience
                            </button>
                            <button onClick={() => scrollTo("contact")} className="btn-outline">
                                <FaEnvelope />
                                Contact Me
                            </button>
                        </div>

                        <div className="hero-socials">
                            {[
                                { icon: <FaGithub />, link: github, label: "GitHub" },
                                { icon: <FaLinkedinIn />, link: linkedin, label: "LinkedIn" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-avatar-wrapper"
                    >
                        <div className="hero-avatar-container">
                            <div className="hero-avatar">
                                <img
                                    src="/yash-chalase.jpg"
                                    alt={name}
                                    width={320}
                                    height={320}
                                    fetchPriority="high"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <div className="hero-avatar-ring" />
                            <motion.div
                                animate={prefersReducedMotion ? false : { y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="hero-avatar-badge hero-avatar-badge-1"
                            >
                                React.js
                            </motion.div>
                            <motion.div
                                animate={prefersReducedMotion ? false : { y: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="hero-avatar-badge hero-avatar-badge-2"
                            >
                                Full-Stack
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={prefersReducedMotion ? false : { y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hero-scroll-indicator"
                aria-hidden="true"
            >
                <div className="hero-scroll-mouse">
                    <div className="hero-scroll-dot" />
                </div>
            </motion.div>
        </section>
    );
}
