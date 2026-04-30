---
name: mock-esp32-data
description: "Simula o envio de dados (MQTT) da placa ESP32 para o backend, incluindo frames de imagem e posições GPS."
---

# Skill: Mock ESP32 Data

Quando ativada, use seu conhecimento para criar ou rodar um script temporário Node.js no projeto (usando a lib `mqtt`) que envia dados sintéticos contínuos ou únicos para o servidor. 

## Passos para uso:
1. Sempre pergunte se o usuário deseja salvar o mock com o nome `mock-esp32.js` na raiz do projeto ou executar apenas no terminal.
2. Formato esperado de envio - Tópico \`esp32/gps\`: JSON contendo \`{"lat": -23.550520, "lon": -46.633308}\`.
3. Formato esperado de envio - Tópico \`esp32/frames\`: String simples ou Base64 representando a imagem.
4. Conecte no broker configurado no projeto (\`mqtt://test.mosquitto.org\` por padrão).
5. Explique que o mock vai estimular os dados do Dashboard via socket.io.