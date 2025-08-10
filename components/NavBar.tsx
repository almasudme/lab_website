
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavBar({labName}:{labName:string}){
  const pathname = usePathname();
  const items = [['/','Home'],['/people','People'],['/research','Research'],['/publications','Publications'],['/news','News'],['/teaching','Teaching'],['/gallery','Gallery'],['/contact','Contact']] as const;
  return (<nav className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem 1.25rem'}}>
    <Link href="/" style={{fontWeight:700,color:'var(--brand)'}}>{labName}</Link>
    <div className="nav">
      {items.map(([href,label])=> <Link key={href} href={href} aria-current={pathname===href?'page':undefined}>{label}</Link>)}
    </div>
  </nav>);
}
