import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

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
    <footer className="site-footer"><div><span className="footer-logo">EnergyVis.</span>Departament Ryzyka</div><span>Polski rynek energii.<br className="sm:hidden"/> Perspektywa oparta na danych.</span></footer>
  </div>;
}