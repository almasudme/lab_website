
import { getConfig } from '@/components/getConfig';
export default function Footer(){
  const cfg = getConfig();
  return (<footer className="footer">
    <div className="container" style={{display:'flex',gap:'1rem',justifyContent:'space-between',flexWrap:'wrap'}}>
      <div><div style={{fontWeight:600}}>{cfg.lab_name}</div><div className="small">{cfg.address_lines.join(' • ')}</div></div>
      <div className="small">
        <div><a href={cfg.social.github} target="_blank">GitHub</a></div>
        <div><a href={cfg.social.linkedin} target="_blank">LinkedIn</a></div>
        <div><a href={cfg.social.google_scholar} target="_blank">Google Scholar</a></div>
        <div><a href={cfg.social.x} target="_blank">X (Twitter)</a></div>
      </div>
      <div className="small">© {cfg.year} {cfg.university}. Built with Next.js.</div>
    </div></footer>);
}
