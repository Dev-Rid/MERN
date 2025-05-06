const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },

}, { timestamps: true }) // add createdAt and updatedAt fields


module.exports = mongoose.model("Workout", workoutSchema) // create a model called "workout" using the workoutSchema
 