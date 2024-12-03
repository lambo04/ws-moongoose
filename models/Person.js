const mongoose = require('mongoose');

// Définir le schéma pour la personne
const personSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true },
  age: {
    type:
    Number },
  favoriteFoods: { type: [String] }
});

// Créer et exporter le modèle Person
module.exports = mongoose.model('Person', personSchema);
