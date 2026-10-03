// Offline "Ask Shubham's Portfolio" engine. Answers ONLY from src/data/portfolio.js.
import { profile, socials, education, stack, learning, projects, certificates, progress } from '../data/portfolio.js'

const list = (a) => a.join(', ')
const projectLine = (p) => `${p.name} — ${p.kind}. Stack: ${list(p.stack)}.`

const INTENTS = [
  { id: 'who', kw: ['who', 'about', 'introduce', 'tell me about', 'summary'],
    answer: () => `${profile.name} is a ${profile.title.toLowerCase()} based in ${profile.location}. ${profile.about[0]} ${profile.about[1]}`,
    next: ['projects', 'stack', 'contact'] },
  { id: 'projects', kw: ['project', 'built', 'build', 'made', 'work', 'repo', 'portfolio-worthy', 'best project'],
    answer: () => `Projects (all linked to real repositories):\n${projects.map((p, i) => `${i + 1}. ${projectLine(p)}`).join('\n')}`,
    next: ['java', 'stack', 'learning'] },
  { id: 'java', kw: ['java'],
    answer: () => {
      const j = projects.filter((p) => p.stack.some((s) => /java$/i.test(s)) || /java/i.test(p.name))
      return `Java is Shubham's main focus. Java-related projects: ${j.map((p) => p.name).join(', ')}. Java progress on this site is self-assessed at ${progress[0].value}%, which means a learner moving toward job-ready, not an expert claim.`
    }, next: ['learning', 'projects', 'stack'] },
  { id: 'spring', kw: ['spring', 'spring boot', 'springboot', 'expert', 'master'],
    answer: () => `Spring Boot is on Shubham's path (${list(stack[1].items)} are listed under "Building toward"). The portfolio does not claim professional-level Spring Boot expertise.`,
    next: ['learning', 'stack', 'projects'] },
  { id: 'stack', kw: ['stack', 'technolog', 'skill', 'tools', 'language', 'tech', 'react', 'sql', 'python', 'git', 'linux'],
    answer: () => stack.map((s) => `${s.label}: ${list(s.items)}`).join('\n'),
    next: ['learning', 'projects', 'resume'] },
  { id: 'learning', kw: ['learn', 'dsa', 'journey', 'currently', 'progress', 'covered', 'algorithm', 'sorting', 'searching'],
    answer: () => `Learning path: ${learning.path.join(' → ')}.\nCovered so far: ${list(learning.covered)}.\nSelf-assessed progress: ${progress.map((p) => `${p.label} ${p.value}%`).join(' · ')}. This shows progression, not mastery.`,
    next: ['projects', 'stack', 'contact'] },
  { id: 'education', kw: ['educat', 'college', 'university', 'degree', 'diploma', 'study', 'dbatu', 'percentage', 'marks'],
    answer: () => education.map((e) => `${e.status}: ${e.degree}, ${e.school}. ${e.detail}`).join('\n'),
    next: ['certs', 'learning', 'contact'] },
  { id: 'certs', kw: ['cyber', 'security', 'intern', 'unisoft', 'certificate', 'certif', 'competition', 'msbte'],
    answer: () => certificates.map((c) => `${c.title} — ${c.issuer}. ${c.meta.join(' · ')}. ${c.note}`).join('\n') +
      '\nBeyond these, the portfolio does not list professional security work.',
    next: ['education', 'projects', 'resume'] },
  { id: 'resume', kw: ['resume', 'cv', 'curriculum'],
    answer: () => 'The resume is in the RESUME section of this page (view or download). If the button shows "not uploaded yet", the file has not been added to the site.',
    next: ['contact', 'projects', 'education'], action: '#resume' },
  { id: 'contact', kw: ['contact', 'email', 'reach', 'hire', 'linkedin', 'github', 'opportunit', 'looking', 'job', 'available', 'intern'],
    answer: () => `${profile.openToWork}\nEmail: ${socials.email}\nGitHub: ${socials.github}\nLinkedIn: ${socials.linkedin}`,
    next: ['resume', 'projects', 'who'], action: '#contact' },
]

const LABEL = {
  who: 'Who is Shubham?', projects: 'What has he built?', java: 'His Java work', stack: 'Current tech stack',
  learning: 'Java / DSA journey', education: 'Education', certs: 'Certificates', resume: 'Resume', contact: 'Contact',
}

function suggestions(ids) {
  return ids.map((id) => ({ label: LABEL[id], q: INTENT_Q[id] }))
}
const INTENT_Q = {
  who: 'Who is Shubham?', projects: 'What projects has Shubham built?', java: 'Show me his Java projects.',
  stack: 'What technologies does Shubham use?', learning: 'What is Shubham currently learning?',
  education: 'What is his education?', certs: 'Does he have cybersecurity experience?',
  resume: 'Can I see his resume?', contact: 'How can I contact him?',
}

export function answerOffline(question) {
  const q = question.toLowerCase()
  // Specific project by name
  const proj = projects.find((p) => q.includes(p.name.toLowerCase().split(' ')[0].toLowerCase()) && p.name.length > 3)
  if (proj) {
    return {
      text: `${proj.name} — ${proj.kind}.\nProblem: ${proj.problem}\nWhat it does: ${proj.solution}\nStack: ${list(proj.stack)}.\nSource: ${proj.github}${proj.live ? `\nLive: ${proj.live}` : ''}`,
      suggestions: suggestions(['projects', 'stack', 'contact']),
    }
  }
  let best = null, bestScore = 0
  for (const it of INTENTS) {
    const score = it.kw.reduce((s, k) => s + (q.includes(k) ? k.length : 0), 0)
    if (score > bestScore) { best = it; bestScore = score }
  }
  if (!best) {
    return {
      text: "The portfolio doesn't currently provide that information. I can only answer from what's listed here: projects, stack, learning, education, certificates, resume and contact details.",
      suggestions: suggestions(['who', 'projects', 'stack', 'contact']),
    }
  }
  return { text: best.answer(), suggestions: suggestions(best.next), action: best.action }
}

export const startSuggestions = () => suggestions(['stack', 'projects', 'learning', 'resume', 'contact'])
