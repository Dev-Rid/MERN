const { default: mongoose } = require("mongoose")
const Workout = require("../model/workoutModel") // import the workout model



// get all workouts
const getWorkouts = async (req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts) // send the workouts as a response
}


// get a single workouts
const getWorkout = async(req, res) => {
    const {id} = req.params // get the id from the request params

    if(!mongoose.Types.ObjectId.isValid(id)){ // check if the id is valid
        return res.status(404).json({error: "No such workout"}) // if no id is found, send a 404 error
    }

    const workout = await Workout.findById(id) // find the workout by id
    
    if(!workout){
        return res.statys(404).json({error: "No such workout"}) // if no workout is found, send a 404 error
    }

    res.status(200).json(workout)

} 


// create a new workout
const createWorkout = async(req, res) => {
    const {title, reps, load} = req.body; // destructure the request body

    // add doc to db
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout) // send the workout as a response
    } catch (error) {
        res.status(400).json({error: error.message}) // send the error message as a response    
    }

}


// delete a workout
const deleteWorkout = async(req, res) => {
    const {id} = req.params // get the id from the request params

    if(!mongoose.Types.ObjectId.isValid(id)){ // check if the id is valid
        return res.status(404).json({error: "No such workout"}) // if no id is found, send a 404 error
    }

    const workout = await Workout.findByIdAndDelete({_id: id}) // find the workout by id and delete it

    if(!workout){
        return res.status(404).json({error: "No such workout"}) // if no workout is found, send a 404 error
    }

    res.status(200).json(workout) // send the workout as a response

}


// update a workout
    const updateWorkout = async(req, res) => {  
         const {id} = req.params // get the id from the request params

        if(!mongoose.Types.ObjectId.isValid(id)){ // check if the id is valid
            return res.status(404).json({error: "No such workout"}) // if no id is found, send a 404 error
        }

        const workout = await Workout.findByIdAndUpdate({_id: id}, {
            ...req.body
        })
        
        if(!workout){
            return res.status(404).json({error: "No such workout"}) // if no workout is found, send a 404 error
        }

        res.status(200).json(workout) // send the workout as a response
    }


module.exports ={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}