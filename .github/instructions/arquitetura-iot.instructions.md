---
description: "Regras sobre a integração e arquitetura IoT entre dashboard e ESP32"
applyTo: "**/*.js"
---

# Regras de Integração IoT (ESP32 <-> Dashboard)

Sempre que trabalhar na comunicação com o ESP32 ou no backend/Dashboard deste projeto, lembre-se destas regras:

1. **Protocolo:** A comunicação entre o ESP32 e o Dashboard **não** ocorre via rotas HTTP tradicionais, mas sim por **MQTT**.
2. **Broker MQTT:** O backend se conecta por padrão ao broker público \`mqtt://test.mosquitto.org\`.
3. **Tópicos e Payloads:**
   - **Imagens/Frames:** O ESP32 deve publicar no tópico \`esp32/frames\`. O dado é enviado como texto (String contendo frame/URL/Base64).
   - **Geolocalização (GPS):** O ESP32 deve publicar no tópico \`esp32/gps\`. O dado deve vir no formato JSON válido contendo obrigatoriamente as chaves \`lat\` e \`lon\`. Exemplo: \`{"lat": -23.550520, "lon": -46.633308}\`.
4. **Armazenamento e Fluxo:** O backend escuta os tópicos MQTT, salva os dados no SQLite local (\`iot_data.db\`) e os envia simultaneamente aos clientes web via WebSocket (Socket.io).
