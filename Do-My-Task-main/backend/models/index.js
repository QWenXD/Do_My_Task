global.db.users = require("./User.js");
global.db.tasks = require("./Task.js");
global.db.invitation = require("./Invitation.js");

//don't show the log when it is in "test" environment
const config = require('config');
if (config.util.getEnv('NODE_ENV') == 'test') {
    sequelize.options.logging = false
}


//ASSOCIATION


global.db.users.Task = global.db.users.hasMany(global.db.tasks);


global.db.users.belongsToMany(global.db.tasks, { through: 'Invitation' });
global.db.tasks.belongsToMany(global.db.users, { through: 'Invitation' });


// global.db.sync({ force: true }); // This creates the table, dropping it first if it already existed (might need to remove)
module.exports = db;        //Controllers look for db, then classes off that.

