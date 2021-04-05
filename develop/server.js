const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const Exercise = require('./models.js');

const dbURL = process.env.MONGO_URI ? process.env.MONGO_URI : "mongodb://localhost/workouts";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(dbURL, { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

app.get('/workout/exercise', (req, res) => {
    // display mongoose
    Exercise.find({}, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

app.post('/workout/exercise', (req, res) {
    //new Excercise = req
});

