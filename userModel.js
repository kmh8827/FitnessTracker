const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name of exercise is required'
    },
    weight: {
        type: Number,
        required: true
    }
});

const Exercise = mongoose.model('User', exerciseSchema);

module.exports = Exercise;