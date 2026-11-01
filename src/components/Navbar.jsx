import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import resumeData from "../data/resumeData";
import { navItems } from "../data/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        // A sentinel at the top of the page reports reliably even when the
        // browser restores a deep-link (#contact) position without scroll events.
        const topObserver = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
        const sentinel = document.querySelector(".nav-sentinel");
        if (sentinel) topObserver.observe(sentinel);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        ["hero", ...navItems.map((item) => item.id), "resume"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            topObserver.disconnect();
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        if (!mobileOpen) return;
        const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [mobileOpen]);

    return (
        <>
            <div className="nav-sentinel" aria-hidden="true" />
            <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <nav className="navbar-inner" aria-label="Primary">
                    <a href="#hero" className="navbar-logo" onClick={() => setMobileOpen(false)}>
                        {resumeData.personal.name}
                        <span className="navbar-logo-mark" aria-hidden="true">©26</span>
                    </a>

                    <ul className="navbar-links">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`navbar-link ${activeSection === item.id ? "is-active" : ""}`}
                                    aria-current={activeSection === item.id ? "true" : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-actions">
                        <ThemeToggle />
                        <a href="#resume" className="navbar-cta">
                            Resume <FiArrowDownRight aria-hidden="true" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileOpen((open) => !open)}
                            className={`navbar-menu-btn ${mobileOpen ? "is-open" : ""}`}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-menu"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            <span />
                            <span />
                        </button>
                    </div>
                </nav>

                <AnimatePresence>
                    {mobileOpen && (
                        <m.div
                            id="mobile-menu"
                            className="mobile-menu"
                            initial={{ clipPath: "inset(0 0 100% 0)" }}
                            animate={{ clipPath: "inset(0 0 0% 0)" }}
                            exit={{ clipPath: "inset(0 0 100% 0)" }}
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <ul>
                                {[...navItems, { id: "resume", label: "Resume" }].map((item, i) => (
                                    <m.li
                                        key={item.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                                    >
                                        <a href={`#${item.id}`} onClick={() => setMobileOpen(false)}>
                                            <span className="mobile-menu-index">0{i + 1}</span>
                                            {item.label}
                                        </a>
                                    </m.li>
                                ))}
                            </ul>
                            <div className="mobile-menu-foot">
                                <a href={`mailto:${resumeData.personal.email}`}>{resumeData.personal.email}</a>
                                <span>{resumeData.personal.city}, IN</span>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
