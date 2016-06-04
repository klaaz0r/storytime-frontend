angular.module('app').controller('LoginController', function($scope, $rootScope, AuthService, $state) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    AuthService.login(credentials).then(function(res) {
      console.log(res);
      if (res.STATE === "SUCCEEDED") {
        //updating the rootscope with role and  username, DONT PLACE TO MUCH IN THE ROOT!

        $rootScope.userRole = res.MESSAGE.Type;
        $rootScope.userName = res.MESSAGE.Username;
        $rootScope.name = res.MESSAGE.Name;
        //redirect < - should be made based on mentor / child
        $state.go("dashboard");
      } else {
        //throw error
      }
    });
  };
});
