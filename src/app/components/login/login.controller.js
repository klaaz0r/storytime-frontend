angular.module('app').controller('LoginController', function($scope, loginService) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    console.log('logging in')
  };
});
