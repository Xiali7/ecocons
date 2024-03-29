const express = require('express');
const router = express.Router();
const { getDefiAleatoire, getDefisAleatoires} = require('../controllers/defiController');

// Route pour récupérer un défi aléatoire
router.get('/aleatoire', getDefiAleatoire);

// Route pour récupérer plusieurs défis aléatoires
router.get('/aleatoires/:nombre', getDefisAleatoires);



module.exports = router;