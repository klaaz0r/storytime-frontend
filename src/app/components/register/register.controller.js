angular.module('app').controller('RegisterController', function($scope, AuthService) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    console.log('logging in')
  };
});
