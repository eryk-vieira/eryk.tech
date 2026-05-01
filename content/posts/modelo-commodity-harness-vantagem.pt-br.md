+++
title = 'Harness é o moat, LLMs são commodities'
date = 2026-05-01T00:00:00Z
draft = false
tags = ['llm', 'ai', 'tooling']
description = ''
+++

No [post anterior]({{< ref "entendendo-harness" >}}) eu defini o que é harness. Aqui o argumento é mais direto: **o modelo virou commodity, e o harness é onde está a vantagem competitiva.**

## O que mudou

Há dois anos, ter acesso a um modelo bom era diferencial. Hoje:

- Existem dezenas de modelos competentes — proprietários e abertos.
- A diferença de qualidade entre os top-5 é pequena na maioria dos casos de uso.
- O preço por token cai todo trimestre.
- Trocar de provedor é, na pior das hipóteses, alguns dias de trabalho.

Isso é o perfil clássico de uma commodity: muitos fornecedores, produto fungível, pressão constante de preço pra baixo.

## Onde está o moat

Se o modelo é commodity, **o produto não é o modelo** — é tudo o que você construiu em volta dele:

- O contexto que você sabe montar e o modelo concorrente não tem acesso.
- As ferramentas integradas que economizam horas do usuário.
- Os hooks, validações e fallbacks que tornam o sistema confiável em produção.
- A UX que faz o usuário voltar.
- Os dados de uso que você acumula e usa pra melhorar a experiência.

Isso é o harness. E harness não é commodity — é trabalho de engenharia, design de produto, e conhecimento do domínio do usuário.

## Implicações práticas

1. **Não case com um modelo.** Construa o harness assumindo que você vai trocar de modelo.
2. **Não compita no que é commodity.** Não tente ter "o melhor modelo" — tenha a melhor experiência em cima de qualquer modelo decente.
3. **Invista no que escala com você.** Cada melhoria no harness se acumula; cada melhoria no modelo expira no próximo release do concorrente.

<!-- TODO: contra-argumentos: e quando o modelo é o produto? (foundation labs) -->
<!-- TODO: exemplos: Cursor vs IDEs nativas, Claude Code vs ChatGPT puro -->

