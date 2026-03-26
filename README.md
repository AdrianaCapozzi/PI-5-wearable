# PI-5 Wearable IoT Infrastructure

Este projeto cria uma infraestrutura para receber dados de frames (imagens) e geolocalização de dispositivos IoT ESP32.

## Funcionalidades

- Recebe dados via MQTT de tópicos `esp32/frames` e `esp32/gps`
- Armazena dados em banco SQLite
- Exibe dados em tempo real via WebSocket no dashboard web

## Como executar

1. Instale as dependências:
   ```
   npm install
   ```

2. Execute o servidor:
   ```
   npm start
   ```

3. Abra o navegador em `http://localhost:3000` para ver o dashboard.

## Configuração do ESP32

Configure seu ESP32 para publicar dados nos tópicos MQTT:

- Frames: Publique imagens em base64 no tópico `esp32/frames`
- Geolocalização: Publique JSON `{"lat": 0.0, "lon": 0.0}` no tópico `esp32/gps`

Use um broker MQTT compatível, como Mosquitto local ou o test.mosquitto.org usado aqui.

## Estrutura do Projeto

- `server.js`: Servidor Node.js com Express, MQTT e SQLite
- `public/index.html`: Dashboard web
- `iot_data.db`: Banco de dados SQLite (criado automaticamente)