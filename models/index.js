// Exporting an object containing all of our models
const path = require("path")
module.exports = {
  Workout: require(path.join(__dirname, "../models/Workout.js"))
};