const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const { Cardio, Weight } = require('./userModel.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

moongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userdb', { useNewUrlParser: true });

app.get('/', ({ body}, res) => {

});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});