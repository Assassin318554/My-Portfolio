/* ===================================================================
   lib/data.ts — the single source of content for the whole site.
   Replace every TODO placeholder with your real information and the
   entire website updates automatically.
   =================================================================== */

export const profile = {
  name: "Nahin Intesher",
  role: "Computer Science & Engineering Graduate",
  location: "Dhaka, Bangladesh",
  email: "nahinsikdar@gmail.com",
  cv: "/cv.pdf",
  github: "https://github.com/nahinintesher",
  linkedin: "https://www.linkedin.com/in/nahinintesher/",
  scholar: "https://scholar.google.com",
};

export const heroBio =
  "I am a Computer Science & Engineering graduate interested in teaching, research, and developing intelligent systems that address real-world problems.";

export const about = {
  paragraphs: [
    "I am a recent Computer Science & Engineering graduate of United International University, Dhaka, where my coursework and undergraduate thesis drew me toward the intersection of computer vision, human computer interaction, and machine learning.",
    "A recurring question runs through my work: how can intelligent systems genuinely help people? That question led me to assistive technology — including SIDAS, an ongoing navigation system for visually impaired users — and to research on how vulnerable social-media users perceive and detect synthetic media.",
    "Alongside research, I care deeply about teaching. Tutoring juniors in data structures and algorithms taught me that explaining an idea clearly is as demanding — and as rewarding — as building one.",
  ],
  goal: "My long-term goal is to pursue graduate studies and grow into a lecturer-researcher who contributes to both the classroom and the literature.",
};

export const researchInterests = [
  "Deep Learning",
  "Computer Vision",
  "Human Computer Interaction",
  "Assistive Technology",
];

/* ---------------- Research ---------------- */
export type ResearchItem = {
  index: string;
  title: string;
  desc: string;
  areas: string[];
  status: string;
};

export const research: ResearchItem[] = [
  {
    index: "R·01",
    title:
      "Understanding Deepfake Perceptions and Detection Practices among Vulnerable Social Media Users in Bangladesh",
    desc: "An empirical study examining how users most exposed to synthetic media perceive deepfakes, what visual and contextual cues they rely on, and which detection practices they actually adopt. The findings aim to inform detection tools that are usable — not just accurate.",
    areas: ["Deepfake", "Computer Vision", "Human–Computer Interaction"],
    status: "Undergraduate Thesis",
  },
  {
    index: "R·02",
    title: "Spatial-Intent-Decision Adaptive System (SIDAS)",
    desc: "A research-oriented assistive navigation system designed to help visually impaired users navigate environments using computer vision, spatial understanding, and intelligent decision-making. The system models the user's intent, not just the obstacles in front of them.",
    areas: [
      "Assistive Technology",
      "Computer Vision",
      "Artificial Intelligence",
    ],
    status: "Ongoing Project",
  },
];

/* ---------------- Publications ---------------- */
export type Publication = {
  id: string;
  index: string;
  title: string;
  type: string;
  year: string;
  status: string;
  abstract: string;
  bibtex: string;
};

// TODO: update authors / venues / years when papers are finalised
export const publications: Publication[] = [
  {
    id: "p1",
    index: "P·01",
    title:
      "Understanding Deepfake Perceptions and Detection Practices among Vulnerable Social Media Users in Bangladesh",
    type: "Undergraduate Thesis",
    year: "2026",
    status: "In progress — write-up",
    abstract:
      "Generative tools have made synthetic media effortless to produce, yet the users most exposed to them are often the least equipped to recognise them. This thesis investigates how vulnerable social-media users in Bangladesh perceive deepfakes, what visual and contextual cues they rely on, and which detection practices they adopt. Drawing on a mixed-method study combining surveys and interviews, the findings highlight a persistent gap between awareness and practice, and translate into design recommendations for usable deepfake-detection tools.",
    bibtex: `@misc{Intesher2026deepfake,
  author = {Intesher, Nahin},
  title  = {Understanding Deepfake Perceptions and Detection Practices among Vulnerable Social Media Users in Bangladesh},
  year   = {2026},
  note   = {Undergraduate thesis, in progress}
}`,
  },
  {
    id: "p2",
    index: "P·02",
    title:
      "SIDAS: A Spatial-Intent-Decision Adaptive System for Assistive Indoor Navigation",
    type: "Conference manuscript",
    year: "2026",
    status: "In preparation",
    abstract:
      "SIDAS is a proposed assistive navigation framework for visually impaired individuals. By combining real-time object detection, spatial scene understanding, and a decision module that models the user's intent, SIDAS translates a camera stream into concise, actionable navigation guidance. A prototype running on embedded hardware demonstrates the feasibility of intent-aware navigation in indoor environments.",
    bibtex: `@misc{Intesher2026sidas,
  author = {Intesher, Nahin},
  title  = {SIDAS: A Spatial-Intent-Decision Adaptive System for Assistive Indoor Navigation},
  year   = {2026},
  note   = {Manuscript in preparation}
}`,
  },
];

