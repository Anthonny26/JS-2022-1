const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,    
    Cedula: Number,
    Nombre: String,
    Correo: String,
    Contrasena: String,
    Genero: String,
    Telefono: Number,
    Primer_Apellido: String,
    Segundo_Apellido: String,
    Fecha_Nacimiento: Date,
    Provincia: String,
    Canton: String,
    Distrito: String,
    Imagen: String,
    Is_Admin: Boolean,
    Is_Active: Boolean
});

module.exports = mongoose.model("Usuario", usuarioSchema, "Usuarios");