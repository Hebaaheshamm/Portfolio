export const personalInfo = {
  name: 'Heba Hesham',
  role: 'Full-Stack Web & Flutter Mobile Developer',
  headline: 'Crafting high-performance web interfaces & fluid cross-platform mobile apps.',
  email: 'heba.heshamshokry@gmail.com',
  phone: '+201156898367',
  whatsapp: 'https://wa.me/201156898367',
  location: 'Giza, Egypt',
  github: 'https://github.com/Hebaaheshamm',
  linkedin: 'https://www.linkedin.com/in/heba-hesham-0a3b99374/',
  resumeUrl: '/Heba_Hesham_Resume.pdf',
  summary: 'Computer and Information Systems student at Sadat Academy for Management Sciences specializing in Software Engineering, with hands-on experience in Flutter, Front-End Development, and C++. Skilled in building cross-platform mobile applications and responsive web interfaces using Dart, Flutter, HTML, CSS, and JavaScript. Currently pursuing Full Stack Web Development training through DEPI, with a strong foundation in OOP, problem-solving, and software architecture. Recognized as Top 1 Technical Member and serving as Technical Vice Manager at Hult Prize SAMS.',
  education: {
    institution: 'Sadat Academy for Management Sciences',
    location: 'Cairo, Egypt',
    faculty: 'Computer and Information Systems',
    degree: 'Bachelor of Science in Computer and Information Systems',
    specialization: 'Software Engineering',
    status: 'Currently in Year 3',
    graduationYear: 'Expected Graduation: 2028'
  },
  stats: [
    { label: 'Years of Coding', value: '3+' },
    { label: 'Featured Projects', value: '7+' },
    { label: 'Technical Certificates', value: '12+' },
    { label: 'Leadership Roles', value: 'Technical Vice Manager' }
  ]
};

export const skillsData = [
  // Web & Frontend
  { name: 'ReactJS', category: 'frontend', level: 85, icon: 'Atom', highlight: true },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 90, icon: 'FileCode', highlight: true },
  { name: 'HTML5 & Modern CSS3', category: 'frontend', level: 95, icon: 'Layout', highlight: true },
  { name: 'Responsive Web Design', category: 'frontend', level: 92, icon: 'Smartphone', highlight: true },
  { name: 'REST API Integration', category: 'frontend', level: 88, icon: 'Network', highlight: true },

  // Mobile
  { name: 'Flutter', category: 'mobile', level: 90, icon: 'Smartphone', highlight: true },
  { name: 'Dart', category: 'mobile', level: 88, icon: 'Code2', highlight: true },
  { name: 'Mobile State Management', category: 'mobile', level: 86, icon: 'Cpu', highlight: true },
  { name: 'Async Programming & Futures', category: 'mobile', level: 88, icon: 'RefreshCw', highlight: false },
  { name: 'Mobile UI/UX Best Practices', category: 'mobile', level: 85, icon: 'Palette', highlight: false },

  // Core Languages & CS
  { name: 'C++', category: 'languages', level: 85, icon: 'Terminal', highlight: true },
  { name: 'Python', category: 'languages', level: 80, icon: 'Code', highlight: true },
  { name: 'Object-Oriented Programming (OOP)', category: 'languages', level: 90, icon: 'Boxes', highlight: true },
  { name: 'Data Structures & Algorithms', category: 'languages', level: 82, icon: 'Layers', highlight: false },
  { name: 'Debugging & Testing', category: 'languages', level: 85, icon: 'CheckCircle2', highlight: false },

  // Cloud & Tools
  { name: 'Git & GitHub', category: 'tools', level: 90, icon: 'GitBranch', highlight: true },
  { name: 'AWS Cloud Foundations', category: 'tools', level: 75, icon: 'Cloud', highlight: true },
  { name: 'SQL & Oracle Database', category: 'tools', level: 80, icon: 'Database', highlight: false },
  { name: 'VS Code & Android Studio', category: 'tools', level: 88, icon: 'Laptop', highlight: false },
  { name: 'Ubuntu / Linux', category: 'tools', level: 75, icon: 'TerminalSquare', highlight: false },
  { name: 'AnyLogic Simulation', category: 'tools', level: 80, icon: 'BarChart3', highlight: false }
];

