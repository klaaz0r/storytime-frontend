angular.module('app').directive('quizShowDirective', function() {
    return {
        restrict: 'E',
        templateUrl: '../app/components/dashboard/quizzes/quiz.overview.view.html',
        controller: 'NavbarController'
    };
});
