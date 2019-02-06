var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/newUsers", function (req, res) {
    db.User.findAll().then(function (result) {
      res.json(result);
    });
  });

  // Create a new example
  app.post("/api/newUser", function (req, res) {
    const newUser = req.body;
    db.User.create({
      email: newUser.email,
      password: newUser.password,
      userName: newUser.userName
    }).then(function (result) {
      res.json(result);

    });
  });


  app.post('/login', function (req, res) {
    const attemptedLogin = req.body;
    console.log(attemptedLogin.loginUsername)
    db.User.findOne({
      where: {
        userName: attemptedLogin.loginUsername,
        password: attemptedLogin.loginPassword
      }
    }).then(function (result) {
      res.json(result);

    });
  })

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
