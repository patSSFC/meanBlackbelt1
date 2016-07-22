var qaApp = angular.module('qaApp', ['ngRoute']);

qaApp.config(function($routeProvider) {
    $routeProvider
        .when('/new_question', {
            templateUrl: '../partials/newQuestion.html',
            controller: 'QuestionController'
        })
        .when('/index', {
            templateUrl: '../partials/login.html'
        })
        .when('/', {
            templateUrl: '../partials/questionList.html',
            controller: 'QuestionController'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
