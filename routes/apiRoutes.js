var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/newUsers", function(req, res) {
    db.User.findAll().then(function(result) {
      res.json(result);
    });
  });

  // Create a new example
  app.post("/api/newUser", function(req, res) {
    const newUser = req.body;
    db.User.create({
      userName: newUser.userName,
      password: newUser.password,
      email: newUser.email
    }).then(function(result) {
      res.json(result);
      
    });
  });

  // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
