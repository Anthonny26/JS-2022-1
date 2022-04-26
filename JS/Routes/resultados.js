const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Resultado = require('../Schemas/Resultado');

//Llamadas API
//Obtiene la lista de Resultados sin filtros
router.get('/', (req, res) => {    
    Resultado.find().exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        );   
});

//Obtener Resultado por _id
router.get('/id', (req, res) => {        
    Resultado.findById(req.query._id).exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        ).catch((err)=>{
            res.json({message: err});
        });
});

//Crea un nueva Resultado
router.post('/', (req, res) => {
    const us = new Resultado({
        _id: mongoose.Types.ObjectId(),
        id_Organizacion: req.body.id_Organizacion,
        id_Candidato: req.body.id_Candidato,
        id_Usuario: req.body.id_Usuario
    });

    us.save()  
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

//Actualiza Resultado existente
router.patch('/', (req, res) => {    
    Resultado.findByIdAndUpdate(req.query._id, req.body, {new: true})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
            console.log(err.message);
        });
});

//Elimina Resultado existente
router.delete('/', (req, res) => {
    Resultado.findByIdAndDelete(req.query._id)
        .then((data) => {
            res.send('Resultado deleted');
        })
        .catch(err => {
            res.send('Error ocurred: ' + err.message);
            console.log(err.message);
        });
});

module.exports = router;