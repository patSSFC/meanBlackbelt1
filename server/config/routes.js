var mongoose = require('mongoose');
var questions = require('../controllers/questions.js')
console.log('loaded routes');
module.exports = function(app){
    console.log('ya!');
    app.get('/list', function(req, res) {
        console.log('inside GET / route');
        questions.getAll(req, res);
    });
    app.post('/new_question', function(req, res) {
        console.log('inside POST /new_question route');
        questions.postNew(req, res);
        // res.send({redirect: '/blog'});
    });
};
