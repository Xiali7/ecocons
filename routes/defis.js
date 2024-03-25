const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getDefiAleatoire, getDefisAleatoires, ajouterDefi, modifierDefi, supprimerDefi } = require('../controllers/defiController');

// Route pour récupérer un défi aléatoire
router.get('/aleatoire', getDefiAleatoire);

// Route pour récupérer plusieurs défis aléatoires
router.get('/aleatoires/:nombre', getDefisAleatoires);

// Route pour ajouter un défi
router.post('/', authMiddleware, ajouterDefi);

// Route pour modifier un défi spécifique par son id
router.put('/:id', authMiddleware, modifierDefi);

// Route pour supprimer un défi par son id
router.delete('/:id', authMiddleware, supprimerDefi);

module.exports = router;