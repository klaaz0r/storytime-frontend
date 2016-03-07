var app = angular.module("app", ['ngRoute']);


app.controller('rootCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'components/login/login.view.html',
      controller: 'loginCtrl'
    })
    .when('/', {
      templateUrl: '../app/components/home/home.view.html',
      controller: 'homeCtrl',
    })
    .otherwise({
      redirectTo: '/'
    });
});
