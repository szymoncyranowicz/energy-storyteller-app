import { Link, createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({ meta: [
    { title: 'About — EnergyVis | Departament Ryzyka' },
    { name: 'description', content: 'EnergyVis — perspektywa Departamentu Ryzyka na polski rynek energii, dane i zmienność cen.' },
    { property: 'og:title', content: 'About — EnergyVis' },
    { property: 'og:description', content: 'Od danych do szerszej perspektywy na polskim rynku energii.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
});
function About() {
  return <section className="information-section"><div className="page-heading"><p className="eyebrow"><span className="eyebrow-line"/>Departament Ryzyka</p><h1>About<span className="text-primary">.</span></h1><p>Rynek energii. Perspektywa oparta na danych.</p></div><div className="information-body"><h2>EnergyVis</h2><p>Analizy polskiego rynku energii z perspektywy ryzyka. Łączymy dane i wizualizacje, by przyjrzeć się zmienności cen, profilom dobowym oraz wpływowi odnawialnych źródeł energii.</p><div className="about-topics"><span>Rynek SPOT</span><span>Zmienność cen</span><span>OZE</span><span>Data Science</span></div><Link to="/posts" className="intro-link">Przejdź do analiz <ArrowUpRight className="size-4"/></Link></div></section>;
}