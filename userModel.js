const mongoose = require('mongoose');

const cardioSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name of exercise is required'
    },
    duration: {
        type: Number,
        required: true
    }
});

const weightSchema = mongoose.mongo.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name of exercise is required'
    },
    weight: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const Cardio = mongoose.model('Cardio', cardioSchema);
const Weight = mongoose.model('Weight', weightSchema);

module.exports = { Cardio, Weight }; 