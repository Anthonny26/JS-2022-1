const mongoose = require('mongoose');

const resultadoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,            
    id_Organizacion: String,
    id_Candidato: String,
    id_Usuario: String
});

module.exports = mongoose.model("Resultado", resultadoSchema, "Resultados");