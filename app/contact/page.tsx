
import { getConfig } from '@/components/getConfig';
export default function Page(){
  const cfg = getConfig();
  return (<main className="container">
    <h1>Contact</h1>
    <div className="grid grid-2">
      <div className="card">
        <h3>Get in touch</h3>
        <p>Email <a href={`mailto:${cfg.pi.email}`}>{cfg.pi.email}</a> for inquiries.</p>
        <p className="small">{cfg.address_lines.join(' • ')}</p>
      </div>
      <div className="card">
        <h3>Location</h3>
        <div className="small">Embed a Google Map iframe here.</div>
      </div>
    </div>
  </main>);
}
