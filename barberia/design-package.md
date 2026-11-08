# Colmeia Barbearia — Design Package (Tier 1)

## 1. Brand premise
Colmeia: every cell of a honeycomb fits exactly in its place. The shop works the same way: your hour is yours, every detail fits, nothing rushed. The hexagon (the LED ceiling, the honeycomb) is the one idea. Fictional brand, disclosed in the footer.

## 2. Palette (direction; exact values finalized from approved footage)
```css
:root{
  --canvas:#1a1512;        /* smoked brick-brown, never pure black */
  --panel:#241d18;
  --accent:#c9824f;        /* cognac leather: CTA and rare emphasis */
  --accent-hover:#dd9562;
  --accent-muted:rgba(201,130,79,.28);
  --hex:#e6efe9;           /* cold LED hex light, used only for the signature hex lines */
  --text-secondary:#b9aa9b;
  --text-primary:#f1e9df;
}
```

## 3. Type trio
- Display: Big Shoulders Display 700/800 (signage, condensed, industrial-classic)
- Body: Archivo 400/500
- Mono: IBM Plex Mono 400 (labels, hours, prices)

## 4. Band map (hero ~400vh, starting points)
| Band | Range | Footage moment | Copy (verbatim) | Entrance |
|---|---|---|---|---|
| 1 | 0.00 to 0.26 | Storefront at dusk, warm glow, door open | "Colmeia Barbearia." / "Na hora marcada. Sem fila, sem pressa." | Load ramp, approach-from-depth |
| 2 | 0.30 to 0.56 | Camera glides through the open doorway | "Couro, madeira e toalha quente." / "Do jeito antigo, feito com calma." | Halves parting (the doorway) |
| 3 | 0.60 to 0.84 | Gliding past chairs under hex light | "Aqui o barbeiro ouve antes de cortar." | Grid snap-align (cells fitting) |
| 4 | 0.88 to 1.00 | Rest: empty cognac chair, steaming towel | "Sua cadeira está pronta." / CTA "Agendar horário" | Word-by-word rise, staged settle |

## 5. Static hero copy
"Colmeia Barbearia." / "Na hora marcada, sem fila e sem pressa. Couro, madeira e toalha quente." / CTA "Agendar horário"

## 6. Below-fold outline (all funnel to #agendar)
1. **O ritual** (3 steps, each with image): "Conversa" ("Antes da tesoura, cinco minutos de conversa. Formato do rosto, rotina, o que você quer."), "Corte" ("Tesoura e máquina no tempo certo. Sem linha de montagem."), "Toalha quente" ("Navalha nova a cada cliente, toalha quente e acabamento com óleo cítrico.")
2. **Interactive moment: Aqueça a toalha** (press and hold): steam rises, the three promises light up: "Horário respeitado", "Ferramentas esterilizadas na sua frente", "Te ensinamos a arrumar em casa".
3. **Serviços e preços** (hex cells): Corte R$ 70 · Barba com toalha quente R$ 55 · Corte + barba R$ 115 · Acabamento R$ 30
4. **Depoimentos** (fictional, disclosed)
5. **FAQ** (real objections): atraso, corte errado, higiene, quanto tempo leva
6. **Agendar** form: nome, WhatsApp, serviço, dia preferido. JS-only success state (fictional brand demo).
7. Footer: endereço fictício, horário, "Colmeia Barbearia é uma marca fictícia criada para demonstração. Imagens geradas por IA."

## 7. Vector layer
Self-drawing hex outlines (section dividers, ritual steps), a fixed background of faint drifting hex grid + warm grain (60s+ cycle), whisper-level dust motes in lamp light. Reduced motion: final states shown.

## 8. Engineering list
Blob fetch with ring, dt-normalized lerp, gated seeks, delta-gated writes, band pacing + flick test, four-layer legibility, five live static-hero gates, complete-without-video, quality floor, whole-site-animated standard.

## 9. Copy gate
Every line above ships verbatim. Built page must pass: zero em dashes, zero stock words, body-copy sweep for AI tells.
