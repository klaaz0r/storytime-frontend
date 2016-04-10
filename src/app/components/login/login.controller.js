angular.module('app').controller('LoginController', function($scope, loginService) {
  $scope.loginForm = {};
  $scope.loginForm.username = "";
  $scope.loginForm.password = "";


  $scope.login = function(loginForm) {
    loginService.login(loginForm).then(function(user) {
      if (user.data.status === true) {
        $scope.loggedUser = user.data.username;
      } else if (user.data.status === false) {
        $scope.loggedUser = "login was fout!";
      }
    });
  };
});
