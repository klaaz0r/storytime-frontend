angular.module('app').directive('quizShowDirective', function() {
    return {
        restrict: 'E',
        templateUrl: '../app/components/dashboard/quiz.overview.view.html',
        controller: 'NavbarController'
    };
});
