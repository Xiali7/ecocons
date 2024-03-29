const express = require('express');
const router = express.Router();
const { getDefiAleatoire, getDefisAleatoires, ajouterDefi, modifierDefi, supprimerDefi } = require('../controllers/defiController');

// Route pour récupérer un défi aléatoire
router.get('/aleatoire', getDefiAleatoire);

// Route pour récupérer plusieurs défis aléatoires
router.get('/aleatoires/:nombre', getDefisAleatoires);

// Route pour ajouter un défi
router.post('/', ajouterDefi);

// Route pour modifier un défi spécifique par son id
router.put('/:id', modifierDefi);

// Route pour supprimer un défi par son id
router.delete('/:id', supprimerDefi);

module.exports = router;