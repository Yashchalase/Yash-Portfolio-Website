import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

export default function Education() {
    const { education, achievements } = resumeData;

    return (
        <section id="education" className="section education" aria-labelledby="education-title">
            <div className="container">
                <SectionHeading index="05" label="Background" title="Education" titleId="education-title" />

                <div className="education-grid">
                    <ol className="education-list">
                        {education.map((item, i) => (
                            <li key={item.institution} className="education-item" data-reveal style={{ "--d": `${i * 80}ms` }}>
                                <p className="education-grade">
                                    {item.grade}
                                    <span>{item.gradeLabel}</span>
                                </p>
                                <div>
                                    <h3 className="education-degree">{item.degree}</h3>
                                    <p className="education-school">
                                        {item.institution}, {item.place}
                                    </p>
                                    <p className="education-date">{item.duration}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div id="achievements" className="achievements" data-reveal>
                        <h3 className="achievements-title">Certifications &amp; achievements</h3>
                        <ul>
                            {achievements.map((item) => (
                                <li key={item.title} className="achievement">
                                    <span className="achievement-date">{item.date}</span>
                                    <div>
                                        <p className="achievement-name">{item.title}</p>
                                        <p className="achievement-detail">{item.detail}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
