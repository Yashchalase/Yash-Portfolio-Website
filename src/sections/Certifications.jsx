import { motion } from "framer-motion";
import { FaTrophy, FaCertificate } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

export default function Certifications() {
    const { certifications } = resumeData;

    return (
        <section id="certifications" className="certifications">
            <div className="certifications-bg" />
            <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
                <SectionHeading
                    title="Certifications & Achievements"
                    subtitle="Recognition and credentials that highlight my growth."
                />

                <div className="certifications-list">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card cert-card"
                        >
                            <div
                                className={`cert-icon-box ${cert.type === "achievement"
                                        ? "cert-icon-achievement"
                                        : "cert-icon-certification"
                                    }`}
                            >
                                {cert.type === "achievement" ? <FaTrophy /> : <FaCertificate />}
                            </div>

                            <div className="cert-content">
                                <div className="cert-header">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <span
                                        className={`cert-type-badge ${cert.type === "achievement"
                                                ? "cert-type-achievement"
                                                : "cert-type-certification"
                                            }`}
                                    >
                                        {cert.type === "achievement"
                                            ? "🏆 Achievement"
                                            : "📜 Certification"}
                                    </span>
                                </div>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-description">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
