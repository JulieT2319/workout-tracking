const db = require("../models")

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(function (dbWorkouts) {
      res.json(dbWorkouts)
    })
  })
  app.put("/api/workouts/:id", function (req, res) {
    console.log(req.body)
    db.Workout.update({ _id: req.params.id }, { $push: { "exercises": req.body } }).then(function (dbWorkouts) {
      res.json(dbWorkouts)
    })
  })


}