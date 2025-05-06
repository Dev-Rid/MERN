const express = require('express');

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
router.post("/", (req, res) =>{
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

