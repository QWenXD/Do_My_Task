const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = global.db;

class Task extends Model {}

Task.init({
  // Model attributes are defined here
  
  user_id: { //host 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  description: {  
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Task', // We need to choose the model name
  // timestamps: false, // these slots created automatically
  // createdAt: false,
  // updatedAt: false
});

// // the defined model is the class itself
// console.log(Task === sequelize.models.Task); // true

// so we can access this from server.js and elsewhere
module.exports = Task