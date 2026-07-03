const resumeData = {
    personal: {
        name: "Yash Chalase",
        title: "Software Developer",
        location: "Mumbai, Maharashtra, India",
        phone: "+91 8468990468",
        email: "yashchalase@gmail.com",
        linkedin: "https://www.linkedin.com/in/yash-chalase-9a589b248/",
        github: "https://github.com/yashchalase",
        heroTagline:
            "Software developer passionate about building clean, scalable, and user-friendly web applications.",
        summary:
            "Software Developer with 1+ year of experience in full-stack web development, specializing in designing and building scalable web applications using React.js, Next.js, JavaScript, Node.js, SQL, and REST APIs. Hands-on experience developing AI-powered SaaS platforms, ERP systems, and client-focused web applications with a strong emphasis on clean code, performance optimization, and seamless user experiences.",
        highlights: [
            "Full-Stack Web Developer",
            "React.js & Next.js Specialist",
            "B.E. in Computer Engineering (CGPA: 8.44)",
            "Hackathon Winner (SIH-24)",
            "1+ Year of Professional Experience",
        ],
        roles: [
            "Full-Stack Developer",
            "Frontend Developer",
            "React.js Developer",
            "Software Developer",
        ],
    },

    education: [
        {
            institution: "University of Mumbai, Mumbai, India",
            degree: "Bachelor of Engineering in Computer Engineering",
            duration: "July 2022 – May 2026",
            grade: "CGPA: 8.44",
            icon: "graduation",
        },
        {
            institution: "Dhanaji Nana College, Jalgaon, Maharashtra",
            degree: "XII - HSC",
            duration: "July 2021 – June 2022",
            grade: "Percentage: 83.50%",
            icon: "school",
        },
        {
            institution: "KMC School, Jalgaon, Maharashtra",
            degree: "X - SSC",
            duration: "Feb 2019 – March 2020",
            grade: "Percentage: 89.80%",
            icon: "school",
        },
    ],

    skills: {
        "Programming Languages": [
            { name: "Java", icon: "FaJava" },
            { name: "JavaScript", icon: "SiJavascript" },
            { name: "TypeScript", icon: "SiTypescript" },
            { name: "Python", icon: "SiPython" },
            { name: "SQL", icon: "SiMysql" },
        ],
        "Technologies & Frameworks": [
            { name: "HTML5", icon: "SiHtml5" },
            { name: "CSS3", icon: "SiCss3" },
            { name: "React.js", icon: "SiReact" },
            { name: "Next.js", icon: "SiNextdotjs" },
            { name: "Node.js", icon: "SiNodedotjs" },
            { name: "Express.js", icon: "SiExpress" },
            { name: "REST APIs", icon: "FaNetworkWired" },
        ],
        Databases: [
            { name: "MongoDB", icon: "SiMongodb" },
            { name: "PostgreSQL", icon: "SiPostgresql" },
        ],
        Coursework: [
            { name: "DSA", icon: "FaCode" },
            { name: "OOP", icon: "FaCubes" },
            { name: "DBMS", icon: "FaDatabase" },
            { name: "Machine Learning", icon: "FaBrain" },
            { name: "Computer Networks", icon: "FaNetworkWired" },
        ],
        "Developer Tools": [
            { name: "Git", icon: "FaGitAlt" },
            { name: "GitHub", icon: "SiGithub" },
            { name: "Docker", icon: "SiDocker" },
            { name: "Postman", icon: "SiPostman" },
            { name: "VS Code", icon: "SiVisualstudiocode" },
            { name: "Cursor", icon: "FaMousePointer" },
            { name: "Antigravity", icon: "FaRocket" },
            { name: "Codex", icon: "SiOpenai" },
            { name: "Claude Code", icon: "SiAnthropic" },
        ],
    },

    experience: [
        {
            role: "Software Developer Trainee",
            company: "Essentient Software Services (Ayvik.ai)",
            location: "Navi Mumbai, Maharashtra",
            duration: "Dec 2025 – Present",
            responsibilities: [
                "Building scalable frontend applications using Next.js, React.js, TypeScript, JavaScript, and CSS, integrating REST APIs, and collaborating with a Python backend to deliver production-ready features.",
                "Led the frontend development of Vani, a Voice AI campaign management platform, building end-to-end responsive UI using Next.js and React.js, and integrating AI-driven workflows within a microservices-based architecture.",
                "Worked on ExporHub, developing export operations modules, dynamic dashboards, and workflows including customer inquiries, sales orders, user management, and role-based access control (RBAC).",
            ],
        },
        {
            role: "Software Developer Intern",
            company: "InstaPrepsAI",
            location: "Mumbai, Maharashtra",
            duration: "June 2025 – Nov 2025",
            responsibilities: [
                "Developed and deployed a responsive testimonial page for 7 Classes using React.js, with a focus on layout precision, reusable components, and user experience (UX), resulting in a 25% increase in user engagement.",
                "Optimized the test section UI using memoization and lazy loading, reducing page load time by 30% and improving overall performance and responsiveness.",
                "Integrated RESTful APIs to fetch and render real-time data across multiple modules, enabling dynamic UI updates and seamless frontend-backend communication.",
                "Collaborated with design, development, and QA teams in an Agile/Scrum environment to deliver features on schedule and resolve defects efficiently.",
            ],
        },
    ],

    projects: [
        {
            title: "Courier Tracking SaaS Platform",
            technologies: ["React.js", "CSS", "Node.js", "PostgreSQL"],
            date: "February 2026",
            highlight: "Real-time shipment tracking for courier companies and customers.",
            description:
                "A user-friendly courier tracking platform that helps courier companies manage shipments and allows customers to track packages in real time using a tracking ID.",
            features: [
                "Built a user-friendly Courier Tracking platform that helps courier companies manage shipments and allows customers to track packages in real time using Tracking ID.",
                "Focused mainly on frontend development by creating responsive, clean, and modern UI pages using React.js and CSS.",
                "Designed dashboards, tracking pages, and shipment status interfaces with a strong focus on user experience and website responsiveness.",
            ],
            image: "/projects/Courier.png",
            github: "https://github.com/yashchalase/courier-tracking-saas-platform",
            live: "https://courier-tracking-saas-platform-production-2c07.up.railway.app/",
            featured: true,
        },
        {
            title: "ExporHub - Export Management System",
            technologies: ["Next.js", "TypeScript", "Python", "PostgreSQL"],
            date: "December 2025",
            highlight:
                "Export management ERP with role-based access control and dynamic business dashboards.",
            description:
                "A frontend-heavy export operations management system to manage customer enquiries, sales orders, price lists, user management, and product masters.",
            features: [
                "Built modular, reusable, and scalable UI components using Next.js and TypeScript to support complex business workflows and dashboards.",
                "Integrated RESTful APIs with a Python backend and PostgreSQL, enabling full CRUD operations across all core modules.",
                "Implemented Role-Based Access Control (RBAC) and frontend validations to enforce secure access, data integrity, and controlled user permissions.",
            ],
            image: "/projects/exporthub.png",
            github: null,
            live: null,
            featured: true,
            private: true,
        },
        {
            title: "EduMe - Online Learning Platform",
            technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
            date: "January 2025",
            highlight: "100+ users with real-time quizzes and Firebase auth.",
            description:
                "A responsive, self-paced learning platform providing notes, sample papers, video lectures, and dynamic quiz and doubt-clearing modules with real-time scoring.",
            features: [
                "Built dynamic quiz and doubt-clearing modules with real-time scoring and expert-verified answers using Firebase Realtime Database.",
                "Implemented Firebase Authentication and session tracking for secure login, signup, and access for over 100+ users.",
            ],
            image: "/projects/edume.png",
            github: "https://github.com/yashchalase/EduMe",
            live: "https://edumeapp.netlify.app/",
        },
        {
            title: "Vani - Voice AI Campaign Management Platform",
            technologies: [
                "Next.js",
                "React.js",
                "TypeScript",
                "Tailwind CSS",
                "React Hook Form",
                "Zod",
            ],
            date: "December 2025 – Present",
            highlight:
                "Multi-tenant Voice AI platform for automated calling campaigns.",
            description:
                "A Voice AI campaign management platform that helps organizations run automated AI voice calling campaigns — create programs, upload contact lists, launch campaigns, and monitor transcripts, call status, duration, and follow-ups from a unified dashboard.",
            features: [
                "Built responsive admin and customer dashboards using Next.js, React, TypeScript, and Tailwind CSS with role-based routing, sidebar navigation, and multi-tenant data isolation per organization.",
                "Integrated JWT and OTP authentication flows and connected frontend API clients to auth, campaign, billing, and call microservices.",
                "Delivered campaign and program management UI, call history, follow-up tracking, and billing views with React Hook Form and Zod validation.",
                "Developed reusable UI components, state management patterns, and API integrations aligned with business workflows for admins (customers, orgs, billing, knowledge bases) and customer-side daily operations.",
            ],
            image: "/projects/Vani.png",
            github: null,
            live: null,
            featured: true,
            private: true,
        },
        {
            title: "Swyft Share - File-Sharing System",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
            date: "November 2024",
            highlight: "Full-stack file sharing with uploads up to 1 GB.",
            description:
                "A full-stack file-sharing system with a responsive React.js frontend and custom-designed interface, enabling secure and efficient file upload and distribution.",
            features: [
                "Built and scaled the backend using Node.js and Express.js, implementing real-time upload and download tracking for files up to 1 GB.",
                "Integrated secure SMTP-based email sharing and managed environment variables to protect sensitive application data.",
            ],
            image: "/projects/swyftshare.png",
            github: "https://github.com/yashchalase/Swyftshare",
            live: "https://swyft-share-web.netlify.app/",
        },
        {
            title: "Penta Freight - Website Clone",
            technologies: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
            date: "March 2026",
            highlight: "UI replication exercise with scroll animations.",
            description:
                "A frontend clone of the Penta Freight website built to practice UI replication, component structuring, and scroll-based animations across multiple pages.",
            features: [
                "Recreated the homepage, industries, and Pentakuhl pages with reusable components such as Navbar, Footer, Sidebar, and Cookie Banner.",
                "Implemented scroll-triggered animations using Framer Motion and built a fully responsive layout with Tailwind CSS.",
                "Improved on the original with SEO meta tags, image alt text, persistent cookie banner state, and accessible hover and focus states.",
            ],
            image: "/projects/pentaclone.png",
            github: "https://github.com/yashchalase/pentafreight-clone",
            live: "https://pentafreight-clone.vercel.app/",
        },
    ],

    certifications: [
        {
            title: "SIH-24 Internal Hackathon Winner",
            issuer: "Oct 2024, Mumbai",
            description:
                "Won for developing a web-based platform using HTML, CSS, and JavaScript to solve problems faced by retailers and sellers in the farming industry.",
            type: "achievement",
        },
        {
            title: "Software Developer Intern — 6 Months",
            issuer: "InstaPrepsAI (June 2025 – Nov 2025)",
            description:
                "Completed a 6-month software developer internship with hands-on experience in React.js, frontend optimization, RESTful API integration, and Agile development.",
            type: "certification",
        },
        {
            title: "Java Certification",
            issuer: "HackerRank (Jan 2025)",
            description:
                "Showcasing proficiency in OOP, algorithms, and problem-solving.",
            type: "certification",
        },
        {
            title: "JavaScript Certification",
            issuer: "KG Coding (Dec 2024)",
            description:
                "Hands-on training in JavaScript fundamentals, algorithms, and coding best practices.",
            type: "certification",
        },
    ],
};

export default resumeData;
