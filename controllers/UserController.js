var app = require('../server.js');
var User = require('../model/User')

module.exports = function(app) {

  var userCollection = app.dao.UserDao;

  var creatingUser = function (userObj, callback){

    userCollection.insert(userObj, function(err, result){
      if (err) {
        console.log("error inserting the data");
        console.log(err);
      }
      callback(err, result);
    });
  }

  var gettingAllUsers = function (conditionRequest, callback){
    userCollection.getAll(function (err, result) {
        if (err) {
          console.log("error getting all collections");
          console.log(err);
        }
          callback(err, result);
    });
  }

  var controller = {

    getUsers: function(request, response){
      var conditionRequest = request.body;
      gettingAllUsers(conditionRequest, function(err, result){
        if (err) {
          response.status(500);
          response.send('Cannot retrieve the user collection');
          return;
        }
        response.status(200);
        response.send(result);
      });
    },

    createUser: function(request, response){
      var requestBody = request.body;
      creatingUser(requestBody, function(err, result){
        var user = User(requestBody.name, requestBody.age, requestBody.job)
        if (user.error.length != 0){
          response.status(400);
          response.send(user);
          return;
        }
        response.status(201);
        user.error = undefined;
        response.send(user);
      });
    }
  }
  return controller;
}
