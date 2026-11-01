import { FiMoon, FiSun } from "react-icons/fi";

// The initial theme is set by an inline script in index.html; both icons are
// rendered and CSS shows the right one, so prerendered markup always matches.
export default function ThemeToggle() {
    const toggle = () => {
        const root = document.documentElement;
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try {
            localStorage.setItem("theme", next);
        } catch {
            /* storage unavailable — theme still applies for this visit */
        }
    };

    return (
        <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
            <FiMoon className="theme-icon-moon" aria-hidden="true" />
            <FiSun className="theme-icon-sun" aria-hidden="true" />
        </button>
    );
}
