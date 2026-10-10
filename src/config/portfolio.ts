export type Skill = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs2" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap5" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "expressjs" },
      { name: "REST APIs", icon: "postman" },
      { name: "Sequelize", icon: "sequelize" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export const portfolio = {
  // ----------------------------------------------------------
  // Personal Info
  // ----------------------------------------------------------
  name: "Balya Ahmad Waffa",
  initials: "BAW",
  role: "Frontend Developer",
  roles: ["Frontend Developer", "Aspiring Fullstack Developer"],
  location: "Blitar, Indonesia",

  bio: "Frontend Developer focused on building responsive, clean, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS. I enjoy turning UI designs into functional web experiences and continuously improving my development skills.",

  shortBio:
    "Frontend Developer based in Blitar, Indonesia, focused on building clean and responsive web experiences.",

  avatar: "/avatar.png",
  profile: "/foto-profile.jpg",
  available: true,

  // ----------------------------------------------------------
  // Contact & Social
  // ----------------------------------------------------------
  email: "balyaahmad133@gmail.com",
  github: "https://github.com/balyahmd",
  linkedin: "https://linkedin.com/in/balyahmd",
  instagram: "",

  // ----------------------------------------------------------
  // Skills
  // ----------------------------------------------------------
  skillCategories,

  techStack: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Git" },
    { name: "Figma" },
    { name: "Vercel" },
  ],

  // ----------------------------------------------------------
  // Projects
  // ----------------------------------------------------------
  projects: [
    {
      id: 1,
      title: "Virtual Tour Website SDN Gadungan 02",
      description:
        "A school profile website integrated with a 360° virtual tour that allows visitors to explore the school environment digitally. Built with React, Tailwind CSS, React-Pannellum, Express.js, and PostgreSQL.",
      image: "/project-2.png",
      tech: [
        "React",
        "Tailwind CSS",
        "React-Pannellum",
        "Express.js",
        "PostgreSQL",
        "JWT",
      ],
      github: "https://sdngadungan02-blitar.vercel.app/",
      live: "https://sdngadungan02-blitar.vercel.app/",
      category: "Web",
      featured: true,
    },
    {
      id: 2,
      title: "Video Belajar",
      description:
        "A learning platform interface for browsing and managing online courses. The application provides course listing, search, category filtering, pagination, and course management features with a responsive modern interface.",
      image: "/project-3.png",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "REST API",
        "Vercel",
      ],
      github: "https://github.com/Balyahmd/harisenin-bootcamp-fe-missions",
      live: "https://video-belajar-mission.vercel.app/",
      category: "Web",
      featured: true,
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description:
        "A personal developer portfolio showcasing projects, technical skills, experience, and education with a responsive and modern interface.",
      image: "/project-1.png",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      github: "https://balyahmd-portfolio.vercel.app/",
      live: "https://balyahmd-portfolio.vercel.app/",
      category: "Web",
      featured: false,
    },
  ],

  // ----------------------------------------------------------
  // Experience
  // ----------------------------------------------------------
  experience: [
    {
      company: "SEAL",
      role: "Frontend Developer Intern",
      period: "Aug 2025 — Dec 2025",
      location: "Remote",
      description:
        "Developed responsive web interfaces based on Figma designs using React.js, TypeScript, and Tailwind CSS. Built reusable components and focused on creating clean, consistent, and user-friendly interfaces.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      company: "JanjiNgoding.Id",
      role: "Frontend Developer",
      period: "Feb 2025 — Jun 2025",
      location: "Remote",
      description:
        "Developed and maintained frontend features for a POS application, including the order management feature. Worked with React, TypeScript, and Tailwind CSS while integrating frontend interfaces with backend APIs.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL"],
    },
  ],

  education: [
    {
      institution: "Universitas Islam Balitar",
      degree: "S1 Teknik Informatika",

      period: "2021 — 2025",

      description:
        "Graduated with a GPA of 3.59/4.00. Focused on software engineering, web development, frontend development, and information technology. Final project focused on developing a school website integrated with a 360° virtual tour.",
    },
  ],
  categories: ["All", "Web"],
} as const;

export type Project = (typeof portfolio.projects)[number];
export type Experience = (typeof portfolio.experience)[number];
export type Education = (typeof portfolio.education)[number];
