import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from "react-icons/fa";
import resumeData from "../data/resumeData";

export default function Footer() {
    const { name, email, github, linkedin } = resumeData.personal;
    const currentYear = new Date().getFullYear();

    const navItems = [
        "About",
        "Skills",
        "Projects",
        "Experience",
        "Education",
        "Contact",
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: github, label: "GitHub" },
        { icon: <FaLinkedinIn />, href: linkedin, label: "LinkedIn" },
        { icon: <FaEnvelope />, href: `mailto:${email}`, label: "Email" },
    ];

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">
                            <span className="gradient-text">{name.split(" ")[0]}</span>
                            <span className="navbar-logo-dot">.</span>
                        </h3>
                        <p className="footer-tagline">
                            Building the web, one pixel at a time.
                        </p>
                    </div>

                    <div className="footer-nav">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item)}
                                className="footer-nav-link"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="footer-socials">
                        {socialLinks.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-icon"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} {name}. Made with{" "}
                        <FaHeart className="footer-heart" /> using React.
                    </p>
                </div>
            </div>
        </footer>
    );
}
