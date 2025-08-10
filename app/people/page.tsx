
import Image from 'next/image';
import { getConfig } from '@/components/getConfig';
export default function Page(){
  const cfg = getConfig();
  return (<main className="container">
    <h1>People</h1>
    <section style={{margin:'1rem 0 2rem'}}>
      <h2 style={{fontSize:'1.25rem'}}>Principal Investigator</h2>
      <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
        <Image src={cfg.pi.photo} alt="PI Photo" width={120} height={120} className="round" />
        <div><div style={{fontWeight:600}}>{cfg.pi.name}</div>
        <div className="small">{cfg.pi.office} • <a href={`mailto:${cfg.pi.email}`}>{cfg.pi.email}</a></div>
        <p className="small">{cfg.pi.bio}</p></div>
      </div>
    </section>
    <section><h2 style={{fontSize:'1.25rem'}}>Members</h2>
      <div className="grid grid-3">
        {cfg.members.map((m:any,i:number)=>(
          <div className="card" key={i}>
            <Image src={m.photo || '/img/student1.jpg'} alt={m.name} width={72} height={72} className="round" />
            <div style={{fontWeight:600, marginTop:'.5rem'}}>{m.name}</div>
            <div className="small">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  </main>);
}
