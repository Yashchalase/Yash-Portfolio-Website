import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import resumeData from "../data/resumeData";

export default function Resume() {
    const { resume, resumeUpdated } = resumeData.personal;
    const contents = ["Profile", "Experience", "Projects", "Skills", "Education", "Certifications"];

    return (
        <section id="resume" className="resume" aria-labelledby="resume-title">
            <div className="container resume-inner">
                <p className="section-label" data-reveal>
                    <span className="section-index">(06)</span>
                    Resume
                </p>

                <h2 id="resume-title" className="resume-title" data-reveal>
                    The one-page <em>version.</em>
                </h2>

                <div className="resume-body" data-reveal>
                    <p className="resume-text">
                        Everything on this site, condensed into a single PDF — updated {resumeUpdated}.
                    </p>
                    <ul className="resume-contents" aria-label="Resume sections">
                        {contents.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="resume-actions">
                        <a href={resume} download className="btn btn-inverse">
                            Download PDF <FiArrowDown aria-hidden="true" />
                        </a>
                        <a href={resume} target="_blank" rel="noopener" className="btn btn-inverse-ghost">
                            View online <FiArrowUpRight aria-hidden="true" />
                        </a>
                    </div>
                    <p className="resume-file">{resume.split("/").pop()} · PDF · 1 page</p>
                </div>
            </div>
        </section>
    );
}