/* ---------------- Education ---------------- */
export type EducationItem = {
  degree: string;
  school: string;
  place: string;
  years: string;
  result: string;
  notes: { label: string; text: string }[];
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "United International University",
    place: "Dhaka, Bangladesh",
    years: "2022 - 2026",
    result: "CGPA 3.94 / 4.00",
    notes: [
      {
        label: "Relevant coursework",
        text: "Artificial Intelligence · Machine Learning · Data Structures & Algorithms · Computer Networks · Database Systems · Software Engineering · Human-Computer Interaction · Data Mining · Machine Learning · Digital Image Processing",
      },
      {
        label: "Undergraduate thesis",
        text: "Understanding Deepfake Perceptions and Detection Practices among Vulnerable Social Media Users in Bangladesh",
      },
    ],
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    school: "Dhaka Residential Model College",
    place: "Dhaka, Bangladesh",
    years: "2018 - 2020",
    result: "GPA 5.00 / 5.00",
    notes: [],
  },
];

/* ---------------- Teaching ---------------- */
export const teaching = {
  period: "2024 - 2025",
  role: "Undergraduate Teaching Assistant",
  org: "Department of CSE",
  orgPlace: "United International University",
  desc: "Selected by the department to support first- and second-year laboratory sessions. Responsibilities included preparing weekly problem sets, running problem-solving sessions before midterms, and one-to-one mentoring during office hours.",
  points: [
    "Supported lab sessions for Programming Fundamentals, Data Structures, and Algorithms — many students across six trimesters.",
    "Mentored many first-year students through the department's peer-mentoring initiative.",
  ],
  interests: [
    "Programming Fundamentals",
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Machine Learning",
  ],
};

/* ---------------- Projects ---------------- */
export type Project = {
  title: string;
  desc: string;
  tech: string[];
  year: string;
  github: string;
  demo?: string;
};

export const selectedProjects: Project[] = [
  {
    title: "SIDAS — Assistive Navigation for the Visually Impaired",
    desc: "An AI-powered assistive navigation system that combines real-time object detection with spatial reasoning and intent modelling to help visually impaired users make safe navigation decisions indoors.",
    tech: ["Python", "PyTorch", "OpenCV", "YOLOv8", "Raspberry Pi"],
    year: "2025 - Ongoing",
    github: "https://github.com/nahinIntesher",
  },
  {
    title: "Deepfake Detection System",
    desc: "A hybrid ViT + LSTM model that classifies manipulated video frames by capturing both spatial artifacts and temporal inconsistencies across sequences.",
    tech: ["PyTorch", "Hugging Face", "OpenCV", "ViT", "LSTM"],
    year: "2025",
    github: "https://github.com/nahinIntesher",
  },
];

/* Full academic record — coursework & team projects, rendered as an image grid */
export type GalleryProject = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  date: string;
  image: string;
  demoLink?: string; // add a live URL here anytime; the card picks it up automatically
};

export const academicProjects: GalleryProject[] = [
  {
    title: "DISCOVERYOU",
    description:
      "DiscoverYou is a platform where users can discover and develop their talents.",
    technologies: ["React", "Node.js", "MySQL"],
    githubLink: "https://github.com/nahinIntesher/DiscoverYou",
    date: "06/2024 - 08/2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Jiggasha",
    description: "Jiggasha is an online gamified educational platform.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/nahinIntesher/Jiggasha",
    date: "04/2025 - 06/2025",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mini Game Master",
    description: "A multiplayer game where 2 players can play together.",
    technologies: ["Java", "JavaFX", "MySQL"],
    githubLink: "https://github.com/nahinIntesher/MiniGameMaster",
    date: "08/2024 - 09/2024",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1200&auto=format&fit=crop",
  },
];

