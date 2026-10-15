import { Link, createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LINKEDIN_PROFILE_URL, linkedinTagUrl } from '@/lib/links';

export const Route = createFileRoute('/linkedin')({
  component: LinkedinPage,
  head: () => ({ meta: [
    { title: 'Linkedin — EnergyVis | Dyskusje o rynku energii' },
    { name: 'description', content: 'Profil EnergyVis na LinkedIn: rynek energii, Data Science i odnawialne źródła energii.' },
    { property: 'og:title', content: 'Linkedin — EnergyVis' },
    { property: 'og:description', content: 'Dyskusje o danych, energetyce i odnawialnych źródłach energii na LinkedIn.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
});

const TAGS = ['DataScience', 'Pythona', 'OZE', 'PSE'];

function LinkedinPage() {
  return <section className="information-section">
    <div className="page-heading">
      <p className="eyebrow"><Linkedin className="size-4"/>Dane i dyskusje</p>
      <h1>Linkedin<span className="text-primary">.</span></h1>
      <p>Rynek energii w szerszej dyskusji.</p>
    </div>
    <div className="information-body">
      <h2>Profil</h2>
      <a className="profile-card" href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer">
        <span className="profile-avatar"><Linkedin className="size-4"/></span>
        <span className="profile-copy">
          <span className="profile-name">Szymon Cyranowicz</span>
          <span className="profile-role">Departament Ryzyka · analizy rynku energii</span>
        </span>
        <span className="profile-cta">Otwórz profil<ArrowUpRight className="size-4"/></span>
      </a>
      <h2>Tematy z naszych analiz</h2>
      <div className="linkedin-topics">
        {TAGS.map(tag => <Button key={tag} asChild variant="outline"><a href={linkedinTagUrl(tag)} target="_blank" rel="noreferrer">#{tag}<ArrowUpRight/></a></Button>)}
      </div>
      <Link to="/posts/ewolucja-rynku-energii" className="intro-link">Przeczytaj analizę rynku energii <ArrowUpRight className="size-4"/></Link>
    </div>
  </section>;
}
