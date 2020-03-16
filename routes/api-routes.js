var Workout = require("../models/workoutModel");
var mongoose = require('mongoose');

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
    	Workout.find({}).then(function(dbWorkouts) {
      		res.json(dbWorkouts);
		})
		.catch(err => {
			res.json(err);
		});
	});

	//Create a new workout. Generating a new workout ID
	app.post("/api/workouts", function(req, res) {
		Workout.create(req.body).then(function(dbWorkout) {
			console.log('Workout added', dbWorkout);
			res.json(dbWorkout);
		})
		.catch(err => {
			res.json(err);
		});
	});

	//Get all the workouts from database for preparing stats
	app.get("/api/workouts/range", function(req, res) {
    	Workout.find({}).then(function(dbWorkouts) {
			res.json(dbWorkouts);
	  })
	  .catch(err => {
		  res.json(err);
	  });
	});
}