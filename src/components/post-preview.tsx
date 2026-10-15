import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ChartNoAxesCombined, Clock3 } from 'lucide-react';
import heatmap from '@/assets/tge-heatmap.png.asset.json';

export function PostPreview() {
  return <Link to="/posts/ewolucja-rynku-energii" className="post-preview">
    <div className="preview-image"><img src={heatmap.url} alt="Heatmapa godzinowych cen energii TGE w latach 2019–2026" width="998" height="768" loading="lazy"/></div>
    <div className="preview-copy">
      <div className="article-meta"><span className="category-tag"><ChartNoAxesCombined className="size-3"/>Analiza rynku</span><span>Polska · 2019–2026</span></div>
      <h3>Ponad 65 000 godzin na jednym obrazku. Jak ewoluował polski rynek energii?</h3>
      <p>Sezonowość, profile dobowe i zmienność cen. Historia polskiego rynku SPOT na jednej heatmapie.</p>
      <div className="preview-bottom"><span className="flex items-center gap-1"><Clock3 className="size-3"/>3 min czytania</span><span className="preview-cta">Czytaj analizę <ArrowUpRight className="size-4"/></span></div>
    </div>
  </Link>;
}