export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
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
  experience: Experience[];
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
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your.email@example.com',
    resume: 'https://your-resume-link.com',
  },
  experience: [
    {
      company: 'Indhic Software Pvt Ltd',
      role: 'Full-Stack Engineer',
      period: '2024 - Present',
      location: 'Hyderabad, India',
      description: [
        'Developed and maintained production-grade full-stack applications',
        'Built AI-powered features using GenAI and RAG systems',
        'Designed scalable cloud infrastructure solutions',
        'Led feature development from conception to deployment',
        'Collaborated with cross-functional teams to deliver high-quality products',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Python',
        'AWS',
        'GenAI',
        'RAG',
      ],
    },
    {
      company: 'Freelance',
      role: 'Full-Stack Developer',
      period: '2023 - 2024',
      location: 'Remote',
      description: [
        'Delivered custom web applications for clients',
        'Implemented responsive designs and optimized performance',
        'Provided end-to-end development services',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    },
  ],
  projects: [
    {
      title: 'Data Annotation SaaS',
      description:
        'A scalable SaaS platform for data annotation workflows with team collaboration features and real-time updates.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/yourusername/data-annotation-saas',
    },
    {
      title: 'Desktop AI Agent App',
      description:
        'A desktop application powered by AI agents for task automation and intelligent assistance.',
      technologies: ['Electron', 'Python', 'GenAI', 'RAG'],
      github: 'https://github.com/yourusername/ai-agent-app',
    },
    {
      title: 'WebSolutions (MERN)',
      description:
        'Full-stack web application built with MERN stack, featuring user authentication and real-time features.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/yourusername/websolutions',
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

