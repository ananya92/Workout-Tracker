var path = require("path");
module.exports = function(app) {
    // Redirect to home page - index.html
    app.get("/", function(req, res) {
       res.sendFile(path.join(__dirname,"../public/index.html"));
    });
    // Redirect to add exercise page
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname,"../public/exercise.html"));
    });
    // Redirect to statistics page
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname,"../public/stats.html"));
    });
}