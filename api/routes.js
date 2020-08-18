'use strict';

const usersController = require('./users.controller');

module.exports = function (app) {
  app.route('/users').get(usersController.findAll);
  app.route('/users/:id').get(usersController.findById);
  app.route('/users').post(usersController.save);
  app.route('/users/:id').put(usersController.update);
  app.route('/users/:id').delete(usersController.delete);
};
