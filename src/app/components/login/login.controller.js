angular.module('app').controller('LoginController', function($scope, $rootScope, AuthService, $state) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    AuthService.login(credentials).then(function(res) {
      console.log(res);
      if (res.STATE === "SUCCEEDED") {
        //updating the rootscope with role
        $rootScope.userRole = res.MESSAGE.Type;
        //redirect
        $state.go("dashboard");
      } else {

      }
    });
  };
});
