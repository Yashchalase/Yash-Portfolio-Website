// Minimal monochrome browser chrome used for the hero composition and project shots.
export default function BrowserFrame({ url, className = "", children }) {
    return (
        <div className={`browser-frame ${className}`}>
            <div className="browser-bar" aria-hidden="true">
                <span className="browser-dots">
                    <i />
                    <i />
                    <i />
                </span>
                {url && <span className="browser-url">{url}</span>}
            </div>
            <div className="browser-body">{children}</div>
        </div>
    );
}
