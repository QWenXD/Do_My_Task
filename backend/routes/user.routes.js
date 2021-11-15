// When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
// setting up the routes will determine how the server responses.

module.exports = (app) => {


    //login
    // what course am i the coordinator of?
    // show my name at the top of stuff
    // am i the boss?

    const userController = require("../controllers/user.controller.js"); //instantiating a new object
    var router = require("express").Router();       // a NEW 'Router' object. Gets globally configured to live under '/api/courses'. see blow.


    // Load value (testing purpose)
    router.get("/load", userController.loadusers);

    // retrivev all Users data
    router.get("/find", userController.getAllUsers);

    // Create User with firstName, lastName, and token
    router.post("/create", userController.createUser);

    // Update User's status with user id
    router.put("/update/status/:id", userController.updateUserStatus);

    //mount the router on the app
    app.use('/api/user', router);
}