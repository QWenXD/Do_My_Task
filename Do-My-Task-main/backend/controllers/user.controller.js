// A variety of functions which create/modify Courses in the database.
// The functions take in req/res (request/response) because they respond to
// API endpoints (routes).



// TODO: sync() the database when needed.
// TODO:   ----- Check security for EVERY endpoint -------





// User  is a CLASS definition.
User = require(__dirname + '/../models/User.js');         //see /models/index.js. It builds this. We could very well require the modules/index.js file, but no - we create the database models in server.js on startup.
const Op = require("sequelize").Op;

exports.createUser = (req, res) => {

  const user_id = req.params.id;
  var result = null
  User.findAll({
      where: {
          email: req.body.email}}).then(data => {
            result = data
            if (result.length === 0){
              const user = {
                name: req.body.name,
                email: req.body.email,
                status: 0
              };
              console.log(user);
              
              // Save User in the database
              User.create(user)
                .then(data => {
                  res.send(data);
                })
                .catch(err => {
                  res.status(500).send({
                    message:
                      err.message || "Some error occurred while creating the User."
                  });
                });
            }
            else{
              res.send(result[0]);
            }
          }).catch(err => {
            console.log("error from createUser", err)
          });

}

//update only user's status
exports.updateUserStatus = (req, res) => {
  const id = req.params.id;

  User.update(req.body.status, {
    where: { id: id }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: `User with id=${id} was updated successfully.`
      });
    } else {
      res.send({
        message: `Cannot update User with id=${id}. Maybe User's details was not found or req.body is empty!`
      });
    }
  })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User's Details with id=" + id
      });
    });

};

// Retrieve all Users from the database.
exports.getAllUsers = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.getUserDetails = (req, res) => {
  res.send("probably some json with the users name & stuff");
};
exports.setUserDetails = (req, res) => {
  res.send("i should probably update the correct local DB object. remember server sets object IDs if they dont exist yet.");
};

exports.logout = (req, res) => {
  res.send("gtfo");
};

exports.loadusers = (req, res) => {
  User.create({
    firstName: "James",
    lastName: "LOL"
  });
  User.create({
    firstName: "Steven",
    lastName: "LOL"
  });
  User.create({
    firstName: "Josh",
    lastName: "LOL"
  });
  User.create({
    firstName: "Hajim",
    lastName: "LOL"
  });
  User.create({
    firstName: "Simon",
    lastName: "LOL"
  });
  User.create({
    firstName: "JinKai",
    lastName: "LOL"
  });
  res.send("6 users created");
};