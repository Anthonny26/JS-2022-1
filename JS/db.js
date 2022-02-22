var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb+srv://BDJavascript:test1234@clustertest.pyt2a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

var folder = path.join(__dirname, "public");
app.use(express.static(folder));

app.use("/estudiantes", require("./api/estudiantes.js"));



app.listen(8080, function(){
  console.log("Servidor corriendo en el puerto 8080");
});