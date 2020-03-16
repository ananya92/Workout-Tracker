var Workout = require("../models/workoutModel");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
    	Workout.find({}).then(function(dbWorkouts) {
      		res.json(dbWorkouts);
    	})
    });
}