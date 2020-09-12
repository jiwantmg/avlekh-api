const customerController = require('./customer.controller');
const staffController = require('./staff.controller');
const authController = require('./auth.controller');
const tasksController = require('./tasks.controller');
const usersController = require('./user.controller');
const user = require('../models/user');

module.exports.customerController = customerController;
module.exports.staffController = staffController;
module.exports.authController = authController;
module.exports.tasksController = tasksController;
module.exports.usersController = usersController;