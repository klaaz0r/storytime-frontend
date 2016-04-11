angular.module('app').controller('LoginController', function($scope, $rootScope, AuthService) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    AuthService.login(credentials).then(function(user) {

    });
  };
});
