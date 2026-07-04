export const profile = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "Building Enterprise Applications with Modern Tech",
  introduction: "I'm a passionate Full Stack Developer with expertise in building scalable enterprise applications. I specialize in React.js, Next.js, .NET 8/.NET 9, Java Spring Boot, and cloud technologies on Azure. With a strong foundation in both frontend and backend development, I deliver complete solutions that drive business value.",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resumeUrl: "/resume.pdf",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "Redux", level: 88 },
    { name: "HTML/CSS", level: 92 },
  ],
  backend: [
    { name: ".NET 8/.NET 9", level: 92 },
    { name: "Java", level: 88 },
    { name: "Spring Boot", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "REST APIs", level: 92 },
    { name: "GraphQL", level: 75 },
  ],
  databases: [
    { name: "PostgreSQL", level: 90 },
    { name: "SQL Server", level: 88 },
    { name: "MongoDB", level: 75 },
    { name: "Redis", level: 70 },
  ],
  cloud: [
    { name: "Azure", level: 85 },
    { name: "Azure Functions", level: 82 },
    { name: "Azure DevOps", level: 80 },
    { name: "AWS", level: 65 },
  ],
  tools: [
    { name: "Git", level: 92 },
    { name: "Docker", level: 78 },
    { name: "CI/CD", level: 82 },
    { name: "JIRA", level: 85 },
    { name: "Figma", level: 70 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Enterprise Timesheet System",
    description: "A comprehensive timesheet management system for enterprise clients featuring role-based access control, automated approvals, reporting dashboards, and integration with payroll systems. Built with React frontend and .NET backend deployed on Azure.",
    tech: ["React.js", "Redux", ".NET 8", "Azure SQL", "Azure Functions"],
    category: "Enterprise Application",
    highlights: ["Role-based access control", "Automated workflow", "Real-time analytics"],
  },
  {
    id: 2,
    title: "Authentication & Authorization Platform",
    description: "Enterprise-grade authentication system supporting SSO, MFA, and role-based permissions. Implemented secure token-based authentication with OAuth 2.0 and OpenID Connect protocols.",
    tech: ["Next.js", "TypeScript", ".NET 9", "PostgreSQL", "Azure AD"],
    category: "Security Platform",
    highlights: ["OAuth 2.0 / OIDC", "Multi-factor auth", "Audit logging"],
  },
  {
    id: 3,
    title: "Inventory Management System",
    description: "Full-stack inventory management solution with real-time tracking, barcode scanning integration, and automated reorder alerts. Features responsive mobile-first design for warehouse operations.",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "Azure", "Docker"],
    category: "Full Stack",
    highlights: ["Real-time tracking", "Barcode integration", "Mobile responsive"],
  },
];

export const experience = [
  {
    id: 1,
    company: "Company Name",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading development of enterprise applications using React, .NET, and Azure. Architecting scalable solutions and mentoring junior developers.",
    technologies: ["React.js", ".NET 8", "Azure", "PostgreSQL", "TypeScript"],
  },
  {
    id: 2,
    company: "Company Name",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Developed and maintained multiple enterprise applications including timesheet systems and authentication platforms. Implemented CI/CD pipelines and cloud deployments.",
    technologies: ["React.js", "Spring Boot", "Java", "Azure", "SQL Server"],
  },
  {
    id: 3,
    company: "Company Name",
    role: "Software Developer",
    period: "2018 - 2020",
    description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["JavaScript", ".NET Core", "SQL Server", "HTML/CSS"],
  },
];
