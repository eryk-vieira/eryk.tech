+++
title = 'O que é Harness Engineering e por que isso importa'
date = 2026-04-30T00:00:00Z
draft = false
tags = ['llm', 'ai', 'tooling', 'harness']
description = 'Harness Engineering organiza memória, skills e protocolos para tornar agentes baseados em LLM mais eficientes, mesmo com limitações do modelo.'
+++

A evolução da humanidade sempre foi moldada pela externalização cognitiva.
Pensamentos foram transformados em linguagem falada, a linguagem foi
transformada em escrita, a escrita passou a ser impressa em quantidades absurdas
e tudo isso acabou se transformando em artefatos digitais armazenados em
computadores.

Essas transições fizeram com que a humanidade conseguisse reorganizar sua
capacidade mental, liberando espaço limitado para focar em planejamento,
abstração e criatividade.

Existe o argumento de que essa mesma lógica pode ser aplicada ao design e ao
desenvolvimento de agentes baseados em LLMs, e que a melhoria da capacidade
desses agentes não se deve principalmente ao treinamento de modelos cada vez
maiores. Ela vem, na verdade, da realocação da carga cognitiva da computação
interna do modelo para estruturas persistentes, inspecionáveis e reutilizáveis,
organizadas em três principais pilares mediados por um conceito chamado Harness
Engineering.

## Harness Engineering

Harness Engineering é uma técnica que organiza os pilares da carga cognitiva de
um modelo, tornando o sistema de agentes muito mais eficiente sem depender
totalmente da corrida por modelos maiores, métodos de treinamento melhores e
reasoning cada vez mais sofisticado.

Essa técnica consiste em mudar a infraestrutura e o ambiente ao redor do modelo,
adicionando memória persistente, organizando habilidades reutilizáveis,
padronizando chamadas de ferramentas e guiando o modelo por meio de uma forma
explícita de controle lógico.

Modelos de LLM, por si só, ainda têm limitações técnicas que apontam diretamente
para os pilares de um harness. Janelas de contexto são limitadas, e
instruções longas acabam sendo seguidas de forma inconsistente. Harness
engineering importa porque representa, para agentes, o mesmo princípio de
externalização que a humanidade desenvolveu ao longo da sua evolução. Nesse
contexto, esse princípio é aplicado à construção e ao funcionamento de
agentes, permitindo que o modelo gerencie sua carga cognitiva de maneira mais
eficiente.

## Os pilares de um Harness

### 1. Memory

Memória é a capacidade de persistir informações sem depender da janela de
contexto e dos pesos do modelo. Ela permite armazenar conhecimentos acumulados,
como preferências do usuário e objetivos principais, que podem ser
filtrados e recuperados apenas quando necessário.

O principal ganho é que o agente não precisa mais recorrer apenas aos pesos do
modelo para acessar conhecimentos passados. Em vez disso, ele pode buscá-los em
uma base de dados persistente e pesquisável.

### 2. Skills

Skills são o empacotamento de instruções, melhores práticas e guias
organizados em artefatos reutilizáveis. O principal ganho é que o agente herda
comportamentos pré-validados em vez de improvisar a cada execução.

### 3. Protocols

Protocolos são usados para padronizar a comunicação entre sistemas, agentes
e serviços. Com isso, o agente deixa de improvisar para realizar essas
interações e passa a operar sobre um sistema estruturado que permite
governança.

Esses pilares, no entanto, não evoluem de maneira isolada em um sistema de
agentes.

Na prática, eles interagem o tempo todo e também competem entre si pela atenção
do modelo. A execução de skills pode gerar artefatos que se tornam memória. A
memória, por sua vez, pode influenciar a decisão do agente sobre quais skills e
protocolos devem ser seguidos na execução de uma tarefa específica.

É papel do harness mediar essas interações para que o funcionamento do agente
continue correto.

### Conclusão

Os avanços em modelos de LLM parecem cada vez menos expressivos. Ao mesmo tempo,
treinar novos modelos e desenvolver métodos de treinamento mais sofisticados
está cada vez mais caro.

Harness é uma técnica de engenharia de software que permite que mesmo
modelos com limitações técnicas, como janela de contexto limitada e memória não
persistente, funcionem de maneira eficiente e consigam resolver tarefas
complexas no dia a dia.
