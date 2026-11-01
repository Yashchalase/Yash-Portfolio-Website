import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { navItems } from "../data/navigation";
import resumeData from "../data/resumeData";

export default function Footer() {
    const { name, email, phone, github, linkedin, headline } = resumeData.personal;
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FiGithub />, href: github, label: "GitHub" },
        { icon: <FiLinkedin />, href: linkedin, label: "LinkedIn" },
        { icon: <FiMail />, href: `mailto:${email}`, label: "Email" },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <address className="footer-tagline">
                        <span className="footer-tagline-name">
                            {name} — {headline}
                        </span>
                        <span>Mumbai, India</span>
                        <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone.replace(/\s/g, "")}</a>
                    </address>
                    <nav aria-label="Footer">
                        <ul className="footer-nav">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ul className="footer-socials">
                        {socialLinks.map((social) => (
                            <li key={social.label}>
                                <a
                                    href={social.href}
                                    {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer me" } : {})}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="footer-wordmark" aria-hidden="true">
                    {name}
                </p>

                <div className="footer-bottom">
                    <p>© {currentYear} {name}. All rights reserved.</p>
                    <a href="#hero" className="footer-top-link">
                        Back to top <FiArrowUp aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
