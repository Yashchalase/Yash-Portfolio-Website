import { useEffect } from "react";

// Scroll-reveal for any element marked `data-reveal`. Driven by CSS so the
// prerendered HTML stays fully visible when JavaScript is unavailable.
export default function useReveal() {
    useEffect(() => {
        const targets = document.querySelectorAll("[data-reveal]");
        if (!("IntersectionObserver" in window)) {
            targets.forEach((el) => el.classList.add("is-in"));
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}
