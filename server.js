'use strict';
require('dotenv').config(); // Para leer las variables de entorno
const express = require('express');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

fccTesting(app); // For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de motor de plantillas Pug
app.set('view engine', 'pug');
app.set("views", "./views/pug");

// Ruta de inicio
app.route('/').get((req, res) => {
    res.render('pug', {
        title: 'Hello',
        message: 'Please log in'
    });
});

// Usar el puerto desde .env o 3000 por defecto
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Listening on port ' + PORT);
});
