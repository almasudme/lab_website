
import { getConfig } from '@/components/getConfig';
export default function Page(){
  const cfg = getConfig();
  return (<main className="container">
    <h1>Publications</h1>
    <div className="grid">
      {cfg.publications.map((pub:any,i:number)=>(
        <div className="pub" key={i}>
          <div><strong>{pub.title}</strong></div>
          <div className="small">{pub.authors} — <em>{pub.venue}</em></div>
          <div className="small">
            {pub.pdf && <a href={pub.pdf} target="_blank">PDF</a>} {pub.code && <> · <a href={pub.code} target="_blank">Code</a></>} {pub.doi && <> · <a href={pub.doi} target="_blank">DOI</a></>}
          </div>
        </div>
      ))}
    </div>
  </main>);
}
