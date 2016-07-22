var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    body: {type: String, minlength: 5, maxlength: 256, required: true},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'},
    likes: {type: Number, default: 0}
});

var Answer = mongoose.model('Answer', AnswerSchema);
