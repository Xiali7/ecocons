const Defi = require('../models/defi');

// Fonction pour récupérer un défi aléatoire
const getDefiAleatoire = async (req, res) => {
  try {
    const count = await Defi.countDocuments();
    const random = Math.floor(Math.random() * count);
    const defi = await Defi.findOne().skip(random);
    res.json(defi);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Fonction pour récupérer plusieurs défis aléatoires
const getDefisAleatoires = async (req, res) => {
    try {
        const nombre = parseInt(req.params.nombre);
        if (nombre > 100) {
            return res.status(400).json({ message: 'Le nombre maximum de défis aléatoires est de 100' });
        }
        const count = await Defi.countDocuments();
        if (nombre > count) {
            return res.status(400).json({ message: 'Le nombre demandé est supérieur au nombre total de défis' });
        }
        const defis = [];
        for(let i = 0; i < nombre; i++) {
            const random = Math.floor(Math.random() * count);
            const defi = await Defi.findOne().skip(random);
            if (!defis.some(d => d._id.toString() === defi._id.toString())) {
                defis.push(defi);
            } else {
                i--; // Réessayez si le défi est déjà dans le tableau
            }
        }
        res.json(defis);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Fonction pour ajouter défi
const ajouterDefi = async (req, res) => {
  try {
    const { titre, description, difficulte } = req.body;
    const defi = new Defi({ titre, description, difficulte });
    await defi.save();
    res.status(201).json(defi);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Fonction pour modifier défi
const modifierDefi = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, description, difficulte } = req.body;
    const defi = await Defi.findByIdAndUpdate(id, { titre, description, difficulte }, { new: true });
    if (!defi) {
      return res.status(404).json({ message: 'Défi non trouvé' });
    }
    res.json(defi);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Fonction pour supprimer défi
const supprimerDefi = async (req, res) => {
  try {
    const { id } = req.params;
    const defi = await Defi.findByIdAndDelete(id);
    if (!defi) {
      return res.status(404).json({ message: 'Défi non trouvé' });
    }
    res.json({ message: 'Défi supprimé avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = {
  getDefiAleatoire,
  getDefisAleatoires,
  ajouterDefi,
  modifierDefi,
  supprimerDefi
};
