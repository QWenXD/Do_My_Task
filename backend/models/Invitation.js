const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = global.db;

class Invitation extends Model { }

Invitation.init({
  task_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  status:{ // 0 - decline, 1- accept, null - pending
    type: DataTypes.BOOLEAN
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Invitation' // We need to choose the model name
});

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// so we can access this from server.js and elsewhere
module.exports = Invitation