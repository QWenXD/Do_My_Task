// A variety of functions which create/modify Courses in the database.
// The functions take in req/res (request/response) because they respond to
// API endpoints (routes).



// TODO: sync() the database when needed.
// TODO:   ----- Check security for EVERY endpoint -------





// Invitation  is a CLASS definition.
Invitation = require(__dirname + '/../models/Invitation.js');         //see /models/index.js. It builds this. We could very well require the modules/index.js file, but no - we create the database models in server.js on startup.
const Op = require("sequelize").Op;

exports.createInvitation = (req,res) =>{
    const invitation = {
      task_id:req.body.task_id, 
      user_id: req.body.user_id,
      status: null
    };
    console.log(invitation);
  
    // Save User in the database
    Invitation.create(invitation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Invitation."
        });
      });
      
  }

// get all invitations with user id
exports.getInvitation_user_id = (req,res) =>{
    const user_id = req.params.id;

    Invitation.findAll({
        where: {
            user_id: user_id}}).then(data => {
                res.send(data);
            }).catch(err => {
            res.status(500).send({
                message: "Error retrieving Invitation with user_id = " + id
            });
    });
};

//update invitation's status with invitation's id and accepts status and user_id  
exports.updatInvitationStatus = (req, res) => {
    const id = req.params.id;
    const user_id = req.params.user_id;

    
    Invitation.update(req.body.status, {
      where: { id: id }
    }).then(num => {
        if (num == 1) {
          res.send({
            message: `Invitation with id=${id} was updated successfully.`
          });
        } else {
          res.send({
            message: `Cannot update Invitation with id=${id}. Maybe Invitation's details was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Invitation's Details with id=" + id
        });
      });

      Invitation.findAll({
        where: {
            user_id: user_id}}).then(data => {
                console.log(data)
            }).catch(err => {
                console.log("Error retrieving Invitation with user_id = " + id) 
            });
  
  };

  

