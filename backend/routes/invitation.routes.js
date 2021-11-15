// // When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
// // setting up the routes will determine how the server responses.

module.exports = (app) => {


    const invitationController = require("../controllers/invitation.controller.js"); //instantiating a new object
    var router = require("express").Router();       // a NEW 'Router' object. Gets globally configured to live under '/api/courses'. see blow.

    // Create Invitation with task_id and user_id
    router.post("/create", invitationController.createInvitation);

    // Retrieve Invitation with user_id
    router.get("/find/user/:id", invitationController.getInvitation_user_id);
    
    //mount the router on the app
    app.use('/api/invitation', router);

}