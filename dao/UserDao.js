module.exports = function(app){

  var database = require('../database_config/database.js');
  var ObjectId = require('mongodb').ObjectID;

  var userCollection = database.getDb().collection('user');
  var userDao = {
    insert: function (element, callback) {
			userCollection.save(element, callback);
    },
    get: function (callback) {
			userCollection.findOne({}, callback);
    },
    getAll:function (callback) {
			userCollection.find().toArray(callback);
    },
    getWithCondintion: function (condintion, callback){
      userCollection.find(condintion).toArray(callback);
    },
    clear: function (callback){
			userCollection.remove(callback);
    },
    remove: function (id, callback){
      userCollection.remove({_id: ObjectId(id) }, callback);
    },
    getById: function (id, callback){
      userCollection.findOne({"_id": new ObjectId(id) }, callback);
    }
  };
  return userDao;
}
