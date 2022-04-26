const mongoose = require('mongoose');

const organizacionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,        
    Nombre: String,
    Descripcion: String,    
    Imagenes: Array,
    Id_Candidatos: Array    
});

module.exports = mongoose.model("Organizacion", organizacionSchema, "Organizaciones");