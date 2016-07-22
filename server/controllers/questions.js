var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
    getAll: function(req, res) {
        console.log('Get all was called');
        Question.find({}, function(err, questions) {
            console.log('Looking for stuff!');
            if(err) {
                console.log('Error retrieving data');
                return handleError(err);
            } else {
                console.log(questions);
                res.status(200).json({data: questions});
            }
        });
    },
    postNew: function(req, res) {
        console.log('trying to find the data' + req.formData);
        var question = new Question({
            body: req.body.body,
            description: req.body.description
            // description: req.body.description
        });
        question.save(function(err) {
            if(err) {
                console.log('Something went wrong while trying to add this user: \n\n' + err);
            } else {
                console.log('Question added to DB!');
            }
        });
        res.redirect('/');
    }
};
