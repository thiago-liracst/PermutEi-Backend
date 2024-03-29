const express = require('express');

const routes = express.Router();

const UsersController = require('./controllers/UsersController');

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.list);
routes.put('/users', UsersController.update);
routes.delete('/users', UsersController.delete);
routes.post('/updateUser', UsersController.updateAll);
routes.post('/setDisponibilidade', UsersController.setDisponibilidade);

routes.post('/login', UsersController.login);

module.exports = routes;