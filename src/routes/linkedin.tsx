import { Link, createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/linkedin')({
  component: LinkedinPage,
  head: () => ({ meta: [
    { title: 'Linkedin — EnergyVis | Dyskusje o rynku energii' },
    { name: 'description', content: 'Tematy EnergyVis na LinkedIn: rynek energii, Data Science i odnawialne źródła energii.' },
    { property: 'og:title', content: 'Linkedin — EnergyVis' },
    { property: 'og:description', content: 'Dyskusje o danych, energetyce i odnawialnych źródłach energii na LinkedIn.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
});
function LinkedinPage() {
  return <section className="information-section"><div className="page-heading"><p className="eyebrow"><Linkedin className="size-4"/>Dane i dyskusje</p><h1>Linkedin<span className="text-primary">.</span></h1><p>Rynek energii w szerszej dyskusji.</p></div><div className="information-body"><h2>Tematy z naszych analiz</h2><div className="linkedin-topics">{['DataScience', 'OZE', 'PSE'].map(tag => <Button key={tag} asChild variant="outline"><a href={`https://www.linkedin.com/search/results/all/?keywords=%23${tag}&origin=HASH_TAG_FROM_FEED`} target="_blank" rel="noreferrer">#{tag}<ArrowUpRight/></a></Button>)}</div><Link to="/posts/ewolucja-rynku-energii" className="intro-link">Przeczytaj analizę rynku energii <ArrowUpRight className="size-4"/></Link></div></section>;
}