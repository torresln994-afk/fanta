# Design package: The King of Parfums, J'adore hero (Tier 1)

## 1. Brand premise
One idea: **original**. The buyer's number one fear is the fake ("será que é original?", "não fixa", "embalagem violada"). The King of Parfums answers it with facts: originals bought from accredited importers, since 2016. Every section teaches and sells "original". The interactive moment: the visitor presses and holds a gold crown seal to break it, and the guarantees light up one by one.

## 2. Palette (sampled from the footage: marble ledge, deep sea, amber liquid)
```css
:root{
  --canvas:#F3EBDF;        /* warm marble ivory */
  --panel:#EADFCF;         /* raised marble */
  --sea:#0F1B30;           /* the deep sea, dark bands */
  --accent:#8E6015;        /* amber gold, CTA and rare emphasis */
  --accent-hover:#744D0F;
  --accent-muted:#C9A15A;  /* glints, borders, particles */
  --text-secondary:#4A5468;
  --text-primary:#14213A;  /* sea navy ink */
}
```

## 3. Type trio
Bodoni Moda 400/500 + italic 400 (display), Jost 300/400/500 (body, same family the store uses), DM Mono 400 (labels).

## 4. Band map (hero 420vh, starting points)
| Band | Range | Footage moment | Copy | Entrance |
|---|---|---|---|---|
| 1 | 0.00 to 0.28 | wide: bottle on the ledge, sea sparkling | "Perfume original. Sem dúvida." / "The King of Parfums, desde 2016." | word rise on load |
| 2 | 0.34 to 0.62 | push-in, light beam sweeps the glass | "Fixação de verdade começa num frasco de verdade." | light-sweep snap (chars slide in left to right like the beam) |
| 3 | 0.68 to 1.00 | rest: bottle close, golden bokeh | "J'adore Dior." / "Original, direto de importadores credenciados." / CTA | staged word rise |

## 5. Static hero copy
"Perfume original. Sem dúvida." / "J'adore Dior e as maiores casas do mundo, direto de importadores credenciados. Desde 2016." / Ver na loja · Falar no WhatsApp

## 6. Below fold
1. O lacre (signature, hold to break the seal): "Antes de chegar até você, cada frasco passa por nós." 4 guarantees.
2. O J'adore: ending frame + notes (ylang-ylang, rosa damascena, jasmim) + CTA.
3. Famílias: cítricos, amadeirados, especiados, orientais (4 generated stills, same golden-hour world).
4. Perfumaria árabe (dark sea band).
5. FAQ, objections in buyers' words.
6. Final CTA. No form: CTA links to the existing store and WhatsApp.
7. Footer with trademark note: independent reseller.

## 7. Vector layer
Crown line-drawing that draws itself at section heads, gold glint sparkles at whisper level, a slow caustic light layer fixed behind the page.

## 8. Engineering
Blob fetch + ring, dt-normalized lerp, gated seeks, delta-gated writes, band pacing + flick test, four-layer legibility, five live static gates, complete without video, quality floor.

## 9. Copy gate
Copy ships verbatim. Zero em dashes, zero stock words, AI-tell sweep before anyone sees it.
