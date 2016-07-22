var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    body: {type: String, minlength:10, maxlength: 256, required: true},
    description: {type: String, maxlength: 30},
    _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
});

var Question = mongoose.model('Question', QuestionSchema);
