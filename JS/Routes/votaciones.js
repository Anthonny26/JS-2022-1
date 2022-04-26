const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Votacion = require('../Schemas/Votacion');

//Llamadas API
//Obtiene la lista de Votacions sin filtros
router.get('/', (req, res) => {    
    Votacion.find().exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        );   
});

//Obtener Votacion por _id
router.get('/id', (req, res) => {        
    Votacion.findById(req.query._id).exec()
        .then(        
            (result) => {                
                res.json(result);
            }
        ).catch((err)=>{
            res.json({message: err});
        });
});

//Crea un nueva Votacion
router.post('/', (req, res) => {
    const us = new Votacion({
        _id: mongoose.Types.ObjectId(),
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,   
        Fecha_Inicio: req.body.Fecha_Inicio, 
        Fecha_Fin: req.body.Fecha_Fin,    
        id_Organizacion: req.body.id_Organizacion,
        id_Usuario: req.body.id_Usuario,
        id_Encuestas: req.body.id_Encuestas,
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

//Actualiza Votacion existente
router.patch('/', (req, res) => {    
    Votacion.findByIdAndUpdate(req.query._id, req.body, {new: true})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
            console.log(err.message);
        });
});

//Elimina Votacion existente
router.delete('/', (req, res) => {
    Votacion.findByIdAndDelete(req.query._id)
        .then((data) => {
            res.send('Votacion deleted');
        })
        .catch(err => {
            res.send('Error ocurred: ' + err.message);
            console.log(err.message);
        });
});

module.exports = router;