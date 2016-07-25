var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function(req ,res) {
        var quote = new Quote({name: req.params.name, email: req.params.email});
        quote.save(function(err, quote) {
            if(err) {
                console.log('Error while trying to save quote');
            } else {
                res.json(quote);
            }
        })
    }
}
