import { Link } from '@tanstack/react-router';
import { Linkedin } from 'lucide-react';
import type { ReactNode } from 'react';
import { LINKEDIN_PROFILE_URL } from '@/lib/links';

export function PublicationShell({ children }: { children: ReactNode }) {
  return <div className="site-wrap">
    <header className="site-header">
      <Link className="brand" to="/" aria-label="EnergyVis — Home"><span className="brand-logo">EnergyVis<span className="text-primary">.</span></span><span className="brand-divider"/><span className="brand-caption">Departament<br/>Ryzyka</span></Link>
      <nav className="header-nav" aria-label="Nawigacja">
        <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'active' }}>Home</Link>
        <Link to="/linkedin" activeProps={{ className: 'active' }}>Linkedin</Link>
        <Link to="/posts" activeProps={{ className: 'active' }}>Posts</Link>
        <Link to="/about" activeProps={{ className: 'active' }}>About</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="site-footer">
      <div><span className="footer-logo">EnergyVis.</span>Departament Ryzyka</div>
      <div className="footer-right">
        <span>Polski rynek energii.<br className="sm:hidden"/> Perspektywa oparta na danych.</span>
        <a className="footer-social" href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer"><Linkedin className="size-3"/>LinkedIn</a>
      </div>
    </footer>
  </div>;
}
