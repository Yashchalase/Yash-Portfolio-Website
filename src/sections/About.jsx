import SectionHeading from "../components/SectionHeading";
import resumeData from "../data/resumeData";

const marqueeItems = ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Python", "Docker", "n8n"];

const services = [
    {
        title: "Frontend",
        text: "Responsive, production-ready interfaces and dashboards in React.js, Next.js and TypeScript.",
    },
    {
        title: "Backend & APIs",
        text: "REST APIs with Node.js, Express.js and Python, backed by PostgreSQL, MongoDB and Supabase.",
    },
    {
        title: "Tools & workflow",
        text: "Docker-based environments, Git workflows, and n8n and Claude Code for automation and speed.",
    },
];

export default function About() {
    const { city } = resumeData.personal;
    const [degree] = resumeData.education;

    const facts = [
        { label: "Based in", value: `${city}, India` },
        { label: "Role", value: "Full Stack Developer" },
        { label: "Education", value: `B.E. Computer Engineering — CGPA ${degree.grade}` },
        { label: "Experience", value: "1.5+ years" },
    ];

    return (
        <>
            <div className="marquee" aria-hidden="true">
                <div className="marquee-track">
                    {[0, 1].map((copy) => (
                        <span className="marquee-group" key={copy}>
                            {marqueeItems.map((item) => (
                                <span key={item} className="marquee-item">
                                    {item}
                                    <span className="marquee-sep">✦</span>
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>

            <section id="about" className="section about" aria-labelledby="about-title">
                <div className="container">
                    <SectionHeading index="01" label="Introduction" title="About me" titleId="about-title" />

                    <div className="about-grid">
                        <p className="about-statement" data-reveal>
                            I&apos;m a Full Stack Developer with 1.5+ years of experience building{" "}
                            <em>scalable web applications.</em>
                            <span className="muted">
                                {" "}I work on AI-powered products, enterprise solutions, and client projects,
                                turning ideas and business requirements into real-world digital products.
                            </span>
                        </p>

                        <div className="about-side">
                            <dl className="about-facts">
                                {facts.map((fact, i) => (
                                    <div className="about-fact" key={fact.label} data-reveal style={{ "--d": `${i * 60}ms` }}>
                                        <dt>{fact.label}</dt>
                                        <dd>{fact.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <ul className="about-services">
                            {services.map((service, i) => (
                                <li key={service.title} className="about-service" data-reveal style={{ "--d": `${i * 80}ms` }}>
                                    <span className="about-service-index">0{i + 1}</span>
                                    <h3 className="about-service-title">{service.title}</h3>
                                    <p className="about-service-text">{service.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
