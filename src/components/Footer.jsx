import { profile, socials } from '../data/portfolio.js'
export default function Footer() {
  return (
    <footer className="footer">
      <p className="foot-name" aria-label={profile.name}>SHUBHAM<br />RATHOD</p>
      <div className="foot-row">
        <p className="mono">{profile.title} · Developer in Progress</p>
        <p className="foot-links">
          <a href={socials.github} target="_blank" rel="noreferrer noopener" data-hot>GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" data-hot>LinkedIn</a>
          <a href={`mailto:${socials.email}`} data-hot>Email</a>
        </p>
        <p className="mono">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
