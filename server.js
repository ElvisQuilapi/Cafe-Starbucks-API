var express = require('express');
var http = require('http');

var app = express();

app.use('/api-coffee', require('./routes/api-coffee'));

app.listen(5000, function (){
    console.log('Servidor corriendo en el puerto 5000');
});
