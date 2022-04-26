const mongoose = require('mongoose');

const candidatoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,        
    Nombre: String,
    Primer_Apellido: String,
    Segundo_Apellido: String,
    Fecha_Nacimiento: Date,    
    Imagenes: Array,    
    Descripcion: String
});

module.exports = mongoose.model("Candidato", candidatoSchema, "Candidatos");