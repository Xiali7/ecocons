const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const defisRouter = require('./routes/defis');

const app = express();

// Middleware pour analyser le corps des requêtes JSON
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
connectDB();

// Route pour la racine de l'API
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de défis d\'éco-conception aléatoires.');
});

// Utilisation des routes pour les fonctionnalités demandées
app.use('/api/defis', defisRouter);

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
