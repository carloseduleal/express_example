var mongoose = require('mongodb').MongoClient;
var _db;

module.exports = {
    ConnectWithDB: function(callback){
      mongoose.connect('mongodb://localhost:27017', function( err, db ) {
        _db = db;
        db.once('error', function(error) { console.log(error); });
        db.once('reconnect', function() { console.log('Database reconnect.'); });
        db.once('disconnect', function() { console.log('Database disconnect!'); });
        db.once('close', function() { console.log('Database close connection.'); });
        db.once('open', function() { console.log('Database open connection.'); });
        callback(err);
      });
    },
    getDb: function() {
      return _db;
    }
};
