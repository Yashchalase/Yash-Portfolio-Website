// Single source of content for the portfolio. Mirrors the latest resume
// (public/Yash_Chalase_Resume.pdf, October 2026) — keep the two in sync.
const resumeData = {
    personal: {
        name: "Yash Chalase",
        firstName: "Yash",
        title: "Full Stack Developer",
        headline: "Full Stack Developer",
        location: "Mumbai, Maharashtra, India",
        city: "Mumbai",
        phone: "+91 8468990468",
        email: "yashchalase@gmail.com",
        whatsapp:
            "https://wa.me/918468990468?text=" +
            encodeURIComponent("Hi Yash, I came across your portfolio and would like to connect about an opportunity."),
        linkedin: "https://www.linkedin.com/in/yash-chalase-9a589b248/",
        github: "https://github.com/yashchalase",
        resume: "/Yash_Chalase_Resume.pdf",
        resumeUpdated: "October 2026",
        intro:
            "I build fast, scalable web apps end to end — from clean interfaces to reliable APIs and databases.",
        summary:
            "Full-Stack Developer with hands-on experience building scalable and production-ready web applications, including AI-powered SaaS platforms and ERP systems. Proficient in React.js, Next.js, JavaScript, TypeScript, Node.js and Python, and experienced with Docker, n8n, Git and Claude. Skilled in understanding client requirements, translating business needs into technical solutions, and delivering product features that drive business value and revenue.",
    },

    experience: [
        {
            role: "Software Developer",
            company: "Essentient Software Services (Ayvik.ai)",
            location: "Navi Mumbai, Maharashtra",
            duration: "Dec 2025 – Oct 2026",
            responsibilities: [
                "Developed production-ready web applications using Next.js, React.js, TypeScript and JavaScript, integrating REST APIs with a Python backend.",
                "Led frontend development of Vani, a Voice AI campaign platform, building 10+ responsive screens in Next.js/TypeScript and integrating REST APIs across a microservices backend.",
                "Worked on ExporHub, developing export operations modules, dynamic dashboards, and workflows including customer inquiries, sales orders, user management, and role-based access control (RBAC).",
            ],
        },
        {
            role: "Software Developer Intern",
            company: "InstaPrepsAI",
            location: "Mumbai, Maharashtra",
            duration: "Jun 2025 – Nov 2025",
            responsibilities: [
                "Developed a responsive testimonial page for 7 Classes using React.js and Node.js, focusing on clean UI, user experience, and SEO-friendly design.",
                "Enhanced the test section UI, improved website responsiveness and performance, and managed Git repositories and Docker-based development environments.",
            ],
        },
    ],

    // Display order is the array order. `imageWidth` is the full-size width of
    // `image`; a `-800.webp` variant sits beside each screenshot for small screens.
    projects: [
        {
            title: "EduMe — Online Learning Platform",
            shortTitle: "EduMe",
            category: "EdTech",
            technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
            date: "Jan 2025",
            description:
                "A responsive, self-paced learning platform with notes, sample papers, video lectures, and quiz and doubt-clearing modules with real-time scoring.",
            features: [
                "Built dynamic quiz and doubt-clearing modules with real-time scoring using Firebase Realtime Database.",
                "Implemented Firebase Authentication and session tracking for secure login and signup for 100+ users.",
            ],
            image: "/projects/edume.webp",
            imageWidth: 1200,
            github: "https://github.com/yashchalase/EduMe",
            live: "https://edumeapp.netlify.app/",
        },
        {
            title: "Penta Freight — Website Clone",
            shortTitle: "Penta Freight",
            category: "UI replication",
            technologies: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
            date: "Mar 2026",
            description:
                "A frontend clone of the Penta Freight website, built to practice UI replication, component structure, and scroll-based animation.",
            features: [
                "Recreated the homepage, industries, and Pentakuhl pages with reusable Navbar, Footer, Sidebar, and Cookie Banner components.",
                "Implemented scroll-triggered animations with Framer Motion and a fully responsive layout with Tailwind CSS.",
            ],
            image: "/projects/pentafreight.webp",
            imageWidth: 1200,
            github: "https://github.com/yashchalase/pentafreight-clone",
            live: "https://pentafreight-clone.vercel.app/",
        },
        {
            title: "Vani — Voice AI Campaign Platform",
            shortTitle: "Vani",
            category: "Voice AI · SaaS",
            technologies: ["Next.js", "TypeScript", "REST APIs", "Microservices"],
            date: "Essentient · 2026",
            description:
                "A Voice AI campaign platform for running automated AI calling campaigns. I led its frontend development.",
            features: [
                "Built 10+ responsive screens in Next.js and TypeScript.",
                "Integrated REST APIs across a microservices backend.",
            ],
            image: "/projects/vani.webp",
            imageWidth: 1600,
            github: null,
            live: null,
            private: true,
        },
        {
            title: "Courier Tracking SaaS Platform",
            shortTitle: "Courier Tracking",
            category: "SaaS · Logistics",
            technologies: ["React.js", "CSS", "Node.js", "PostgreSQL (Supabase)"],
            date: "Feb 2026",
            description:
                "A courier tracking platform that helps courier companies manage shipments and lets customers track packages in real time using a tracking ID.",
            features: [
                "Focused mainly on frontend development — responsive, clean, and modern UI pages built with React.js and CSS.",
                "Designed dashboards, tracking pages, and shipment status interfaces with a strong focus on user experience and responsiveness.",
            ],
            image: "/projects/courier.webp",
            imageWidth: 1600,
            github: "https://github.com/yashchalase/courier-tracking-saas-platform",
            live: "https://courier-tracking-saas-platform-production-2c07.up.railway.app/",
        },
        {
            title: "ExporHub — Export Management System",
            shortTitle: "ExporHub",
            category: "ERP · Export operations",
            technologies: ["Next.js", "TypeScript", "Python", "PostgreSQL"],
            date: "Dec 2025",
            description:
                "A frontend-focused export operations system to manage customer enquiries, sales orders, price lists, user management, and product masters.",
            features: [
                "Developed the modules using Next.js and TypeScript.",
                "Integrated RESTful APIs with a Python backend and PostgreSQL, enabling full CRUD operations, role-based access control (RBAC), and secure data validation across modules.",
            ],
            image: "/projects/exporhub.webp",
            imageWidth: 1600,
            github: null,
            live: null,
            private: true,
        },
        {
            title: "WeaveDeskAI — Textile CRM & Order Management",
            shortTitle: "WeaveDeskAI",
            category: "AI · CRM",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
            date: "Aug 2026",
            description:
                "An AI-powered CRM that converts WhatsApp and email inquiries into structured tickets, reducing manual data entry for the sales team.",
            features: [
                "Implemented AI-based fabric specification decoding.",
                "Built bulk uploads plus customer, employee, and order management modules.",
            ],
            image: null,
            github: null,
            live: null,
            private: true,
        },
        {
            title: "Swyft Share — File-Sharing System",
            shortTitle: "Swyft Share",
            category: "Full stack · Files",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
            date: "Nov 2024",
            description:
                "A full-stack file-sharing system with a custom React.js interface for secure, efficient file upload and distribution.",
            features: [
                "Built the Node.js and Express.js backend with real-time upload and download tracking for files up to 1 GB.",
                "Integrated SMTP-based email sharing and kept sensitive configuration in environment variables.",
            ],
            image: "/projects/swyftshare.webp",
            imageWidth: 1200,
            github: "https://github.com/yashchalase/Swyftshare",
            live: "https://swyft-share-web.netlify.app/",
        },
    ],

    // `core` marks the primary stack highlighted across the site.
    skills: [
        {
            category: "Languages",
            items: [
                { name: "JavaScript", core: true },
                { name: "TypeScript", core: true },
                { name: "Java" },
                { name: "Python" },
                { name: "SQL" },
            ],
        },
        {
            category: "Frontend",
            items: [
                { name: "React.js", core: true },
                { name: "Next.js", core: true },
                { name: "React Native" },
                { name: "HTML5" },
                { name: "CSS3" },
            ],
        },
        {
            category: "Backend & Databases",
            items: [
                { name: "Node.js", core: true },
                { name: "Express.js" },
                { name: "REST APIs" },
                { name: "Microservices" },
                { name: "PostgreSQL" },
                { name: "MongoDB" },
                { name: "Supabase" },
            ],
        },
        {
            category: "Tools & AI",
            items: [
                { name: "Git" },
                { name: "GitHub" },
                { name: "Docker" },
                { name: "n8n" },
                { name: "Claude Code" },
                { name: "Cursor" },
                { name: "Web js" },
            ],
        },
    ],

    education: [
        {
            institution: "University of Mumbai",
            place: "Mumbai",
            degree: "Bachelor of Engineering in Computer Engineering",
            duration: "July 2022 – May 2026",
            gradeLabel: "CGPA",
            grade: "8.44",
        },
        {
            institution: "Dhanaji Nana Jr. College",
            place: "Jalgaon",
            degree: "XII — HSC",
            duration: "July 2021 – Jun 2022",
            gradeLabel: "Percentage",
            grade: "83.5",
        },
    ],

    achievements: [
        {
            title: "Winner — SIH-24 Internal Hackathon",
            date: "Oct 2024",
            detail: "Mumbai. Built a web-based solution using HTML, CSS, and JavaScript.",
        },
        {
            title: "Java Certification",
            date: "Jan 2025",
            detail: "HackerRank. Strong OOP and problem-solving skills.",
        },
        {
            title: "JavaScript Certification",
            date: "Dec 2024",
            detail: "KG Coding. Hands-on experience in core concepts and best practices.",
        },
    ],
};

export default resumeData;
