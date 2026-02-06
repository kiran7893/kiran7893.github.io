export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface TimelineEntry {
  id: string;
  type: 'work' | 'education' | 'achievement';
  period: string;
  title: string;
  subtitle?: string;
  location?: string;
  narrative: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  cloud: string[];
  genai: string[];
}

export interface ProfileData {
  name: string;
  location: string;
  role: string;
  tagline: string;
  about: string;
  socialLinks: SocialLinks;
  timeline: TimelineEntry[];
  projects: Project[];
  skills: Skills;
}

export const profileData: ProfileData = {
  name: 'Myadaram Sai Kiran',
  location: 'Hyderabad, Telangana, India',
  role: 'Full-Stack Engineer',
  tagline: 'Building AI-driven full-stack systems that scale',
  about:
    'Full-stack engineer specializing in GenAI, RAG systems, and cloud infrastructure. I build end-to-end solutions with a focus on ownership, scalability, and delivering measurable impact. Experienced in developing production-grade applications from concept to deployment.',
  socialLinks: {
    github: 'https://github.com/kiran7893',
    linkedin: 'https://www.linkedin.com/in/sai-kiran-myadaram-027893242/',
    email: 'mailto:myadaramsaikiran@gmail.com',
    resume: '/MyadaramSaikiran.pdf',
  },
  timeline: [
    {
      id: 'indhic',
      type: 'work',
      period: '2025 - Present',
      title: 'Full Stack Engineer',
      subtitle: 'Indhic Software Pvt Ltd',
      location: 'Remote',
      icon: 'indhic',
      narrative: `I work as a Full Stack Engineer at Indhic Software, where I build AI-powered applications from the ground up. My main project has been Kshana, an agentic AI-powered desktop video editor built with TypeScript and Electron.js. The editor enables automated image and video generation workflows through ComfyUI-based pipelines and LLM APIs.

I designed and built modular sub-agent workflows that handle everything from asset preparation to automated image placement and infographic generation pipelines, all integrated with Remotion for video rendering.

Beyond Kshana, I designed and shipped a production Data Annotation SaaS platform using Next.js and NestJS. I owned the entire lifecycle—system design, implementation, and deployment on GCP Cloud Run with Docker and GitHub Actions CI/CD.`,
    },
    {
      id: 'shortcastle',
      type: 'work',
      period: 'Feb - May 2025',
      title: 'Software Developer Intern',
      subtitle: 'Shortcastle Technologies',
      location: 'Hyderabad, Telangana',
      icon: 'shortcastle',
      narrative: `I interned at Shortcastle Technologies working on their Fleet Management System (FMS). My focus was building RBAC-enabled frontend interfaces using Next.js 15 and TypeScript, giving different user roles appropriate access levels throughout the application.

I optimized data access patterns using Prisma ORM and PostgreSQL, which improved overall application performance by 30%. I also implemented tRPC for type-safe role management and consistent API communication across the stack.`,
    },
    {
      id: 'gtec',
      type: 'work',
      period: 'Aug 2024 - Jan 2025',
      title: 'Web Development Intern',
      subtitle: 'G-Tec Hyderabad',
      location: 'Hyderabad, Telangana',
      icon: 'gtec',
      narrative: `This was where I got my start in professional web development. I built responsive user interfaces with React.js and Tailwind CSS, which increased user engagement by 15% based on analytics.

I developed RESTful APIs using Node.js and Express for efficient data handling, and spent time optimizing MySQL queries to improve database performance.`,
    },
    {
      id: 'btech',
      type: 'education',
      period: '2021 - 2025',
      title: 'B.Tech in Computer Science',
      subtitle: 'TKR College of Engineering & Technology',
      location: 'Hyderabad, Telangana',
      icon: 'education',
      narrative: `I completed my Bachelor of Technology in Computer Science with a CGPA of 7.67/10.00. During my time here, I built several projects including WebSolutions, a MERN stack application for site creation and maintenance that integrated an ML-based cost calculator using Flask and Pickle.

I focused heavily on practical skills alongside academics—learning full-stack development, working with databases, and building real applications that solved actual problems.`,
    },
  ],
  projects: [
    {
      title: 'Data Annotation SaaS',
      description:
        'A scalable SaaS platform for data annotation workflows with team collaboration features and real-time updates.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/kiran7893/data-annotation-saas',
    },
    {
      title: 'Desktop AI Agent App',
      description:
        'A desktop application powered by AI agents for task automation and intelligent assistance.',
      technologies: ['Electron', 'Python', 'GenAI', 'RAG'],
      github: 'https://github.com/kiran7893/ai-agent-app',
    },
    {
      title: 'WebSolutions (MERN)',
      description:
        'Full-stack web application built with MERN stack, featuring user authentication and real-time features.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/kiran7893/websolutions',
    },
  ],
  skills: {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
    frameworks: [
      'React',
      'Node.js',
      'Express',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    genai: ['OpenAI API', 'RAG Systems', 'LangChain', 'Vector Databases'],
  },
};

