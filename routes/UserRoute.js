module.exports = function (app) {

  app.get('/users', app.controllers.UserController.getUsers);
  app.post('/user', app.controllers.UserController.createUser);
}
