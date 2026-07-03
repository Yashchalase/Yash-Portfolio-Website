import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaUser,
    FaCode,
    FaProjectDiagram,
    FaBriefcase,
    FaGraduationCap,
    FaAward,
    FaEnvelope,
} from "react-icons/fa";
import resumeData from "../data/resumeData";

const navItems = [
    { id: "hero", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "certifications", label: "Achievements", icon: <FaAward /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navItems.map((item) => item.id);
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
            >
                <div className="navbar-inner">
                    <button onClick={() => scrollTo("hero")} className="navbar-logo">
                        <span className="gradient-text">
                            {resumeData.personal.name.split(" ")[0]}
                        </span>
                        <span className="navbar-logo-dot">.</span>
                    </button>

                    <div className="navbar-links">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`navbar-link ${activeSection === item.id ? "navbar-link-active" : ""}`}
                            >
                                <span className="navbar-link-icon">{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="navbar-hamburger"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mobile-overlay"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            exit={{ x: 300 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="mobile-menu"
                        >
                            <div className="mobile-menu-items">
                                {navItems.map((item, i) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => scrollTo(item.id)}
                                        className={`mobile-menu-link ${activeSection === item.id ? "mobile-menu-link-active" : ""}`}
                                    >
                                        <span className="mobile-menu-link-icon">{item.icon}</span>
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
