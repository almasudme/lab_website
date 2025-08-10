
import Link from 'next/link';
import { getConfig } from '@/components/getConfig';
export default function Page(){
  const cfg = getConfig();
  return (<main className="container">
    <h1>Research</h1>
    <p className="small">Projects from the config file.</p>
    <div className="grid grid-2">
      {cfg.projects.map((p:any,i:number)=>(
        <div className="card" key={i}>
          <h3 style={{fontSize:'1.1rem'}}>{p.title}</h3>
          {p.summary && <p className="small">{p.summary}</p>}
          {p.link && <Link href={p.link} className="small">Project page →</Link>}
        </div>
      ))}
    </div>
  </main>);
}