export const personalProjects: GalleryProject[] = [
  {
    title: "WEARQO",
    description: "WearQo is a fashion e-commerce company, sells brand stuff.",
    technologies: ["Next.js"],
    githubLink: "https://github.com/orgs/Wearqo/repositories",
    date: "07/2024 - Present",
    image:
      "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Diganta",
    description:
      "Diganta is my Coaching Center. I made a website for my coaching.",
    technologies: ["Next.js"],
    githubLink: "https://github.com/nahinIntesher/Diganta",
    date: "05/2025 - Present",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nahin Portfolio",
    description: "My portfolio website to know more about myself.",
    technologies: ["Next.js"],
    githubLink: "https://github.com/nahinIntesher/My-Portfolio",
    date: "07/2024 - Present",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "START TO DO",
    description: "Simple Todo App to maintain daily workflow.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinIntesher/Flutter-Projects/tree/main/todo_app",
    date: "05/2024 - 06/2024",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "ABOHAWA",
    description: "Simple Weather App to know the weather of any city.",
    technologies: ["Flutter"],
    githubLink:
      "https://github.com/nahinIntesher/Flutter-Projects/tree/main/abohawa",
    date: "05/2024 - 06/2024",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SIMPLE CALCULATOR",
    description: "Simple Calculator App for doing daily life calculations.",
    technologies: ["Java", "JavaFX"],
    githubLink:
      "https://github.com/nahinIntesher/Java_Projects/tree/main/normalcalculator",
    date: "01/2023 - 02/2023",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "UNIT CONVERTER",
    description: "A Unit Converter app to convert length, time, temperature.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:
      "https://github.com/nahinIntesher/Dev/tree/main/Java%20Script/Converter",
    date: "01/2023 - 02/2023",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ---------------- Skills ---------------- */
export const skills = [
  {
    category: "Programming",
    items: ["Python", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "OpenCV", "Hugging Face Transformers"],
  },
  {
    category: "Web Development",
    items: ["Next.js", "React", "Node.js", "Express.js"],
  },
  { category: "Database", items: ["PostgreSQL", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Linux", "Docker", "LaTeX"] },
];

/* ---------------- Achievements ---------------- */
export type Achievement = {
  year: string;
  title: string;
  tag: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    year: "",
    title: "Merit Based Scholarship — United International University",
    tag: "Scholarship",
    detail:
      "100% and 50% Merit-based tuition scholarships awarded for top academic standing.",
  },
  {
    year: "2023",
    title: "1st Runner-up — UIU Juniors Programming Contest",
    tag: "Contest",
    detail: "Solo competitive programming contest, Department of CSE.",
  },
  {
    year: "2024",
    title: "Champion at UIU CSE Project Showcase 2024",
    tag: "System Analysis & Design",
    detail:
      "Awarded 1st place for Jiggasha, a gamified educational platform, at the annual project showcase.",
  },
  {
    year: "2024",
    title: "Champion at UIU CSE Project Showcase 2024",
    tag: "Database Management System",
    detail: "Awarded 1st place for DiscoverYou — a talent discovery platform",
  },
  {
    year: "2025",
    title: "3rd Runner-up at UIU CSE Project Showcase 2024",
    tag: "Advanced Object-Oriented Programming",
    detail:
      "Awarded 4th place for Mini Game Master — a multiplayer game where 2 players can play together.",
  },
  {
    year: "2025",
    title: "2nd Runner-up at UIU CSE Project Showcase 2024",
    tag: "Software Engineering",
    detail:
      "Awarded 3rd place for DiscoverYou Mobile App — a talent discovery platform with AI support.",
  },
  {
    year: "2025",
    title: "UIU CSE Fest 2025",
    tag: "Hackathon",
    detail:
      "Represented United International University at the cse fest 2025 hackathon",
  },
];

/* ---------------- Site index (home TOC, footer, mobile nav) ---------------- */
export type Route = {
  no: string;
  href: string;
  label: string;
  short: string;
  desc: string;
};

export const routes: Route[] = [
  {
    no: "01",
    href: "/about",
    label: "About Me",
    short: "About",
    desc: "Academic biography, motivation, and long-term direction.",
  },
  {
    no: "02",
    href: "/research",
    label: "Research",
    short: "Research",
    desc: "Selected work at the CV · HCI · assistive-technology intersection.",
  },
  {
    no: "03",
    href: "/publications",
    label: "Publications & Research Output",
    short: "Publications",
    desc: "Thesis and manuscripts in preparation, with copy-ready BibTeX.",
  },
  {
    no: "04",
    href: "/education",
    label: "Education",
    short: "Education",
    desc: "Academic record and relevant coursework.",
  },
  {
    no: "05",
    href: "/teaching",
    label: "Teaching & Academic Experience",
    short: "Teaching",
    desc: "Tutoring experience and the courses I am prepared to teach.",
  },
  {
    no: "06",
    href: "/projects",
    label: "Selected Projects",
    short: "Projects",
    desc: "A few builds with academic depth or social significance.",
  },
  {
    no: "07",
    href: "/skills",
    label: "Technical Skills",
    short: "Skills",
    desc: "The working toolbox behind the research and teaching.",
  },
  {
    no: "08",
    href: "/achievements",
    label: "Achievements",
    short: "Achievements",
    desc: "Awards, scholarships, contests, and certifications.",
  },
  {
    no: "09",
    href: "/contact",
    label: "Contact",
    short: "Contact",
    desc: "Teaching, research, higher studies, and collaboration.",
  },
];

export const now = [
  { label: "Undergraduate thesis", value: "In write-up" },
  { label: "SIDAS", value: "Prototype testing" },
  { label: "Applying for", value: "Lecturer roles & graduate programs" },
];