export const projectsData = [
  {
    id: 'flutter-task-manager',
    title: 'Flutter Task Management Application',
    category: 'mobile',
    badge: 'Mobile App',
    summary: 'A feature-complete, modern task management mobile application built with Flutter featuring dynamic task rendering, CheckBox state tracking, and intuitive multi-screen navigation.',
    tech: ['Flutter', 'Dart', 'State Management', 'ListView.builder', 'CheckBox Widget', 'Mobile UI/UX'],
    github: 'https://github.com/Hebaaheshamm/WeekNineAssignment_flutter',
    repoName: 'Hebaaheshamm/WeekNineAssignment_flutter',
    highlights: [
      'Engineered dynamic task lists utilizing ListView.builder for optimal memory efficiency and smooth scrolling.',
      'Implemented reactive state management and interactive CheckBox widgets for instant real-time completion status toggling.',
      'Designed a multi-screen navigation hierarchy with task details screens, name inputs, and interactive counters.'
    ],
    accentGradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'api-integration-flutter',
    title: 'API Integration Flutter Application',
    category: 'mobile',
    badge: 'Mobile App',
    summary: 'A robust mobile application consuming external REST APIs using asynchronous Futures for dynamic real-time data retrieval and structured UI rendering.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Async / Futures', 'JSON Parsing', 'Error Handling'],
    github: 'https://github.com/Hebaaheshamm/WeekTenAssignment_flutter',
    repoName: 'Hebaaheshamm/WeekTenAssignment_flutter',
    highlights: [
      'Integrated external REST endpoints with asynchronous programming patterns and Futures for non-blocking UI.',
      'Implemented robust error handling, loading spinners, and structured JSON parsing.',
      'Created a clean, user-friendly presentation layout delivering seamless client-backend communication.'
    ],
    accentGradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'flight-booking-web',
    title: 'Flight Booking Responsive Website',
    category: 'web',
    badge: 'Web Platform',
    summary: 'A responsive flight booking web interface crafted with modern HTML5 and CSS3, applying clean typography best practices and cross-device adaptive layouts.',
    tech: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox & CSS Grid', 'Cross-Device UI'],
    github: 'https://github.com/Hebaaheshamm/Flight-Booking-Website',
    repoName: 'Hebaaheshamm/Flight-Booking-Website',
    highlights: [
      'Engineered cross-device compatibility ensuring flawless rendering across mobile, tablet, and widescreen viewports.',
      'Crafted custom search forms, interactive booking cards, and flight itinerary views with clean CSS typography.',
      'Focused on high accessibility, responsive viewport units, and zero-layout-shift design.'
    ],
    accentGradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    category: 'systems',
    badge: 'C++ Software',
    summary: 'A console-based C++ application for storing, indexing, and querying student records using structures, dynamic arrays, and modular algorithmic functions.',
    tech: ['C++', 'OOP', 'Data Structures', 'Search Logic', 'Modular Architecture'],
    github: 'https://github.com/Hebaaheshamm/Student-Management-System',
    repoName: 'Hebaaheshamm/Student-Management-System',
    highlights: [
      'Constructed modular data models using C++ structs and arrays for robust record indexing.',
      'Optimized search logic and filter queries to allow fast student lookup by roll number, department, and GPA.',
      'Applied clean OOP principles, memory safety, and structured error validation.'
    ],
    accentGradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'bank-office-simulation',
    title: 'Bank Office Queue Simulation',
    category: 'systems',
    badge: 'Simulation & Modeling',
    summary: 'An advanced simulation model built in AnyLogic depicting customer queueing dynamics and teller service workflows to optimize bank operational throughput.',
    tech: ['AnyLogic', 'Process Modeling', 'Queue Theory', 'Workflow Optimization'],
    github: 'https://github.com/Hebaaheshamm/Bank-Office-Simulation',
    repoName: 'Hebaaheshamm/Bank-Office-Simulation',
    highlights: [
      'Modeled stochastic customer arrival distributions and multi-teller service queues.',
      'Analyzed operational bottleneck patterns to propose data-backed staffing optimizations.',
      'Generated visual performance metrics for customer wait times and facility utilization.'
    ],
    accentGradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'encryption-decryption-system',
    title: 'Secure Encryption & Decryption System',
    category: 'systems',
    badge: 'C++ Cryptography',
    summary: 'A secure and lightweight cryptographic tool in C++ implementing encryption and decryption algorithms to protect sensitive data and text files.',
    tech: ['C++', 'Cryptography', 'File I/O', 'Data Security', 'Algorithms'],
    github: 'https://github.com/Hebaaheshamm/Encryption-Decryption-System',
    repoName: 'Hebaaheshamm/Encryption-Decryption-System',
    highlights: [
      'Dual Operation: Seamlessly executes both encryption and decryption pipelines.',
      'Data Security: Implements reliable cryptographic logic and file-handling safety.',
      'High Performance: Lightweight, fast, and optimized for straightforward execution.'
    ],
    accentGradient: 'from-rose-500 to-pink-600'
  },
  {
    id: 'bmi-calculator-flutter',
    title: 'Flutter BMI Health Calculator',
    category: 'mobile',
    badge: 'Mobile App',
    summary: 'An interactive Flutter mobile application calculating Body Mass Index with real-time feedback, custom UI sliders, and health categorization metrics.',
    tech: ['Flutter', 'Dart', 'UI Sliders', 'State Management', 'Mobile UI/UX'],
    github: 'https://github.com/Hebaaheshamm/BMI-Calculator---Flutter',
    repoName: 'Hebaaheshamm/BMI-Calculator---Flutter',
    highlights: [
      'Built custom interactive UI sliders and intuitive metric adjustment controls.',
      'Implemented instant calculation algorithms with clear visual health range categorizations.',
      'Engineered cross-platform mobile layouts following Android and iOS UI guidelines.'
    ],
    accentGradient: 'from-teal-500 to-emerald-600'
  }
];

