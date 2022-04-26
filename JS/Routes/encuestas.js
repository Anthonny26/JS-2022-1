const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Encuesta = require('../Schemas/Encuesta');

//Llamadas API
//Obtiene la lista de Encuestas sin filtros
router.get('/', (req, res) => {    
    Encuesta.find().exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        );   
});

//Obtener Encuesta por _id
router.get('/id', (req, res) => {        
    Encuesta.findById(req.query._id).exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        ).catch((err)=>{
            res.json({message: err});
        });
});

//Crea un nueva Encuesta
router.post('/', (req, res) => {
    const us = new Encuesta({
        _id: mongoose.Types.ObjectId(),
        Fecha_Inicio: req.body.Fecha_Inicio,    
        Fecha_Fin: req.body.Fecha_Fin,    
        id_Organizaciones: req.body.id_Organizaciones,    
        id_Usuarios: req.body.id_Usuarios,
        id_Resultados: req.body.id_Resultados
    });

    us.save()  
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

//Actualiza Encuesta existente
router.patch('/', (req, res) => {    
    Encuesta.findByIdAndUpdate(req.query._id, req.body, {new: true})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
            console.log(err.message);
        });
});

//Elimina Encuesta existente
router.delete('/', (req, res) => {
    Encuesta.findByIdAndDelete(req.query._id)
        .then((data) => {
            res.send('Encuesta deleted');
        })
        .catch(err => {
            res.send('Error ocurred: ' + err.message);
            console.log(err.message);
        });
});

module.exports = router;