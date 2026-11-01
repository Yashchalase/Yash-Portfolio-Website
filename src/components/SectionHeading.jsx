// Editorial section header: index + label on the left, oversized title on the right.
export default function SectionHeading({ index, label, title, titleId, children }) {
    return (
        <div className="section-heading">
            <p className="section-label" data-reveal>
                <span className="section-index">({index})</span>
                {label}
            </p>
            <div className="section-heading-main">
                <h2 id={titleId} className="section-title" data-reveal>
                    {title}
                </h2>
                {children && (
                    <p className="section-intro" data-reveal style={{ "--d": "80ms" }}>
                        {children}
                    </p>
                )}
            </div>
        </div>
    );
}
