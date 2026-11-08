# Lastro Advocacia: design package (Tier 1)

## 1. Brand premise
Lastro é o que sustenta o valor de algo. Na advocacia, é o que sustenta o cliente: presença, resposta e clareza. O site ensina e vende uma ideia só: com a Lastro, você nunca fica sem chão (nunca fica sem resposta, nunca fica sem saber o que acontece no seu caso). A descida pela escadaria de pedra termina no piso firme: é ali que a página pousa.

Pesquisa (Reclame Aqui, Jus, Migalhas): as dores reais são "some depois do pagamento", "ninguém responde sobre o andamento", "perdeu prazos", "honorários sem clareza". O desejo: confiança, transparência, honorários claros. Tom sóbrio (Provimento 205/2021 da OAB): nada de promessa de resultado.

CTA único: **Agendar uma conversa** (#contato).

## 2. Palette (pedra travertino + mármore verde, bronze em fio)
```css
:root{
  --canvas:#E6E2DA;        /* travertino tingido, nunca branco puro */
  --panel:#EEEBE5;
  --ink:#1B2321;           /* verde-grafite quase preto */
  --text-secondary:#4A534F;
  --accent:#1E4A3E;        /* mármore verde profundo: CTA e ênfases raras */
  --accent-hover:#153A30;
  --accent-muted:rgba(30,74,62,.16);
  --bronze:#7C5E40;        /* fios, prumo, detalhes */
  --stone-deep:#14201C;    /* seção escura do formulário */
}
```
Deviation, said out loud: um canvas claro de pedra com verde, não o escuro+âmbar padrão de "luxo".

## 3. Type trio
- Display: Marcellus 400 (letra de inscrição em pedra).
- Body: Hanken Grotesk 400/500/600.
- Mono: IBM Plex Mono 400/500 (rótulos pequenos, numeração).

## 4. Band map (hero 420vh; starting points, flick test valida)
| Band | Range | Footage moment | Copy (verbatim) | Entrance |
|---|---|---|---|---|
| 1 | 0.00 to 0.22 | topo da escadaria, luz da claraboia | kicker "Lastro Advocacia" / "Firmeza para decidir." / "Advocacia sob medida para pessoas e empresas que não aceitam ficar no escuro." | blur-to-sharp (luz chegando), carga inicial |
| 2 | 0.27 to 0.49 | descida em espiral começa | "Você nunca fica sem resposta." / "Retorno em até um dia útil. Sempre." | spiral-in: caracteres entram girando levemente, ecoando a espiral |
| 3 | 0.54 to 0.76 | meio da descida, luz mais suave | "Cada passo do seu caso, por escrito." / "Relatório mensal do andamento. Honorários definidos antes de começar." | drift-down (palavras descem com a câmera) |
| 4 | 0.82 to 1.00 | pouso no piso de mármore verde | "Chão firme para o que vem a seguir." / "Agendar uma conversa" + "Conhecer as áreas" | word-by-word rise into staged settle |

## 5. Static hero (phones, reduced motion)
Poster/ending frame + "Firmeza para decidir." / "Advocacia sob medida para pessoas e empresas que não aceitam ficar no escuro." / [Agendar uma conversa]

## 6. Below-fold outline
1. **O lastro** (manifesto, ending frame como imagem): "Lastro é o que dá valor ao que existe." / "Na advocacia, lastro é presença. É saber quem cuida do seu caso, o que está acontecendo e qual é o próximo passo. Sem sumiço depois do contrato. Sem linguagem que ninguém entende."
2. **Áreas de atuação** (lista numerada, sem cards): Empresarial e contratos; Tributário; Família e sucessões; Imobiliário; Trabalhista; Cível e contencioso. Uma linha de cada.
3. **O compromisso** (interactive moment: segure para assentar a pedra fundamental; ao completar, os três compromissos acendem): "Retorno em até um dia útil." / "Relatório mensal do andamento." / "Honorários por escrito, antes de começar."
4. **Como funciona** (3 passos, 3 imagens geradas): 01 Uma conversa reservada; 02 Um plano por escrito; 03 Acompanhamento até o fim.
5. **Perguntas frequentes**: Quanto custa? / Vou falar com o advogado mesmo? / Como acompanho meu caso? / Atendem online? / A primeira conversa tem custo?
6. **Contato** (seção escura de pedra): form Nome, E-mail ou WhatsApp, Área, Conte em poucas linhas. Botão "Agendar uma conversa". Sucesso: "Recebemos. Respondemos em até um dia útil." Handling: JS-only success state (marca fictícia, demonstração). Dito ao usuário.
7. Footer: "Lastro Advocacia é um escritório fictício, criado como demonstração. Imagens geradas por IA."

## 7. Vector layer
- Signature: o **prumo**. Um fio de bronze desce pela margem esquerda da página inteira, desenhando-se com a rolagem; o peso do prumo balança de leve e chega ao formulário. Se sair, a página perde o fio condutor.
- Divisores: arcos de espiral finos que se desenham ao entrar.
- Partículas: poeira de luz em nível de sussurro no hero estático e no fundo fixo.
- Fundo fixo: veio de pedra muito suave, deriva de 80s.
- Reduced motion: tudo no estado final.

## 8. Engineering list
Blob fetch (+ ring se > 8 MB), lerp dt-normalizado, seeks com gate, escrita no DOM só em mudança, bandas em vh com flick test, legibilidade em 4 camadas, 5 gates do hero estático ao vivo, completo sem vídeo, quality floor do scrub-pipeline.md.

## 9. Copy gate
Todo texto acima vai literal. Página passa no grep: zero travessões, zero palavras de estoque, varredura de tiques de IA.
