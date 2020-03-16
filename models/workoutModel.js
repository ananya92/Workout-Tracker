const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number,
    default: 0
  },
  exercises: [{
    type: {
        type: String,
        required: "Exercise type is required",
        trim: true
    },
    name: {
        type: String,
        required: "Exercise name is required",
        trim: true
    },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;