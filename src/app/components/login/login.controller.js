angular.module('app').controller('LoginController', function($scope, $rootScope, AuthService, $state) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    AuthService.login(credentials).then(function(res) {
      if (res.STATE === "SUCCEEDED") {
        $state.go("dashboard");
        AuthService.userinfo();
      }
    });
  };
});
