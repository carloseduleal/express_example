var app = require('../server.js');

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
    getUser: function(req, res){
      response.send("Unique user")
    },

    createUser: function(request, response){
      var requestBody = request.body;
      creatingUser(requestBody, function(err, result){
        if (err){
          response.status(500);
          response.send("Request body is not defined");
          return;
        }
        response.status(200);
        response.send(result);
      });
    },

    deleteUser: function(req, res){
      response.send("Deleting user")
    }
  }
  return controller;
}
