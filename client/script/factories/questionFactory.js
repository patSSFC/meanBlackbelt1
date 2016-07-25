qaApp.factory('questionFactory', ['$http', function($http) {
    console.log('Loaded factory');
    var question;
    var questions = [];
    var factory = {};

    factory.getAllQuestions = function(callback) {
        console.log('getAll in factory');
        $http.get('/')
            .then(function(data) {
                callback(data);
            });
    };

    factory.postNewQuestion = function(data) {
        $http.post('/new_question', data)
            .then(function(returnData) {
                res.json(returnData.data);
            });
    }
    return factory;
}]);
