const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Candidato = require('../Schemas/Candidato');

//Llamadas API
//Obtiene la lista de Candidatos sin filtros
router.get('/', (req, res) => {    
    Candidato.find().exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        );   
});

//Obtener Candidato por _id
router.get('/id', (req, res) => {        
    Candidato.findById(req.query._id).exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        ).catch((err)=>{
            res.json({message: err});
        });
});

//Crea un nuevo candidato
router.post('/', (req, res) => {
    const us = new Candidato({
        _id: mongoose.Types.ObjectId(),
        Nombre: req.body.Nombre,
        Primer_Apellido: req.body.Primer_Apellido,
        Segundo_Apellido: req.body.Segundo_Apellido,
        Fecha_Nacimiento: req.body.Fecha_Nacimiento,    
        Imagenes: req.body.Imagenes,    
        Descripcion: req.body.Descripcion
    });

    us.save()  
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

//Actualiza Candidato existente
router.patch('/', (req, res) => {    
    Candidato.findByIdAndUpdate(req.query._id, req.body, {new: true})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
            console.log(err.message);
        });
});

//Elimina Candidato existente
router.delete('/', (req, res) => {
    Candidato.findByIdAndDelete(req.query._id)
        .then((data) => {
            res.send('Candidato deleted');
        })
        .catch(err => {
            res.send('Error ocurred: ' + err.message);
            console.log(err.message);
        });
});

module.exports = router;