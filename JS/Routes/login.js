var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Usuario = require('../Schemas/Usuario');

router.get('/', (req, res)=> {
    Usuario.find({ Cedula: req.body.Cedula }, { Contrasena: req.body.Contrasena}).exec()
    .then((result) => {
        res.send('Login permitido');
    }).catch((err) => {
        res.send('Login denegado');
        console.log(err.message);
    });
});

module.exports = router;