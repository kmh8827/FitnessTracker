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

app.get('/api/workout', (req, res) => {
    // display mongoose
    Exercise.find({}, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

app.post('/api/workout', (req, res) => {
    Exercise.insertMany([
        { day: Date().getDate() },
        {
            exercises: [
                {
                    type: req.type,
                    name: req.name,
                    duration: req.duration,
                    weight: req.weight,
                    reps: req.reps,
                    sets: req.sets
                }
            ]
        }
    ]);
    res.send(newExercise);
});
