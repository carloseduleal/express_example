module.exports = function (app) {

  app.get('/user', app.controllers.UserController.user);
  app.get('/users', app.controllers.UserController.users);
  app.post('/user', app.controllers.UserController.createUser);
  app.delete('/user', app.controllers.UserController.deleteUser);
  
}
