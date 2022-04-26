var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Usuario = require('../Schemas/Usuario');

//Obtiene la lista de usuarios sin filtros
router.get('/', (req, res) => {    
    Usuario.find().exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        );   
});

//Obtener usuario por _id
router.get('/id', (req, res) => {        
    Usuario.findById(req.query._id).exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        ).catch((err)=>{
            res.json({message: err});
        });
});

//Actualiza usuario existente
router.patch('/', (req, res) => {    
    Usuario.findByIdAndUpdate(req.query._id, req.body, {new: true})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
            console.log(err.message);
        });
});

//Elimina usuario existente
router.delete('/', (req, res) => {
    Usuario.findByIdAndDelete(req.query._id)
        .then((data) => {
            res.send('User deleted');
        })
        .catch(err => {
            res.send('Error ocurred: ' + err.message);
            console.log(err.message);
        });
});

module.exports = router;