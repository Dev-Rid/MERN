require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")

// express app
const app = express()


// app middleware
app.use(express.json()) // parse json data
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
 

// route handler
app.use("/api/workouts", workoutRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log("connected to db and listening to port 3000")
    })
    }).catch((error) => {
        console.log(error)
    })



