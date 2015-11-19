var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = (function() {
  return {
    index: function(req, res) {
      Friend.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          console.log("result", results)
          res.json(results);
        }
      })
    },
    create: function(req, res){
      console.log(req.body)
      friend = new Friend (req.body);
      friend.save(function(err){
        if(err){
          console.log('error')
        }
        else {
          console.log('Friend Added')
          return res.json({})
        }
      })
    }
  }
})();