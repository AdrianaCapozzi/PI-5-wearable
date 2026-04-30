---
name: add-dashboard-widget
description: "Automatiza a criação de novos blocos/cartões no painel frontend vinculados com o Socket.io e MQTT."
---

# Skill: Add Dashboard Widget

Você facilita a inclusão de novas métricas (ex: Umidade, Sensor Cardíaco, Bateria, Acelerômetro) no frontend do projeto. 

## Como você deve atuar:
1. Entenda qual dado do ESP32 o usuário quer mostrar no Dashboard.
2. Altere o \`public/index.html\` criando a marcação do widget na UI.
3. Altere o script Javascript no frontend para adicionar o "listener" (ex: \`socket.on('newStatus', (data) => ...)\`).
4. Mostre e edite as alterações necessárias no \`server.js\` para fazer a ponte MQTT -> Socket.io desse novo dado.
5. Siga o padrão Vanilla JS estipulado no projeto na pasta \`public/\`.