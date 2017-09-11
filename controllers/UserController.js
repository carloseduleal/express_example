var app = require('../server.js');

module.exports = function(app) {

  var controller = {
    users: function(req, res){
      res.send("All the users")
    },
    user: function(req, res){
      res.send("Unique user")
    },
    createUser: function(req, res){
      res.send("Creating user")
    },
    deleteUser: function(req, res){
      res.send("Deleting user")
    }
  }
  return controller;
}