export const experienceData = [
  {
    role: 'Technical Vice Manager',
    organization: 'Hult Prize SAMS',
    type: 'Student Activity Leadership',
    period: '2025 – Present',
    current: true,
    award: 'Promoted after Top 1 Technical Member Recognition',
    description: 'Serving as Technical Vice Manager leading the technical committee, architecting technical workshops, mentoring student developers, and overseeing project deliverables.',
    bullets: [
      'Directing technical committee strategy, curriculum design, and hands-on developer training sessions.',
      'Mentoring members across Flutter, modern front-end web development, and algorithmic problem-solving.',
      'Coordinating cross-functional engineering teams to deliver student activity digital solutions on schedule.'
    ]
  },
  {
    role: 'Full Stack Trainee',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    type: 'National Training Scholarship',
    period: '2026 – Present',
    current: true,
    description: 'Undergoing intensive professional training in Full Stack Web Development through hands-on architecture, real-world projects, and collaborative engineering sessions.',
    bullets: [
      'Sharpening full-stack web engineering skills across modern front-end (React) and back-end paradigms.',
      'Applying software design patterns, algorithmic problem-solving, and database integration.',
      'Collaborating on end-to-end projects with strict Git version control and code review workflows.'
    ]
  },
  {
    role: 'Flutter Development Member',
    organization: 'Hult Prize SAMS',
    type: 'Student Activity',
    period: '2025 – 2026',
    award: 'Awarded Top 1 Technical Member (2025/2026)',
    description: 'Engineered cross-platform mobile interfaces in Flutter, building reusable component architectures, multi-screen navigation flows, and asynchronous data pipelines.',
    bullets: [
      'Built reusable widget components and fluid responsive layouts for multi-device support.',
      'Implemented state management fundamentals and asynchronous data handling for efficient user inputs.',
      'Conducted rigorous UI/UX testing against mobile guidelines, improving app stability and visual polish.'
    ]
  },
  {
    role: 'Front-End Development Member',
    organization: 'Hult Prize SAMS',
    type: 'Student Activity',
    period: '2025 – 2026',
    description: 'Developed responsive web pages and modular UI components using HTML, CSS, and JavaScript, ensuring layout consistency and seamless usability.',
    bullets: [
      'Built modular web UI components improving page load speed and design consistency.',
      'Collaborated cross-functionally with multidisciplinary teams to scope milestones and deliver sprints.',
      'Conducted cross-browser compatibility testing and resolved UI discrepancies across screen viewports.'
    ]
  },
  {
    role: 'C++ Programming Member',
    organization: 'Hult Prize SAMS',
    type: 'Student Activity',
    period: '2024 – 2025',
    description: 'Developed beginner-to-intermediate C++ programs applying Object-Oriented Programming principles including classes, inheritance, and encapsulation.',
    bullets: [
      'Solved algorithmic challenges and participated in technical roundtables to strengthen logical reasoning.',
      'Debugged and refactored codebases to optimize computational efficiency and structural organization.',
      'Demonstrated standout technical leadership leading to promotion to Technical Vice Manager.'
    ]
  },
  {
    role: 'Social Media Member',
    organization: 'AIBE SAMS',
    type: 'Student Activity',
    period: '2025 – 2026',
    description: 'Produced engaging digital media content and event coverage materials, elevating organization digital presence and consistent visual brand identity.',
    bullets: [
      'Created high-impact promotional content including reels, infographics, and event coverage.',
      'Captured and edited visual assets during events to strengthen community engagement.',
      'Coordinated with marketing leads to plan editorial calendars and brand consistency across platforms.'
    ]
  }
];

