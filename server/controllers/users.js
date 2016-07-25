var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function(req ,res) {
        var user = new User({name: req.params.name, email: req.params.email});
        user.save(function(err, user) {
            if(err) {
                console.log('Error while trying to save user');
            } else {
                res.json(user);
            }
        })
    }
}
