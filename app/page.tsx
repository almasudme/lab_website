
import Link from 'next/link';
import { getConfig } from '@/components/getConfig';
export default function Page(){
  const cfg = getConfig();
  return (<main>
    <section className="hero"><div className="container">
      <span className="badge">Welcome</span>
      <h1 style={{fontSize:'2.25rem',margin:'0.5rem 0',fontWeight:800}}>{cfg.lab_name}</h1>
      <p className="small">{cfg.tagline}</p>
      <div style={{display:'flex',gap:'1rem',marginTop:'1rem'}}>
        <Link href="/research" className="badge" style={{background:'#000',color:'#fff',textDecoration:'none'}}>Explore Research</Link>
        <Link href="/people" className="badge" style={{border:'1px solid #000',background:'transparent',textDecoration:'none'}}>Meet the Team</Link>
      </div>
    </div></section>
    <section><div className="container grid grid-3">
      <div className="card"><h3>About the Lab</h3><p>We study problems at the intersection of AI, data systems, and engineering design.</p><Link href="/research">Read more →</Link></div>
      <div className="card"><h3>Join Us</h3><p>Email {cfg.pi.email} with your CV and interests.</p><Link href="/people">Open positions →</Link></div>
      <div className="card"><h3>Latest News</h3><ul className="small"><li>Aug {cfg.year}: Lab website launched.</li><li>Jul {cfg.year}: Preprint online.</li></ul><Link href="/news">All news →</Link></div>
    </div></section>
  </main>);
}
