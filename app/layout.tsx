
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { getConfig } from '@/components/getConfig';

export const metadata = { title: 'Lab Website', description: 'FP University Research Lab' };

export default function RootLayout({ children }:{children:React.ReactNode}){
  const cfg = getConfig();
  return (
    <html lang="en">
      <body>
        <NavBar labName={cfg.lab_name} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
