import { motion } from "framer-motion";
import {
    FaJava,
    FaCode,
    FaCubes,
    FaDatabase,
    FaBrain,
    FaNetworkWired,
    FaLaptopCode,
    FaGitAlt,
    FaMousePointer,
    FaRocket,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiGithub,
    SiPostman,
    SiDocker,
    SiOpenai,
    SiAnthropic,
} from "react-icons/si";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

const iconMap = {
    FaJava: FaJava,
    SiJavascript: SiJavascript,
    SiTypescript: SiTypescript,
    SiPython: SiPython,
    SiMysql: SiMysql,
    SiHtml5: SiHtml5,
    SiCss3: SiCss3,
    SiReact: SiReact,
    SiNextdotjs: SiNextdotjs,
    SiNodedotjs: SiNodedotjs,
    SiExpress: SiExpress,
    SiMongodb: SiMongodb,
    SiPostgresql: SiPostgresql,
    FaCode: FaCode,
    FaCubes: FaCubes,
    FaDatabase: FaDatabase,
    FaBrain: FaBrain,
    FaNetworkWired: FaNetworkWired,
    SiVisualstudiocode: FaLaptopCode,
    SiGithub: SiGithub,
    SiPostman: SiPostman,
    FaGitAlt: FaGitAlt,
    SiDocker: SiDocker,
    FaMousePointer: FaMousePointer,
    FaRocket: FaRocket,
    SiOpenai: SiOpenai,
    SiAnthropic: SiAnthropic,
};

const categoryColors = {
    "Programming Languages": { bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.3)", icon: "#eab308" },
    "Technologies & Frameworks": { bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.3)", icon: "#818cf8" },
    Databases: { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", icon: "#10b981" },
    Coursework: { bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.3)", icon: "#f43f5e" },
    "Developer Tools": { bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.3)", icon: "#06b6d4" },
};

export default function Skills() {
    const { skills } = resumeData;

    return (
        <section id="skills" className="skills">
            <div className="skills-bg" />
            <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
                <SectionHeading
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with to build modern web applications."
                />

                <div className="skills-categories">
                    {Object.entries(skills).map(([category, skillList], catIdx) => {
                        const colors = categoryColors[category] || categoryColors["Coursework"];
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            >
                                <h3 className="skills-category-title">
                                    <span
                                        className="skills-category-dot"
                                        style={{ background: colors.icon }}
                                    />
                                    <span>{category}</span>
                                </h3>
                                <div className="skills-list">
                                    {skillList.map((skill, i) => {
                                        const IconComponent = iconMap[skill.icon];
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.03 * i }}
                                                whileHover={{ scale: 1.05 }}
                                                className="skill-badge"
                                                style={{
                                                    background: colors.bg,
                                                    borderColor: colors.border,
                                                }}
                                            >
                                                {IconComponent && (
                                                    <IconComponent
                                                        className="icon"
                                                        style={{ color: colors.icon }}
                                                    />
                                                )}
                                                <span>{skill.name}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
