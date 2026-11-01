import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

export default function Experience() {
    const { experience } = resumeData;

    return (
        <section id="experience" className="section experience" aria-labelledby="experience-title">
            <div className="container">
                <SectionHeading index="02" label="Experience" title="Where I've worked" titleId="experience-title" />

                <ol className="experience-list">
                    {experience.map((exp, i) => (
                        <li key={exp.company} className="experience-item" data-reveal style={{ "--d": `${i * 80}ms` }}>
                            <div className="experience-meta">
                                <span className="experience-index">0{i + 1}</span>
                                <span>{exp.duration}</span>
                                <span className="muted">{exp.location}</span>
                            </div>
                            <div className="experience-head">
                                <h3 className="experience-role">{exp.role}</h3>
                                <p className="experience-company">{exp.company}</p>
                            </div>
                            <ul className="experience-points">
                                {exp.responsibilities.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
