import { Link, createFileRoute } from '@tanstack/react-router';
import { Activity, ArrowUpRight } from 'lucide-react';
import { PostPreview } from '@/components/post-preview';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({ meta: [
    { title: 'EnergyVis — Home | Rynek energii i perspektywa ryzyka' },
    { name: 'description', content: 'EnergyVis — analizy polskiego rynku energii, wizualizacje danych i perspektywa Departamentu Ryzyka.' },
    { property: 'og:title', content: 'EnergyVis — Rynek energii. Perspektywa ryzyka.' },
    { property: 'og:description', content: 'Analizy, dane i wizualizacje polskiego rynku energii.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
});

function Home() {
  return <>
    <section className="publication-intro" aria-labelledby="publication-title">
      <div><div className="eyebrow"><span className="eyebrow-line"/>Dane. Kontekst. Decyzje.</div><h1 id="publication-title">EnergyVis.<br/><span className="text-muted-foreground">Perspektywa ryzyka.</span></h1></div>
      <div className="intro-side"><p>Analizy polskiego rynku energii.<br/>Od danych do szerszej perspektywy.</p><Link to="/posts" className="intro-link">Przeglądaj posty <ArrowUpRight className="size-4"/></Link></div>
    </section>
    <section className="insight-strip" aria-label="Zakres analizy">
      <div className="strip-label"><Activity className="size-4"/>W centrum analizy</div>
      <div className="strip-item"><span className="strip-value">65 000+</span><span className="strip-description">godzin notowań<br/>na jednym wykresie</span></div>
      <div className="strip-item"><span className="strip-value">2019–2026</span><span className="strip-description">historia rynku<br/>SPOT w Polsce</span></div>
      <div className="strip-item"><span className="strip-value">TGE</span><span className="strip-description">Rynek Dnia Następnego<br/>Fixing I · PLN/MWh</span></div>
    </section>
    <section className="listing-section" aria-labelledby="latest-title"><div className="section-heading"><div><p className="eyebrow">Biblioteka analiz / 01</p><h2 id="latest-title">Najnowszy post</h2></div><Link to="/posts" className="intro-link">Wszystkie posty <ArrowUpRight className="size-4"/></Link></div><PostPreview/></section>
  </>;
}