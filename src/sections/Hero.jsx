import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowDownRight, FiArrowDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import BrowserFrame from "../components/BrowserFrame";
import resumeData from "../data/resumeData";

const spring = { stiffness: 120, damping: 20, mass: 0.6 };

export default function Hero() {
    const { name, firstName, headline, intro, resume, whatsapp } = resumeData.personal;
    const [latest] = resumeData.experience;

    // Pointer position in the visual, normalised to -0.5…0.5, drives a gentle 3D tilt.
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [7, -7]), spring);
    const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [-6, 6]), spring);
    const backX = useSpring(useTransform(px, [-0.5, 0.5], [18, -18]), spring);
    const backY = useSpring(useTransform(py, [-0.5, 0.5], [12, -12]), spring);

    const handlePointerMove = (e) => {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - rect.left) / rect.width - 0.5);
        py.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handlePointerLeave = () => {
        px.set(0);
        py.set(0);
    };

    return (
        <section id="hero" className="hero" aria-labelledby="hero-title">
            <p className="hero-bg-type" aria-hidden="true">
                Chalase
            </p>

            <div className="container hero-grid">
                <div className="hero-copy">
                    <p className="hero-status hero-enter" style={{ "--d": "0ms" }}>
                        <span className="status-dot" aria-hidden="true" />
                        Available for opportunities
                    </p>

                    <h1 id="hero-title" className="hero-title">
                        <span className="hero-kicker hero-enter" style={{ "--d": "60ms" }}>
                            {name} — {headline}
                        </span>{" "}
                        <span className="hero-line">
                            <span className="hero-line-inner" style={{ "--d": "120ms" }}>
                                Hello,
                            </span>
                        </span>{" "}
                        <span className="hero-line">
                            <span className="hero-line-inner" style={{ "--d": "220ms" }}>
                                I&apos;m <em>{firstName}</em>
                            </span>
                        </span>
                    </h1>

                    <p className="hero-intro hero-enter" style={{ "--d": "380ms" }}>
                        {intro}
                    </p>

                    <div className="hero-actions hero-enter" style={{ "--d": "460ms" }}>
                        <a href="#projects" className="btn btn-solid">
                            View selected work <FiArrowDownRight aria-hidden="true" />
                        </a>
                        <a href={resume} className="btn btn-ghost" download>
                            Download resume <FiArrowDown aria-hidden="true" />
                        </a>
                        <a
                            href={whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                            aria-label="Chat with Yash on WhatsApp"
                        >
                            <FaWhatsapp aria-hidden="true" /> WhatsApp
                        </a>
                    </div>
                </div>

                <div
                    className="hero-visual hero-enter"
                    style={{ "--d": "300ms" }}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={handlePointerLeave}
                >
                    <m.div className="hero-stage" style={{ rotateX, rotateY }}>
                        <m.div className="hero-frame-back" style={{ x: backX, y: backY }}>
                            <BrowserFrame url="vani — campaign dashboard">
                                <img
                                    src="/projects/vani-800.webp"
                                    alt=""
                                    width={800}
                                    height={377}
                                    decoding="async"
                                />
                            </BrowserFrame>
                        </m.div>

                        <div className="hero-frame-front">
                            <BrowserFrame url="yash-chalase / portfolio">
                                <img
                                    src="/yash-chalase.webp"
                                    srcSet="/yash-chalase-480.webp 480w, /yash-chalase.webp 900w"
                                    sizes="(max-width: 900px) 62vw, 30vw"
                                    alt="Portrait of Yash Chalase, Full Stack Developer"
                                    width={900}
                                    height={814}
                                    fetchPriority="high"
                                />
                            </BrowserFrame>
                        </div>

                        <span className="hero-tag hero-tag-1">React.js · Next.js</span>
                        <span className="hero-tag hero-tag-2">TypeScript · Node.js</span>
                    </m.div>
                </div>
            </div>

            <div className="container hero-foot hero-enter" style={{ "--d": "560ms" }}>
                <p>
                    <span className="hero-foot-label">Recently</span>
                    {latest.role}, {latest.company.replace(/ \(.*\)/, "")}
                </p>
                <p>
                    <span className="hero-foot-label">Focus</span>
                    React.js · Next.js · Node.js · TypeScript
                </p>
                <a href="#about" className="hero-scroll">
                    Scroll <FiArrowDown aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
