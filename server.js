'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

fccTesting(app); // For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set("views", "./views/pug");

app.route('/').get((req, res) => {
    res.render('index', {
        title: 'Hello',
        message: 'Please log in'
    });
});

// Usamos process.env.PORT para que Render asigne el puerto automáticamente
const PORT = process.env.PORT || 4000; // Si no hay un puerto asignado, usar el 4000
app.listen(PORT, '0.0.0.0', () => {
    console.log('Listening on port ' + PORT);
});
