const mongoose = require('mongoose');

// Connexion à MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
    });
    console.log('MongoDB connecté avec succès');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB:', err);
  }
};

module.exports = connectDB;
