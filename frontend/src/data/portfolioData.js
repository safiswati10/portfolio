// ===== SAFI UR REHMAN - PORTFOLIO DATA =====
// Yahan apni real information update karo

export const personalInfo = {
  name: "Safi ur Rehman",
  title: "Front End Developer",
  subtitle: "React.js | JavaScript | UI/UX",
  email: "safiswati10@gmail.com",
  phone: "+923185880009",
  location: "Abbottabad, KPK, Pakistan",
  bio: "Front End Developer with hands-on experience building responsive, user-focused web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS. Skilled in translating UI/UX designs into intuitive interfaces, integrating RESTful APIs, and optimizing performance across devices.",
  profileImage: "/images/profile.jpg", // Apni real photo yahan rakh do
  resumeLink: "#",
  social: {
    github: "https://github.com/safiurrehman",
    linkedin: "https://linkedin.com/in/safiurrehman",
    email: "mailto:safiswati10@gmail.com"
  }
};

export const education = [
  {
    degree: "BSc Software Engineering",
    institution: "Abbottabad University of Science and Technology",
    location: "Abbottabad, KPK",
    period: "Sept 2020 – Sept 2024",
    gpa: "3.05",
    icon: "🎓"
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Modernage Public School and College",
    location: "Abbottabad, KPK",
    period: "Sept 2018 – Sept 2020",
    icon: "📚"
  },
  {
    degree: "Matric Pre-Engineering",
    institution: "Modernage Public School and College",
    location: "Abbottabad, KPK",
    period: "Sept 2016 – Sept 2018",
    icon: "🏫"
  }
];

export const experience = [
  {
    role: "Front End Developer",
    company: "AUXWORK",
    location: "Abbottabad, Pakistan",
    period: "Jan 2025 – Dec 2025",
    type: "Full Time",
    color: "#00d4ff",
    points: [
      "Developed and maintained responsive UI components for multiple e-commerce websites, focusing on product pages, cart interfaces, and user interaction flow.",
      "Contributed to successful delivery of client-facing projects, improving load times, usability, and user engagement.",
      "Worked in an agile environment, managing tasks and updates using Git to ensure timely delivery."
    ]
  },
  {
    role: "Front End Developer",
    company: "GLOBAL FINANCIAL MEDIA",
    location: "Islamabad, Pakistan",
    period: "Aug 2024 – Sep 2024",
    type: "Internship",
    color: "#7c3aed",
    points: [
      "Implemented UI/UX enhancements, ensuring functionality and responsiveness across various platforms.",
      "Worked closely with a highly skilled development team to deliver timely updates and improvements for client-facing widgets.",
      "Gained hands-on experience in modern front-end technologies, contributing to the IR team's web solutions."
    ]
  },
  {
    role: "Front End Developer",
    company: "ELIXIR TECHNOLOGIES",
    location: "Islamabad, Pakistan",
    period: "Nov 2023 – Jul 2024",
    type: "FYP Collaboration",
    color: "#10b981",
    points: [
      "Developed and tested software applications for enhanced functionality and user experience.",
      "Participated in agile development processes, contributing to sprint planning and retrospectives.",
      "Collaborated with cross-functional teams to gather requirements and implement solutions effectively.",
      "Documented technical specifications and user guides for new features and updates."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Intuitive Table Designer UI",
    company: "Elixir Technologies",
    period: "Nov 2023 – Jul 2024",
    shortDesc: "A powerful data-driven table UI with drag-and-drop, real-time updates, and customizable formatting built with React.js.",
    thumbnail: "/images/project1.png",
    tech: ["React.js", "Ag-Grid", "XLSX", "JavaScript", "CSS3"],
    color: "#00d4ff",
    details: {
      overview: "Designed and developed a data-driven table UI using React.js for Elixir Technologies. This was my Final Year Project collaboration where I built a complete intuitive table management system.",
      features: [
        "Drag-and-drop column reordering and row management",
        "Real-time data updates without page refresh",
        "Customizable cell formatting and styling",
        "Excel export functionality with XLSX library",
        "Responsive design for all screen sizes",
        "User research-driven UX improvements"
      ],
      challenges: "The biggest challenge was implementing smooth drag-and-drop with real-time updates while maintaining high performance with large datasets.",
      outcome: "Successfully delivered the project, simplifying complex data handling and improving decision-making through intuitive interfaces.",
      images: ["/images/project1.png", "/images/project1.png"]
    }
  },
  {
    id: 2,
    title: "Restaurant Management Web App",
    company: "Personal Project",
    period: "Dec 2024 – Jan 2025",
    shortDesc: "Complete restaurant management system with role-based dashboards for users, restaurants, and admins with real-time order tracking.",
    thumbnail: "/images/project2.png",
    tech: ["React.js", "Bootstrap", "RESTful APIs", "JavaScript", "LocalStorage"],
    color: "#7c3aed",
    details: {
      overview: "A full-featured Restaurant Management Web Application with role-based access control. Built with React.js and Bootstrap with complete order management workflow.",
      features: [
        "Role-based dashboards: User, Restaurant, Admin",
        "Real-time food menu management",
        "Order tracking with status updates",
        "Restaurant profiles with ratings",
        "Rider assignment system",
        "Secure authentication with JWT",
        "Dynamic filtering and search"
      ],
      challenges: "Implementing role-based routing and managing complex state across multiple user types while keeping the UI clean and intuitive.",
      outcome: "Successfully built a production-ready restaurant platform with all core features working seamlessly.",
      images: ["/images/project2.png", "/images/project2.png"]
    }
  }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "JavaScript (ES6+)", level: 88, icon: "🟨" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "Bootstrap", level: 85, icon: "📱" },
    { name: "Tailwind CSS", level: 82, icon: "💨" }
  ],
  libraries: [
    { name: "Material UI (MUI)", level: 80, icon: "🔷" },
    { name: "Ag-Grid", level: 75, icon: "📊" },
    { name: "Framer Motion", level: 70, icon: "🎭" },
    { name: "Font Awesome", level: 90, icon: "✨" }
  ],
  tools: [
    { name: "Git & GitHub", level: 85, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "MongoDB", level: 65, icon: "🍃" },
    { name: "WordPress", level: 70, icon: "📝" },
    { name: "Adobe Illustrator", level: 60, icon: "🎨" },
    { name: "Jest / Testing", level: 65, icon: "🧪" }
  ]
};

export const certificates = [
  {
    name: "Meta Front-End Developer Specialization",
    issuer: "Meta",
    period: "Jun 2025 – Dec 2025",
    icon: "🏆",
    color: "#0081FB"
  }
];
