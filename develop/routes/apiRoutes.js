const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {

        // Aggrigate

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: { exercises: req.body }
        }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

});

router.post("/api/workouts", ({ body }, res) => {

    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({})
    .sort({ 'day': -1 })
    .limit(7)
    .sort({ 'day': 1 })
    .then(dbWorkout => {

        // Aggrigate

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});


module.exports = router;