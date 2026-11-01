import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

export default function Skills() {
    const { skills } = resumeData;

    return (
        <section id="skills" className="section skills" aria-labelledby="skills-title">
            <div className="container">
                <SectionHeading index="04" label="Capabilities" title="Skills & stack" titleId="skills-title">
                    Filled dots mark my core stack.
                </SectionHeading>

                <div className="skills-grid">
                    {skills.map((group, gi) => (
                        <div key={group.category} className="skills-col" data-reveal style={{ "--d": `${gi * 70}ms` }}>
                            <h3 className="skills-heading">
                                <span className="skills-count">{String(group.items.length).padStart(2, "0")}</span>
                                {group.category}
                            </h3>
                            <ul className="skills-list">
                                {group.items.map((skill) => (
                                    <li key={skill.name} className={skill.core ? "is-core" : undefined}>
                                        <span className="skills-dot" aria-hidden="true" />
                                        {skill.name}
                                        {skill.core && <span className="sr-only"> (core skill)</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
