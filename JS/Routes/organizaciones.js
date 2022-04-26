const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Organizacion = require('../Schemas/Organizacion');

//Llamadas API
//Obtiene la lista de Organizacions sin filtros
router.get('/', (req, res) => {    
    Organizacion.find().exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        );   
});

//Obtener Organizacion por _id
router.get('/id', (req, res) => {        
    Organizacion.findById(req.query._id).exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        ).catch((err)=>{
            res.json({message: err});
        });
});

//Crea un nueva Organizacion
router.post('/', (req, res) => {
    const us = new Organizacion({
        _id: mongoose.Types.ObjectId(),
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,    
        Imagenes: req.body.Imagenes,
        Id_Candidatos: req.body.Id_Candidatos    
    });

    us.save()  
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

//Actualiza Organizacion existente
router.patch('/', (req, res) => {    
    Organizacion.findByIdAndUpdate(req.query._id, req.body, {new: true})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
            console.log(err.message);
        });
});

//Elimina Organizacion existente
router.delete('/', (req, res) => {
    Organizacion.findByIdAndDelete(req.query._id)
        .then((data) => {
            res.send('Organizacion deleted');
        })
        .catch(err => {
            res.send('Error ocurred: ' + err.message);
            console.log(err.message);
        });
});

module.exports = router;