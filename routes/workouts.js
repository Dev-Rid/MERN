const express = require('express');
const Workout = require("../model/workoutModel") // import the workout model
const router = express.Router();    


// get all workouts
router.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
})

// get a single workout
router.get("/:id", (req, res) =>{
    res.json({mssg: "get a single workout"})
})

// post a new workout
router.post("/", async(req, res) =>{
    const {title, reps, load} = req.body; // destructure the request body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout) // send the workout as a response
    } catch (error) {
        res.status(400).json({error: error.message}) // send the error message as a response    
    }

    res.json({mssg: "create a new workout"})
})

// delete a workout
router.delete("/:id", (req, res) =>{
    res.json({mssg: "delete a workout"})
})

// update a workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "update a workout"})
})

module.exports = router; // export the router to be used in app.js

