+++
title = 'Harness is the Moat, and LLMs are Commodities'
date = 2026-05-01T00:00:00Z
draft = false
tags = ['llm', 'ai', 'tooling']
description = ''
+++

In the [previous post]({{< ref "entendendo-harness" >}}) I defined what a harness is. Here the argument is more direct: **the model has become a commodity, and the harness is where the competitive advantage lives.**

## What changed

Two years ago, having access to a good model was a differentiator. Today:

- There are dozens of capable models — proprietary and open.
- The quality gap between the top five is small for most use cases.
- The price per token drops every quarter.
- Switching providers is, at worst, a few days of work.

That's the classic profile of a commodity: many suppliers, fungible product, constant downward pressure on price.

## Where the moat is

If the model is a commodity, **the product isn't the model** — it's everything you've built around it:

- The context you know how to assemble and your competitor can't reach.
- The integrated tools that save the user hours.
- The hooks, validations, and fallbacks that make the system reliable in production.
- The UX that brings the user back.
- The usage data you accumulate and use to improve the experience.

That's the harness. And harness is not a commodity — it's engineering work, product design, and domain knowledge of the user.

## Practical implications

1. **Don't marry a model.** Build the harness assuming you'll swap the model.
2. **Don't compete on what's commodity.** Don't try to have "the best model" — have the best experience on top of any decent model.
3. **Invest in what compounds.** Every improvement to the harness accumulates; every improvement to the model expires the next time a competitor ships.

<!-- TODO: counter-arguments: when the model IS the product (foundation labs) -->
<!-- TODO: examples: Cursor vs native IDEs, Claude Code vs raw ChatGPT -->

