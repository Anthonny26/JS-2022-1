const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Importando Rutas para API 
const candidatosRoute = require('./Routes/candidatos');
const encuestasRoute = require('./Routes/encuestas');
const organizacionesRoute = require('./Routes/organizaciones');
const resultadosRoute = require('./Routes/resultados');
const usuariosRoute = require('./Routes/usuarios');
const votacionesRoute = require('./Routes/votaciones');
const loginRoute = require('./Routes/login');
const registroRoute = require('./Routes/registro');

//Usando middleware para redireccionar
app.use('/candidatos', candidatosRoute);
app.use('/encuestas', encuestasRoute);
app.use('/organizaciones', organizacionesRoute);
app.use('/resultados', resultadosRoute);
app.use('/usuarios', usuariosRoute);
app.use('/votaciones', votacionesRoute);
app.use('/login', loginRoute);
app.use('/registro', registroRoute);


//Connect to DB
mongoose.connect('mongodb+srv://BDJavascript:Test1234@clustertest.pyt2a.mongodb.net/JSVoting?retryWrites=true&w=majority', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(()=> {
        console.log('Conexion exitosa');
    }).catch((err)=>{
        console.log('Conexion fallida error: ' + err);
    });    

//Server Listener
app.listen(3000);