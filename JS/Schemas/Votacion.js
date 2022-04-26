const mongoose = require('mongoose');

const votacionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,        
    Nombre: String,
    Descripcion: String,   
    Fecha_Inicio: Date, 
    Fecha_Fin: Date,    
    id_Organizacion: Array,
    id_Usuario: Array,
    id_Encuestas: Array,
    id_Resultados: Array
});

module.exports = mongoose.model("Votacion", votacionSchema, "Votaciones");