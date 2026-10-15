import { createFileRoute } from '@tanstack/react-router';
import { PostPreview } from '@/components/post-preview';

export const Route = createFileRoute('/posts/')({
  component: Posts,
  head: () => ({ meta: [
    { title: 'Posts — EnergyVis | Analizy rynku energii' },
    { name: 'description', content: 'Biblioteka analiz EnergyVis: rynek SPOT, zmienność cen i odnawialne źródła energii.' },
    { property: 'og:title', content: 'Posts — EnergyVis' },
    { property: 'og:description', content: 'Analizy polskiego rynku energii i wizualizacje danych w jednym miejscu.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
});
function Posts() {
  return <section className="listing-section"><div className="page-heading"><p className="eyebrow"><span className="eyebrow-line"/>Biblioteka analiz / 01</p><h1>Posts<span className="text-primary">.</span></h1><p>Rynek SPOT. Zmienność cen. Odnawialne źródła energii.</p></div><PostPreview/></section>;
}