export const certificationsData = [
  {
    title: 'Flutter for Web & Mobile: Build Fast, Flexible Applications',
    issuer: 'Udemy',
    category: 'Mobile',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    verificationUrl: 'https://www.udemy.com/certificate/UC-flutter-web-mobile/'
  },
  {
    title: 'Flutter for Mobile Application Certificate',
    issuer: 'Hult Prize',
    category: 'Mobile',
    badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    verificationUrl: 'https://www.linkedin.com/in/heba-hesham-0a3b99374/details/certifications/'
  },
  {
    title: 'Front-End Web Development',
    issuer: 'Sprints x Microsoft Summer Camp',
    category: 'Web',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    verificationUrl: 'https://sprints.ai/en-eg'
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    verificationUrl: 'https://www.credly.com/organizations/amazon-web-services/badges'
  },
  {
    title: 'Getting Started with ReactJS Components',
    issuer: 'Simplilearn SkillUp',
    category: 'Web',
    badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    verificationUrl: 'https://www.simplilearn.com/skillup-certificate'
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    verificationUrl: 'https://www.credly.com/organizations/cisco/badges'
  },
  {
    title: 'C++ Essentials 1',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    verificationUrl: 'https://www.credly.com/organizations/cisco/badges'
  },
  {
    title: 'C++ Member Training Certificate',
    issuer: 'Hult Prize SAMS',
    category: 'Programming',
    badgeColor: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
    verificationUrl: 'https://www.linkedin.com/in/heba-hesham-0a3b99374/details/certifications/'
  },
  {
    title: 'SAS Data Science & Responsible Innovation and Trustworthy AI',
    issuer: 'SAS',
    category: 'AI & Data',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    verificationUrl: 'https://www.credly.com/organizations/sas/badges'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'Security',
    badgeColor: 'border-rose-500/30 text-rose-400 bg-rose-500/10',
    verificationUrl: 'https://www.credly.com/organizations/cisco/badges'
  },
  {
    title: 'Sustainability Foundations: Core Concepts',
    issuer: 'LinkedIn Learning',
    category: 'Professional',
    badgeColor: 'border-teal-500/30 text-teal-400 bg-teal-500/10',
    verificationUrl: 'https://www.linkedin.com/learning/'
  },
  {
    title: 'Youth Empowered Courses',
    issuer: 'Coca-Cola HBC Egypt',
    category: 'Leadership',
    badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10',
    verificationUrl: 'https://www.coca-cola.com/'
  }
];
