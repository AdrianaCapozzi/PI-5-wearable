---
name: sniff-mqtt
description: "Roda um script rápido para farejar/monitorar tudo o que está trafegando nos tópicos do ESP32 via MQTT."
---

# Skill: Sniff MQTT

Ao utilizar esta skill, você facilita o debug local do tráfego MQTT. Frequentemente o backend pode não registrar dados se houver um erro de parsing na primeira etapa.

## Ações requeridas do agente:
1. Crie um arquivo temporário em ram ou no disco (ex: \`sniffer.js\`) assinando todos os tópicos relevantes (ex: \`esp32/#\`).
2. Utilize o broker correto definido no projeto (ex: \`mqtt://test.mosquitto.org\`).
3. Rode em background com \`run_in_terminal\` para escutar mensagens.
4. Opcionalmente demonstre como o usuário pode interromper o processo assim que tiver o retorno esperado.