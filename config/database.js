const mongoose = require('mongoose');

const uri = "mongodb+srv://celianjub:Emma2806Celian2511@cluster0.pycgw03.mongodb.net/mydatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion à MongoDB réussie');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB :', err);
    process.exit(1);
  }
};

module.exports = connectDB;
