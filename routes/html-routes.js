const path = require("path");

module.exports = function (app) {
  app.get("/", function (res, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })

  app.get("/exercise", function (res, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  })

  app.get("/stats", function (res, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  })
}