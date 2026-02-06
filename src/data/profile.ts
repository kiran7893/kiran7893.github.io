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
  problem: string;
  solution: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  context?: string; // e.g., "@ Indhic", "@ Shortcastle", "Freelance", "Personal"
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
      title: 'Kshana - AI Video Editor',
      problem: 'Creating professional videos with custom graphics, infographics, and animations is time-consuming and requires expertise in multiple tools. Content creators needed a faster way to produce quality video content.',
      solution: 'I built Kshana, an agentic AI-powered desktop video editor using TypeScript and Electron.js. The app automates image and video generation through ComfyUI pipelines and LLM APIs. I designed modular sub-agent workflows for asset preparation, automated image placement, and infographic generation—all integrated with Remotion for final video rendering.',
      technologies: ['TypeScript', 'Electron.js', 'ComfyUI', 'LLM APIs', 'Remotion'],
      image: 'https://placehold.co/800x450/1a1a2e/ffffff?text=Kshana+AI+Video+Editor',
      link: 'https://indhic.com',
      context: '@ Indhic',
    },
    {
      title: 'Data Annotation Platform',
      problem: 'ML teams struggle with organizing annotation workflows, managing annotator access, and maintaining data quality at scale. Existing tools were either too complex or lacked collaboration features.',
      solution: 'I designed and shipped a production-ready SaaS platform using Next.js and NestJS. The system handles team collaboration, role-based access, and real-time updates. I owned the entire lifecycle from system design to deployment on GCP Cloud Run with Docker and GitHub Actions CI/CD.',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'GCP Cloud Run', 'Docker', 'GitHub Actions'],
      image: 'https://placehold.co/800x450/16213e/ffffff?text=Data+Annotation+Platform',
      link: 'https://indhic.com',
      context: '@ Indhic',
    },
    {
      title: 'Indhic AI',
      problem: 'Businesses need production-grade AI solutions for contextual search, autonomous agent workflows, and NLP but lack the expertise to build robust, reliable systems.',
      solution: 'I contributed to building the Indhic AI platform—a research-driven AI company offering semantic search engines, agentic workflows, and smart data annotation tools. The website showcases AI-powered products and R&D consulting services with a focus on robustness, reliability, and measurable ROI.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      image: 'https://placehold.co/800x450/0f172a/ffffff?text=Indhic+AI',
      link: 'https://indhic.com',
      context: '@ Indhic',
    },
    {
      title: 'Satvic Foods',
      problem: 'A leading agricultural exporter needed a modern, professional website to showcase their premium gherkins and vegetables to global markets while highlighting their certifications and sustainable farming practices.',
      solution: 'I built a visually rich, high-performance website for Satvic Foods featuring product catalogs, certification showcases, and company information. The site highlights their partnership with 4000+ farmers and exports to 24+ countries, with optimized performance and SEO for international reach.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      image: 'https://placehold.co/800x450/22c55e/ffffff?text=Satvic+Foods',
      link: 'https://www.satvicfoods.in',
      context: '@ Indhic',
    },
    {
      title: 'Personiks',
      problem: 'A cosmetic clinic needed a modern, high-performance website with appointment booking and secure payment processing to attract and serve patients online.',
      solution: 'I spearheaded development and deployment of personiks.com using Next.js and TypeScript. Integrated MongoDB with Mongoose for data management and HDFC payment gateway for secure transactions. Automated deployments using Dokploy and optimized for performance, SEO, and scalability.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Mongoose', 'HDFC Payment Gateway', 'Dokploy'],
      image: 'https://placehold.co/800x450/7c3aed/ffffff?text=Personiks',
      link: 'https://personiks.com',
      context: 'Freelance',
    },
    {
      title: 'Virtec',
      problem: 'An HVAC solutions company needed a professional web presence to showcase their precision flow meters, heat meters, and IAQ sensors to a global audience.',
      solution: 'I built a modern, responsive website for Virtec showcasing their comprehensive range of electromagnetic flow meters, ultrasonic heat meters, VFDs, and IAQ sensors. The site features detailed product pages, company information, and customer service sections optimized for performance and SEO.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      image: 'https://placehold.co/800x450/0891b2/ffffff?text=Virtec',
      link: 'https://virtec.us',
      context: 'Freelance',
    },
    {
      title: 'Federation Management System',
      problem: 'Managing federation data, role-based access, and complex workflows required a robust, type-safe system with optimized database performance.',
      solution: 'Built RBAC-enabled frontend interfaces using Next.js 15 and TypeScript at Shortcastle Technologies. Optimized data access using Prisma ORM and PostgreSQL, improving performance by 30%. Used tRPC for type-safe role management and consistent API communication.',
      technologies: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL', 'tRPC'],
      image: 'https://placehold.co/800x450/dc2626/ffffff?text=FMS',
      link: 'https://shortcastle.com',
      context: '@ Shortcastle',
    },
    {
      title: 'WebSolutions',
      problem: 'Small businesses needed a simple way to estimate website development costs and book consultations without going through lengthy sales processes.',
      solution: 'I built a MERN stack application that includes an ML-based cost calculator using Flask and Pickle to provide instant estimates. The platform also features a secure appointment booking system with authentication, making it easy for clients to schedule consultations.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Flask', 'ML'],
      github: 'https://github.com/kiran7893/websolutions',
      image: 'https://placehold.co/800x450/0f3460/ffffff?text=WebSolutions',
      link: 'https://github.com/kiran7893/websolutions',
      context: 'Personal',
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

