const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mqtt = require('mqtt');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuração do banco de dados SQLite
const db = new sqlite3.Database('./iot_data.db');

// Criar tabelas se não existirem
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS frames (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    data TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS geolocation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    latitude REAL,
    longitude REAL
  )`);
});

// Conectar ao broker MQTT (usando um broker público para teste, como test.mosquitto.org)
const mqttClient = mqtt.connect('mqtt://test.mosquitto.org');

mqttClient.on('connect', () => {
  console.log('Conectado ao broker MQTT');
  mqttClient.subscribe('esp32/frames');
  mqttClient.subscribe('esp32/gps');
});

mqttClient.on('message', (topic, message) => {
  const data = message.toString();
  console.log(`Mensagem recebida no tópico ${topic}: ${data}`);

  if (topic === 'esp32/frames') {
    // Armazenar frame (assumindo base64 ou URL)
    db.run('INSERT INTO frames (data) VALUES (?)', [data], function(err) {
      if (err) console.error(err);
      else io.emit('newFrame', { id: this.lastID, data });
    });
  } else if (topic === 'esp32/gps') {
    // Armazenar geolocalização (formato JSON: {"lat": 0.0, "lon": 0.0})
    try {
      const gps = JSON.parse(data);
      db.run('INSERT INTO geolocation (latitude, longitude) VALUES (?, ?)', [gps.lat, gps.lon], function(err) {
        if (err) console.error(err);
        else io.emit('newLocation', { id: this.lastID, latitude: gps.lat, longitude: gps.lon });
      });
    } catch (e) {
      console.error('Erro ao parsear GPS:', e);
    }
  }
});

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota para obter dados recentes
app.get('/api/frames', (req, res) => {
  db.all('SELECT * FROM frames ORDER BY timestamp DESC LIMIT 10', (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(rows);
  });
});

app.get('/api/locations', (req, res) => {
  db.all('SELECT * FROM geolocation ORDER BY timestamp DESC LIMIT 10', (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(rows);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});