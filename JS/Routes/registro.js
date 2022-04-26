var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Usuario = require('../Schemas/Usuario');

//Crea un nuevo usuario
router.post('/', (req, res) => {
    const us = new Usuario({
        _id: mongoose.Types.ObjectId(),
        Cedula: req.body.Cedula,
        Nombre: req.body.Nombre,
        Correo: req.body.Correo,
        Contrasena: req.body.Contrasena,
        Genero: req.body.Genero,
        Telefono: req.body.Telefono,
        Primer_Apellido: req.body.Primer_Apellido,
        Segundo_Apellido: req.body.Segundo_Apellido,
        Fecha_Nacimiento: req.body.Fecha_Nacimiento,
        Provincia: req.body.Provincia,
        Canton: req.body.Canton,
        Distrito: req.body.Distrito,
        Imagen: req.body.Imagen,
        Is_Admin: req.body.Is_Admin,
        Is_Active: req.body.Is_Active
    });

    us.save()  
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

module.exports = router;