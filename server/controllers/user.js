
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = (function() {
  return {
    addUser: function (req, res) {
      console.log('addUser req.body.name = ', req.body.name);

      var f = new Users({name: req.body.name});
      console.log('f=', f);
      f.save().then(function() {
          console.log('Successfully saved', f);
          res.json({success:true, message: f});
      })
      .catch(function(err) {
        res.json({success:false, message: err});
      });
    }
  }
})();