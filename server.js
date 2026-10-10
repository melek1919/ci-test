const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v1.0.0';

app.get('/', (req, res) => {
  res.send(`<h1>Application Swarm - ${VERSION}</h1><p>Statut : En ligne (via GitHub Actions)</p>`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', version: VERSION });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} (Version: ${VERSION})`);
});
