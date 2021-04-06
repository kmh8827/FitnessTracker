const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const Exercise = require('./models/workout.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

app.get('/api/workouts', (req, res) => {
    // display mongoose
    Exercise.find({}, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

app.post('/api/workouts', (req, res) => {
    Exercise.deleteMany({}, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

app.post('api/workouts/:id', (req, res) => {
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
    ]), (err, result) => {
        if (err) res.send(err)
        else res.send(result);
    }
});

// api.get('/api/workouts/range', (req, res) => {
//     Exercise.find({}
//         .sort({ 'date': -1 })
//         .limit(7), (err, result) => {
//         if (err) res.send(err)
//         else res.send(result);
//     });
// });