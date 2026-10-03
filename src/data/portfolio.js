// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH.
//  Every section of the site AND the "Ask Shubham's Portfolio" assistant read
//  from this file. Only put verified facts here. If it isn't here, the site
//  (and the assistant) will not claim it.
//  NOTE: keep this file free of asset imports — the /api/ask serverless
//  function imports it too.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shubham Rathod',
  handle: 'sr-exe',
  brand: 'SR.EXE',
  title: 'Computer Science Student',
  subtitle: 'Java Full Stack Developer in progress',
  location: 'Nagpur, Maharashtra, India',
  siteUrl: 'https://shubham-rathod-144.vercel.app/',
  repoUrl: 'https://github.com/sr-exe/portfolio-3d',
  openToWork:
    'Shubham is pursuing off-campus Software Developer roles (Android Developer and Full Stack Developer). His college does not offer campus placements.',
  about: [
    "I'm a Computer Science student building strong foundations in Java, DSA, SQL and software engineering. My direction is Java Full Stack development.",
    'I care about understanding how systems actually work — not memorising code, but reconstructing the logic from a blank page. I also explore AI/ML, cyber security, Linux, networking and modern web development.',
    "This site shows the work in progress: real projects, real repositories, real learning. I'm not pretending to have reached the destination.",
  ],
}

export const socials = {
  github: 'https://github.com/sr-exe',
  linkedin: 'https://www.linkedin.com/in/shubham-rathod-/',
  email: 'shubhamrathod4040@gmail.com',
}

// Put the real files in /public. Buttons switch on automatically once they exist.
export const resume = {
  file: 'resume.pdf', // → public/resume.pdf
  downloadName: 'Shubham-Rathod-Resume.pdf',
}

export const education = [
  {
    id: 'btech',
    status: 'CURRENT',
    degree: 'B.Tech, Computer Science Engineering',
    school: 'Dr. Babasaheb Ambedkar Technological University (DBATU)',
    detail: 'Entered through the diploma (DSY) route. Expected graduation: 2028.',
  },
  {
    id: 'diploma',
    status: 'PREVIOUS',
    degree: 'Diploma in Computer Technology',
    school: 'Priyadarshini Polytechnic, Nagpur',
    detail: '83.60%',
  },
]

// Honest segmentation — not a wall of "expert skills".
export const stack = [
  { id: 'focus', label: 'CURRENT FOCUS', note: 'Daily practice', items: ['Java', 'DSA', 'SQL', 'Backend Development'] },
  { id: 'building', label: 'BUILDING TOWARD', note: 'Next on the path', items: ['Spring Boot', 'REST APIs', 'Full Stack Engineering', 'Deployment'] },
  { id: 'exploring', label: 'EXPLORING', note: 'Curiosity', items: ['AI/ML', 'Cyber Security', 'Networking', '3D Web'] },
  { id: 'tools', label: 'TOOLS', note: 'Used regularly', items: ['Git & GitHub', 'Linux', 'React.js', 'Three.js', 'Python'] },
]

// Self-assessed progress toward being job-ready — NOT a mastery claim.
export const progress = [
  { label: 'JAVA', value: 80 },
  { label: 'DSA', value: 70 },
  { label: 'BACKEND', value: 40 },
  { label: 'FULL STACK', value: 40 },
]

export const learning = {
  path: ['Java', 'DSA', 'SQL', 'Core CS', 'Spring Boot', 'Full Stack', 'APIs', 'Databases', 'Deployment'],
  approach:
    'Learn → understand the pattern → write the logic → code → dry run → debug → recall → reconstruct without looking.',
  covered: [
    'Java fundamentals', 'Scanner & input', 'Variables & data types', 'Conditions & switch', 'Loops & nested loops',
    'Number / digit problems', 'Methods', 'Arrays', 'Strings', 'Linear search',
    'First / last / all occurrences', 'Frequency & most-frequent element', 'Two pointers', 'Sorted-array problems',
    'Move zeroes', 'Duplicate handling', 'Bubble sort (+ optimized)', 'Selection sort', 'Insertion sort', 'Binary search fundamentals',
  ],
  repos: [
    { name: 'JAVA-FILES', url: 'https://github.com/sr-exe/JAVA-FILES', note: 'Java Full Stack journey: code and notes' },
    { name: 'ALL-TARCK', url: 'https://github.com/sr-exe/ALL-TARCK', note: 'Java revision book (Day 1 → Day 28)' },
  ],
}

