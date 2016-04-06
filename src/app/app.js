var app = angular.module("app", ['ngRoute']);


app.controller('rootCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../app/components/home/home.view.html',
      controller: 'homeCtrl',
    })
    .when('/login', {
      templateUrl: '../app/components/login/login.view.html',
      controller: 'loginCtrl'
    })
    .when('/chat', {
      templateUrl: '../app/components/chat/chat.view.html',
      controller: 'chatCtrl'
    })
    .when('/about', {
      templateUrl: '../app/components/about/about.view.html',
      controller: 'chatCtrl'
    })
    .when('/styleguide', {
      templateUrl: '../assets/css/styleguide.html',
    })
    .otherwise({
      redirectTo: '/'
    });

});
