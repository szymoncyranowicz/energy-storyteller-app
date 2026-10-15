import { Link, createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ChartNoAxesCombined, Download, Expand, Share2, Check, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { linkedinTagUrl } from '@/lib/links';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import heatmap from '@/assets/tge-heatmap.png.asset.json';

export const Route = createFileRoute('/posts/ewolucja-rynku-energii')({
  component: Article,
  head: () => ({
    meta: [
      { title: 'Ewolucja polskiego rynku energii — EnergyVis' },
      { name: 'description', content: 'Perspektywa ryzyka na polskim rynku energii. Analiza ponad 65 000 godzin notowań TGE, cen SPOT i wpływu OZE w latach 2019–2026.' },
      { property: 'og:title', content: 'Ewolucja polskiego rynku energii — EnergyVis' },
      { property: 'og:description', content: 'Jak ewoluował polski rynek energii? Ponad 65 000 godzin notowań na jednej heatmapie i analiza z perspektywy ryzyka.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
});

function TagLink({ tag, keyword }: { tag: string; keyword: string }) {
  return <a href={linkedinTagUrl(keyword)} target="_blank" rel="noreferrer">{tag}</a>;
}


function Article() {
  const [shared, setShared] = useState(false);
  const [shareError, setShareError] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  async function share() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setShareError(false);
      window.setTimeout(() => setShared(false), 3000);
    } catch { setShareError(true); }
  }
  async function download() {
    try {
      const response = await fetch(heatmap.url);
      if (!response.ok) throw new Error('download');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = 'TGE-Fixing-I-2019-2026.png'; link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDownloadError(false);
    } catch { setDownloadError(true); }
  }
  return <>
    <Link to="/posts" className="back-link">← Wszystkie posty</Link>
        <div className="analysis-layout" id="analiza">
          <aside className="analysis-sidebar" aria-label="Informacje o analizie"><div className="sidebar-sticky"><p className="sidebar-heading">Biblioteka analiz / 01</p><p className="article-number">01</p><div className="side-selected"><p>Ewolucja polskiego<br/>rynku energii</p><span>Analiza długoterminowa</span></div><div className="side-topics"><p className="sidebar-heading">Obszary analizy</p><span>Rynek SPOT</span><span>Zmienność cen</span><span>Odnawialne źródła energii</span><span>Data Science</span></div></div></aside>
          <article>
            <div className="article-meta"><span className="category-tag"><ChartNoAxesCombined className="size-3"/>Analiza rynku</span><span>Polska · 2019–2026</span><span className="flex items-center gap-1"><Clock3 className="size-3"/>3 min czytania</span></div>
            <h2 className="article-heading">📊 Ponad 65 000 godzin na jednym obrazku. Jak ewoluował polski rynek energii?</h2>
            <div className="author-row"><div className="author"><span className="author-symbol">DR</span><div><span className="author-name">Departament Ryzyka</span><span className="author-detail">Analizy rynku energetycznego</span></div></div><Button variant="ghost" size="sm" onClick={share} title="Kopiuj link do analizy">{shared ? <Check/> : <Share2/>}<span>{shared ? 'Skopiowano' : 'Udostępnij'}</span></Button></div>
            {shareError && <p role="status" className="text-sm text-destructive mb-3">Nie udało się skopiować linku. Skopiuj adres z paska przeglądarki.</p>}
            <figure className="chart-figure" id="wykres">
              <div className="chart-toolbar"><span className="chart-title"><ChartNoAxesCombined className="size-3"/>Dobowy profil cen energii</span><div className="flex gap-1"><Button variant="ghost" size="icon" aria-label="Pobierz wykres" title="Pobierz wykres" onClick={download}><Download/></Button><Dialog><DialogTrigger asChild><Button variant="ghost" size="icon" aria-label="Powiększ wykres" title="Powiększ wykres"><Expand/></Button></DialogTrigger><DialogContent className="chart-dialog"><DialogTitle>Notowania TGE · Fixing I · 2019–2026</DialogTitle><DialogDescription>Dobowy profil cen energii w PLN/MWh. Oryginalna wizualizacja.</DialogDescription><img src={heatmap.url} alt="Powiększona heatmapa godzinowych cen energii TGE w latach 2019–2026"/></DialogContent></Dialog></div></div>
              <img className="chart-image" src={heatmap.url} alt="Heatmapy cen energii TGE, Fixing I, dla lat 2019–2026. Oś pozioma: miesiące, pionowa: godziny doby. Czerwień oznacza wysokie ceny, zieleń ujemne." width="998" height="768"/>
              <figcaption className="chart-caption"><span>Źródło wykresu: TGE, Fixing I · 2019–2026</span><span>Szare pole: brak danych na wykresie</span></figcaption>
            </figure>
            {downloadError && <p role="status" className="text-sm text-destructive mt-3">Nie udało się pobrać wykresu. Spróbuj ponownie.</p>}
            <div className="article-body">
              <p>Zamiast analizować setki nudnych wykresów, postanowiłem podejść do tematu od strony <TagLink tag="#DataScience" keyword="datascience"/>. Wykorzystując <TagLink tag="#Pythona" keyword="pythona"/> przetworzyłem wieloletnie szeregi czasowe notowań z rynku SPOT (Fixing I) z lat 2019–2026.</p>
              <p>Cel? Stworzenie gęstej informacyjnie wizualizacji (heatmapy), która na jednym obrazku zamyka lata historii polskiej energetyki, ujawniając sezonowość, profile dobowe i ukryte anomalie.</p>
              <h3>Co "mówią" same dane? Wnioski widać jak na dłoni:</h3>
              <div className="findings">
                <div className="finding"><span className="finding-number">1️⃣</span><p><strong>2019–2020: Stabilna podstawa.</strong> Płaskie, przewidywalne profile dobowe oparte na energetyce konwencjonalnej.</p></div>
                <div className="finding"><span className="finding-number">2️⃣</span><p><strong>2021–2022: Rynek w kolorze głębokiej czerwieni.</strong> Świetnie widoczna na wykresie drastyczna zmienność (volatility) i historyczne piki cenowe wywołane kryzysem.</p></div>
                <div className="finding"><span className="finding-number">3️⃣</span><p><strong>2024–2026: Kanibalizacja cen.</strong> Rozrastające się „zielone wyspy” w środkowej części dnia pokazują, że ujemne ceny przestały być incydentalnym zjawiskiem. To konsekwencja coraz częstszej nadpodaży energii słonecznej względem bieżącego zapotrzebowania.</p></div>
              </div>
              <p>Wizualizacja wprost pokazuje zjawisko kanibalizacji <TagLink tag="#OZE" keyword="oze"/>. Nadpodaż energii słonecznej w godzinach południowych spycha ceny spot do bardzo niskich, a coraz częściej ujemnych poziomów. Charakterystyczny profil cen przypomina tzw. krzywą kaczki – z głębokim południowym dołkiem i stromym wieczornym wzrostem cen, który zwiększa wymagania dotyczące bilansowania systemu przez [#PSE]</p>
              <div className="article-end"><ChartNoAxesCombined className="size-4 shrink-0"/><span>Rynek SPOT / Zmienność / OZE / Data Science</span></div>
            </div>
          </article>
        </div>
  </>;
}
