const mongoose = require('mongoose');

const defiSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulte: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Defi', defiSchema, 'Apidev');
