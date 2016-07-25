console.log('Loaded Question Controller');

qaApp.controller('QuestionController', ['$scope', 'questionFactory', function($scope, $location, questionFactory) {
    $scope.formData = {};
    $scope.questions;
    console.log("Loaded controller");
    console.log("Loading factory into controller" + questionFactory);

    questionFactory.getAllQuestions(function(data){
        console.log('getAll in controller');
        $scope.questions =  data.data;
        console.log($scope.questions);
    });
    $scope.onSubmit = function() {
        questionFactory.postNewQuestion($scope.formData);
    }
}]);
