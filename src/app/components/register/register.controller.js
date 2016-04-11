angular.module('app').controller('RegisterController', function($scope, loginService) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    console.log('logging in')
  };
});
