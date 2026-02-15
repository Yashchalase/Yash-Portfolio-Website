import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaStar } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

const educationIcons = {
    graduation: FaGraduationCap,
    school: FaSchool,
};

export default function Education() {
    const { education } = resumeData;

    return (
        <section id="education" className="education">
            <div className="education-bg" />
            <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
                <SectionHeading
                    title="Education"
                    subtitle="My academic journey and qualifications."
                />

                <div className="education-list">
                    {education.map((edu, i) => {
                        const IconComponent = educationIcons[edu.icon] || FaGraduationCap;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="glass-card education-card"
                            >
                                <div className="education-icon-box">
                                    <IconComponent />
                                </div>

                                <div className="education-content">
                                    <div className="education-header">
                                        <div>
                                            <h3 className="education-degree">{edu.degree}</h3>
                                            <p className="education-institution">{edu.institution}</p>
                                        </div>
                                        <span className="education-duration">{edu.duration}</span>
                                    </div>
                                    <div className="education-grade">
                                        <FaStar className="education-grade-star" />
                                        <span className="education-grade-text">{edu.grade}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
