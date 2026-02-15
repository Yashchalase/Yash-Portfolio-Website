import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
    return (
        <div className="section-heading-wrapper">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-title"
            >
                <span className="gradient-text">{title}</span>
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="section-subtitle"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
