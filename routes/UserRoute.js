module.exports = function (app) {

  app.get('/user', app.controllers.UserController.getUser);
  app.get('/users', app.controllers.UserController.getUsers);
  app.post('/user', app.controllers.UserController.createUser);
  app.delete('/user', app.controllers.UserController.deleteUser);
  
}
