const Exercise = require('../models/workout');
const router = require('express').Router();

router.get('/api/workouts', (req, res) => {
    // display mongoose
    Exercise.find({}, (err, result) => {
        console.log(result);
        if (err) res.send(err)
        else res.send(result)
    });
    // Set Total Workout Duration
    // Exercise.aggregate({
    //     $group: {
    //         totalDuration: { $sum: "$duration" }
    //     }
    // });
});

router.post('/api/workouts', (req, res) => {
    // Exercise.deleteMany({}, (err, result) => {
    //     if (err) res.send(err)
    //     else res.send(result)
    // });
    console.log('delete');
});

router.put('api/workouts/:id', (req, res) => {
    Exercise.create(req.body)
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    Exercise.find()
        .sort({ 'day': -1 })
        .limit(7)
        .sort({ 'day': 1})
        .then((err, results) => {
            if (err) res.send(err);
            else res.send(results);
        });
    });

module.exports = router;