---
name: generate-playwright-e2e
description: "Gera regras e templates E2E focados para validações e conexões de socket do painel."
---

# Skill: Generate Playwright E2E

Sempre que ativada, auxilie a construir testes ponta-a-ponta robustos utilizando Playwright onde o foco é o Dashboard reagir a mensagens de hardware.

## Regras ao gerar testes para este projeto:
1. O teste sempre deve considerar injetar o Mock MQTT no Broker para validar se o Socket.io empurrou a atualização visual no frontend.
2. Crie ou edite arquivos dentro de pastas especificamente denominadas de testes (ex: \`tests/\` ou siga a convenção existente buscando arquivos \`*.spec.js\`).
3. Foque em métodos do Playwright como `.isVisible()`, \`.toHaveText()\` esperando de forma assíncrona o socket atualizar a DOM.