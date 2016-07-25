qaApp.factory('questionFactory', function($http) {
    console.log('Loaded factory');
    var question;
    var questions = [];
    var factory = {};

    factory.getAllQuestions = function(callback) {
        console.log('getAll in factory');
        $http.get('/list')
            .then(function(data) {
                console.log('something was returned');
                callback(data.data);
            });
    };

    factory.postNewQuestion = function(data) {
        return $http.post('/new_question', data)
            .then(function(returnData) {
                console.log("the question was posted??");
            });
    }
    console.log("Factory object " + factory);
    return factory;
});
