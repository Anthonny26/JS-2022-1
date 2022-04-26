const mongoose = require('mongoose');

const encuestaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,            
    Fecha_Inicio: Date,    
    Fecha_Fin: Date,    
    id_Organizaciones: Array,    
    id_Usuarios: Array,
    id_Resultados: Array
});

module.exports = mongoose.model("Encuesta", encuestaSchema, "Encuestas");