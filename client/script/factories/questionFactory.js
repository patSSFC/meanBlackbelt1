qaApp.factory('questionFactory', ['$http', function($http) {
    var question;
    var questions = [];
    var factory = this;

    this.getAllQuestions = function(callback) {
        console.log('getAll in factory');
        $http.get('/')
            .then(function(data) {
                callback(data);
            });
    };

    this.postNewQuestion = function(data) {
        $http.post('/new_question', data)
            .then(function(returnData) {
                // res.json();
            });
    }
    return factory;
}]);
