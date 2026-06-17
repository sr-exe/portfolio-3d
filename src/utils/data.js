import biomarkIcon from '../assets/biomark-icon.png'

export const profile = {
  name: 'Shubham Rathod',
  role: 'Full Stack Developer',
  tagline: 'B.Tech CSE · Backend-Leaning Builder',
  location: 'Nagpur, Maharashtra, India',
  email: 'shubhamrathod4040@gmail.com',
  phone: '+91 70209 89109',
  github: 'https://github.com/sr-exe',
  githubHandle: 'sr-exe',
  linkedin: 'https://www.linkedin.com/in/shubham-rathod-337b40384',
  bio: [
    "I'm a Computer Science Engineering student who builds things end-to-end — from a Kotlin app talking to GPS and a face-recognition model, to a React dashboard talking to a Postgres database. My GitHub handle is \"Explorer,\" and that's not an accident: every project is an excuse to go one layer deeper.",
    "I finished my Diploma in CSE at Priyadarshini Polytechnic, Nagpur (MSBTE) with 83.60%, and I'm now in my 3rd year of B.Tech with my sights set on an off-campus Software Developer role by 2028. My college doesn't run placements, so I've made off-campus hunting — and the portfolio of real, working systems behind it — my own responsibility.",
    "Outside of shipping code, I'm usually deep in Linux internals, poking at networking and cybersecurity fundamentals, or unwinding with music and games. I can put in 3–4 focused hours daily, every day — consistency over intensity is how I work.",
  ],
  focusAreas: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Kotlin', 'Jetpack Compose', 'Linux', 'Networking', 'Cybersecurity', 'DSA'],
  stats: [
    { num: '83.6%', label: 'Diploma Score' },
    { num: '3rd', label: 'Year B.Tech' },
    { num: '1', label: 'State-Level Award' },
    { num: '8+', label: 'GitHub Repos' },
  ],
}

export const skills = [
  { name: 'React', cat: 'Frontend', level: 85 },
  { name: 'Node.js', cat: 'Backend', level: 80 },
  { name: 'TypeScript', cat: 'Language', level: 70 },
  { name: 'PostgreSQL', cat: 'Database', level: 75 },
  { name: 'Kotlin', cat: 'Android', level: 78 },
  { name: 'Jetpack Compose', cat: 'Android', level: 72 },
  { name: 'Java', cat: 'Language', level: 80 },
  { name: 'Python', cat: 'Language', level: 75 },
  { name: 'Linux', cat: 'Systems', level: 78 },
  { name: 'Networking', cat: 'Infrastructure', level: 62 },
  { name: 'Cybersecurity', cat: 'Security', level: 55 },
  { name: 'Git / GitHub', cat: 'DevTools', level: 85 },
]

export const projects = [
  {
    title: 'BIOMARK',
    icon: biomarkIcon,
    badge: 'Award Winner',
    desc: 'A production-grade Android attendance platform built in Kotlin and Jetpack Compose. Verifies identity through on-device face recognition, confirms presence with GPS geofencing and WiFi/Bluetooth validation, queues records offline with Room, and syncs to an Appwrite backend — built specifically to make proxy attendance impossible.',
    tags: ['Kotlin', 'Jetpack Compose', 'Appwrite', 'ML Kit', 'Room', 'Hilt'],
    note: 'Awarded at the MSBTE State Level Project Competition 2025, Nagpur Region.',
    link: 'https://github.com/sr-exe',
  },
  {
    title: 'Smart Academic ERP',
    badge: 'Full Stack',
    desc: 'A college ERP SaaS with Gemini AI baked in — real-time dashboards, attendance, grading, and timetable management built for institutions that outgrew spreadsheets.',
    tags: ['React', 'Node.js', 'Gemini AI', 'Tailwind'],
    link: 'https://github.com/sr-exe',
  },
  {
    title: 'Friday_male.V',
    badge: 'Automation',
    desc: 'A Python-driven personal assistant concept for automating repetitive tasks — my first real dive into scripting intelligent behavior rather than just UIs.',
    tags: ['Python', 'Automation', 'AI'],
    link: 'https://github.com/sr-exe/Friday_male.V',
  },
  {
    title: 'Network & OS Experiments',
    badge: 'Systems',
    desc: 'A growing lab of Linux CLI scripts, TCP/IP configurations, and OS-internals exploration — understanding the machine beneath the framework.',
    tags: ['Linux', 'Bash', 'TCP/IP'],
    link: 'https://github.com/sr-exe',
  },
]

export const achievements = [
  {
    date: '2025',
    title: 'BIOMARK — State Level Award',
    place: 'MSBTE State Level Project Competition, Nagpur Region',
    desc: 'Recognized for the location-based authentication and face-verification system built into BIOMARK, designed to eliminate proxy attendance.',
  },
  {
    date: '2025 – Present',
    title: 'B.Tech, Computer Science & Engineering',
    place: '3rd Year · India',
    desc: 'Pursuing a Bachelor of Technology with a focus on full-stack systems, DSA, and backend depth — targeting an off-campus Software Developer role by 2028.',
  },
  {
    date: 'Sep 2022 – Aug 2025',
    title: 'Diploma, Computer Science & Engineering',
    place: 'Priyadarshini Polytechnic, Nagpur (MSBTE)',
    desc: 'Graduated with 83.60%, building a foundation in programming, databases, and networking that the current full-stack and Android work stands on.',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]
