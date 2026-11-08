# Pacote de Design: BYD (Nível 1)

## 1. Premissa
Uma palavra: **luz**. Um carro elétrico se revela como um lançamento de tecnologia, sem barulho e sem fumaça. A faixa de luz do vídeo é a assinatura: ela atravessa a página, se desenha no scroll e termina no botão de test drive. Cada seção tira uma dúvida real (recarga, bateria, pós-venda) e leva a uma ação só: **agendar um test drive**.

## 2. Paleta (direção; valores finais amostrados do vídeo aprovado)
```css
:root{
  --canvas:#0b1018;        /* grafite azulado do estúdio */
  --panel:#121a26;
  --accent:#8fd4ff;        /* azul elétrico frio, só CTA e foco */
  --accent-hover:#b5e3ff;
  --accent-muted:rgba(143,212,255,.18);
  --text-secondary:#9aa8ba;
  --text-primary:#eef3f8;  /* branco gelo do carro */
}
```

## 3. Fontes
- Display: **Michroma** 400 (larga, técnica, de emblema de carro), títulos curtos.
- Texto: **Figtree** 400 / 600.
- Mono: **JetBrains Mono** 500, rótulos pequenos e números.

## 4. Mapa de faixas (hero 400vh, pontos de partida)
| Faixa | Intervalo | Momento da filmagem | Texto | Entrada |
|---|---|---|---|---|
| 1 | 0.00 a 0.30 | luz sobre o teto | kicker "SUV 100% elétrico" / "O futuro chegou em silêncio." | desfoque para nítido |
| 2 | 0.36 a 0.64 | luz descendo pela lateral | "Você carrega em casa, enquanto dorme." / "Acorda com o tanque cheio. Só que sem tanque." | deriva para baixo (ecoa a luz descendo) |
| 3 | 0.70 a 1.00 | carro inteiro aceso, faróis ligados | "Sinta antes de decidir." / "Test drive de 40 minutos, no seu horário, com quem entende de elétrico." / CTA "Agendar test drive" | subida palavra por palavra em etapas |

Texto à esquerda, carro à direita, faixa da ação livre.

## 5. Hero estático (celular e movimento reduzido)
Quadro final de fundo. Kicker "SUV 100% elétrico". Título "O futuro chegou em silêncio." Sub "Test drive de 40 minutos, no seu horário, com quem entende de elétrico." CTA "Agendar test drive".

## 6. Abaixo da dobra
1. **A conta** (momento interativo: segure para carregar). Título "Segure. Seu carro está carregando." Barra de 0 a 100%, autonomia sobe. Ao completar: "Encher a bateria em casa: perto de R$ 60." / "Encher o tanque de um SUV a gasolina: perto de R$ 340." Nota: "Estimativa com bateria de 70 kWh a R$ 0,90 o kWh e tanque de 55 litros a R$ 6,20. Varia com a tarifa da sua cidade."
2. **Onde eu carrego?** Três passos com imagem: "Em casa" (A gente indica o carregador de parede e acompanha a instalação. Você liga o carro à noite e esquece.) / "Na cidade" (O app mostra os eletropostos perto de você, com preço e vaga livre.) / "Na estrada" (Recarga rápida nas principais rodovias. Uma pausa para o café e você segue.)
3. **Escolha o seu** (fotos reais): Song Plus, Song Premium, Sealion 6. Botão de cada um rola para o formulário com o modelo marcado.
4. **Pós-venda que responde** (contra a reclamação número um): "Revisão com preço fechado antes do serviço." / "Carregador entregue junto com o carro, não pelo correio." / "Um consultor no WhatsApp, com nome e telefone." / "Garantia de 8 anos na bateria."
5. **FAQ**: E se eu não tiver garagem? / A autonomia cai no calor? / E se a bateria estragar? / Carro elétrico desvaloriza? / A manutenção é cara?
6. **Formulário test drive**: nome, WhatsApp, modelo, melhor período. Botão "Quero meu test drive". Sucesso: "Pronto. Um consultor chama você no WhatsApp ainda hoje." Destino: estado de sucesso só em JS (site de apresentação). Trocar por serviço de formulário quando houver cliente.
7. **Rodapé**: BYD, endereço e horário genéricos, "BYD é marca registrada da BYD Company Ltd."

## 7. Camada vetorial
Linha de luz SVG que se traça no scroll entre as seções; grão leve + brilho azul derivando no fundo fixo (ciclo de 70s); partículas finas na seção da conta.

## 8. Engenharia
Tudo de `pipeline-scrub.md`: Blob (simples, clipe pequeno), rAF normalizado por dt, seeks travados, DOM por delta, faixas com teste de flick, legibilidade em 4 camadas, cinco portões vivos, completo sem vídeo, piso de qualidade.

## 9. Gate de texto
Zero travessões, zero palavras de estoque, varredura de sinais de IA antes de mostrar.
