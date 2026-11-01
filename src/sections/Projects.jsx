import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLock, FiPlus } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import BrowserFrame from "../components/BrowserFrame";
import resumeData from "../data/resumeData";

const isValidLink = (url) => url && url !== "#";
const hostOf = (url) => new URL(url).hostname.replace(/^www\./, "");
const slugOf = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Subtle pointer-driven tilt, written to CSS variables so no re-renders occur.
const tilt = {
    onPointerMove(e) {
        if (e.pointerType !== "mouse") return;
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--ry", `${((e.clientX - rect.left) / rect.width - 0.5) * 6}deg`);
        el.style.setProperty("--rx", `${((e.clientY - rect.top) / rect.height - 0.5) * -6}deg`);
    },
    onPointerLeave(e) {
        e.currentTarget.style.setProperty("--ry", "0deg");
        e.currentTarget.style.setProperty("--rx", "0deg");
    },
};

function ProjectCard({ project, index }) {
    const [open, setOpen] = useState(false);
    const hasLive = isValidLink(project.live);
    const hasGithub = isValidLink(project.github);
    const featuresId = `features-${slugOf(project.shortTitle)}`;

    const frame = (
        <BrowserFrame url={hasLive ? hostOf(project.live) : `${slugOf(project.shortTitle)} — private`}>
            {project.image ? (
                <img
                    src={project.image}
                    srcSet={`${project.image.replace(".webp", "-800.webp")} 800w, ${project.image} ${project.imageWidth}w`}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    alt={`${project.title} — interface screenshot`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                />
            ) : (
                <div className="project-placeholder" role="img" aria-label={`${project.shortTitle} — private project, no public screenshot`}>
                    <span className="project-placeholder-name">{project.shortTitle}</span>
                    <span className="project-placeholder-note">{project.category} — private build</span>
                </div>
            )}
        </BrowserFrame>
    );

    return (
        <article className="project" data-reveal>
            <div className="project-media" {...tilt}>
                {hasLive ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.shortTitle} live site`} tabIndex={-1}>
                        {frame}
                        <span className="project-cursor" aria-hidden="true">
                            Visit <FiArrowUpRight />
                        </span>
                    </a>
                ) : (
                    frame
                )}
            </div>

            <div className="project-info">
                <p className="project-meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.category}</span>
                    <span>{project.date}</span>
                </p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-stack">
                    <span className="sr-only">Built with: </span>
                    {project.technologies.join(" / ")}
                </p>

                <button
                    type="button"
                    className={`project-toggle ${open ? "is-open" : ""}`}
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls={featuresId}
                >
                    <FiPlus aria-hidden="true" /> {open ? "Hide details" : "Key contributions"}
                </button>
                <AnimatePresence initial={false}>
                    {open && (
                        <m.ul
                            id={featuresId}
                            className="project-features"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </m.ul>
                    )}
                </AnimatePresence>

                <div className="project-links">
                    {hasLive && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
                            Live site <FiArrowUpRight aria-hidden="true" />
                        </a>
                    )}
                    {hasGithub && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                            <FiGithub aria-hidden="true" /> Source
                        </a>
                    )}
                    {project.private && (
                        <span className="project-private">
                            <FiLock aria-hidden="true" /> Private — code not public
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    const { projects, personal } = resumeData;

    return (
        <section id="projects" className="section projects" aria-labelledby="projects-title">
            <div className="container">
                <SectionHeading index="03" label="Selected work" title="Projects" titleId="projects-title" />

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>

                <p className="projects-more" data-reveal>
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        All repositories on GitHub <FiArrowUpRight aria-hidden="true" />
                    </a>
                </p>
            </div>
        </section>
    );
}