// Only projects verified from the public repositories' READMEs.
export const projects = [
  {
    id: 'agrispray',
    name: 'AGRISPRAY AI',
    kind: 'Web dashboard · Precision agriculture',
    problem: 'Blanket pesticide spraying wastes chemicals. Spray decisions should depend on the leaf and on the weather.',
    solution:
      'Captures a live leaf image, checks image quality, screens visible symptoms, then combines the result with live weather to recommend spraying or not. Scan history feeds analytics charts. UI in English, Hindi and Marathi.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'OpenWeather API'],
    contribution: 'Repository author.',
    github: 'https://github.com/sr-exe/AgriSpray-Ai',
    live: null,
  },
  {
    id: 'biomark',
    name: 'BIOMARK',
    kind: 'Android app · Attendance & authentication',
    problem: 'Proxy attendance and weak authentication in traditional attendance systems.',
    solution:
      'Android app combining biometric authentication with Firebase Authentication and cloud attendance storage, with separate student and admin panels. Presented at the MSBTE State Level Project Competition 2025, Nagpur Region (certificate of participation).',
    stack: ['Java', 'Android', 'Firebase', 'Android Biometric API', 'Gradle'],
    contribution: 'Repository author. Presented the project at the competition.',
    github: 'https://github.com/sr-exe/Biomark-V2',
    live: null,
  },
  {
    id: 'friday',
    name: 'FRIDAY',
    kind: 'Python · Voice assistant',
    problem: 'Repetitive desktop tasks and a wish for an assistant that understands both Hindi and English.',
    solution:
      'Personal assistant that works through voice or text, speaks back with text-to-speech and can open apps, search music and query AI models. Commands are easy to extend.',
    stack: ['Python', 'Speech / TTS', 'Gemini / OpenAI / local models'],
    contribution: 'Repository author.',
    github: 'https://github.com/sr-exe/Friday_male.V',
    live: null,
  },
  {
    id: 'shubhdeals',
    name: 'SHUBHDEALS',
    kind: 'Frontend · Affiliate eCommerce',
    problem: 'Deals from several shopping platforms are scattered. One clean interface helps compare them.',
    solution:
      'Affiliate eCommerce web app with category filters, product modal, cart, wishlist, checkout form validation, order IDs stored in localStorage and a flash-sale timer. Frontend only.',
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'EmailJS'],
    contribution: 'Repository author.',
    github: 'https://github.com/sr-exe/-ShubhDeals-Affiliate-eCommerce',
    live: 'https://sr-exe.github.io/-ShubhDeals-Affiliate-eCommerce',
  },
  {
    id: 'maharashtra',
    name: 'MAHARASHTRA EXPLORER',
    kind: 'Web · Cultural tourism',
    problem: 'Maharashtra’s cities, heritage, food and festivals are hard to explore in one place.',
    solution:
      'Interactive site with city search and filters (metro, heritage, coastal, pilgrimage, hill stations), a Leaflet map, heritage, festival and cuisine sections. Responsive.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet.js'],
    contribution: 'Repository author. Built as a college project.',
    github: 'https://github.com/sr-exe/Maharashtra-explorer-Sample-',
    live: 'https://sr-exe.github.io/Maharashtra-explorer-Sample-/',
  },
  {
    id: 'java-journey',
    name: 'JAVA FULL STACK JOURNEY',
    kind: 'Learning log · Java / DSA',
    problem: 'Memorising programs does not build problem-solving skill.',
    solution:
      'A public record of the Core Java → Full Stack path: programs, patterns, dry runs and debugging notes, with the goal of rebuilding logic without looking.',
    stack: ['Java', 'DSA', 'Git & GitHub'],
    contribution: 'Repository author. Updated as I learn.',
    github: 'https://github.com/sr-exe/JAVA-FILES',
    live: null,
  },
]

export const certificates = [
  {
    id: 'unisoft',
    title: 'Summer Internship Certificate — Cyber Security',
    issuer: 'Unisoft Technologies, Nagpur',
    meta: ['3 Jun 2024 – 13 Jul 2024', 'Done during diploma', 'Ref: Jun/ST/1403'],
    note: 'Certificate states the intern performance was good, based on the company’s evaluation.',
    file: 'certificates/unisoft-cybersecurity-certificate.pdf', // ← replace with your scan
  },
  {
    id: 'msbte',
    title: 'Certificate of Participation — State Level Project Competition 2025',
    issuer: 'Organised by Government Polytechnic, Amravati (MSBTE) · Nagpur Region',
    meta: ['20 Mar 2025', 'Project: BIOMARK', 'Participated & presented'],
    note: 'Participation certificate. Not a prize or ranking.',
    file: 'certificates/msbte-state-project-competition-2025-participation.pdf',
  },
]

export const navLinks = [
  { n: '01', label: 'WORK', href: '#work' },
  { n: '02', label: 'ABOUT', href: '#about' },
  { n: '03', label: 'STACK', href: '#stack' },
  { n: '04', label: 'JOURNEY', href: '#journey' },
  { n: '05', label: 'CERTS', href: '#certificates' },
  { n: '06', label: 'RESUME', href: '#resume' },
  { n: '07', label: 'ASK', href: '#ask' },
  { n: '08', label: 'CONTACT', href: '#contact' },
]

// Chips shown in the assistant. `q` is sent as the question.
export const askChips = [
  { label: 'His projects', q: 'What projects has Shubham built?' },
  { label: 'His tech stack', q: 'What technologies does Shubham use?' },
  { label: 'His education', q: 'What is his education?' },
  { label: 'DSA journey', q: 'What is Shubham currently learning?' },
  { label: 'Cyber security', q: 'Does he have cybersecurity experience?' },
  { label: 'His resume', q: 'Can I see his resume?' },
  { label: 'Contact', q: 'How can I contact him?' },
]
