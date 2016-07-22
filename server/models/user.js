var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, maxlength: 20, required: true},
    email: {type: String, minlength:7, required: true, unique: true}
});

var User = mongoose.model('User', UserSchema);
