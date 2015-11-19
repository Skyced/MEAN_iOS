var friends = require('./../server/controller/friends.js');
var mongoose = require('mongoose');
module.exports = function(app) {
  app.get('/friends', function(req, res) {
    friends.index(req, res);
  });
  app.post('/friends/create', function(req, res){
  	friends.create(req, res);
  })
}