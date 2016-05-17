angular.module('app').controller('DashboardController' , function($scope, $rootScope, AuthService, ErrorFactory, $state) {
  $scope.credentials = {
    mentorname: $rootScope.userName
  };
  $scope.childs = {};

  $scope.register = function(credentials) {
    console.log(credentials);
    AuthService.registerChild(credentials).then(function(data) {
      console.log(data.STATE);
      if (data.STATE === "SUCCEEDED") {
        ErrorFactory.setSuccess(data.MESSAGE);
      } else if (data.STATE === "ERROR") {
        ErrorFactory.setError(data.MESSAGE);
      }
    })
  };

  $scope.loadChilds = function() {
    AuthService.loadChilds().then(function(data) {
      $scope.childs = data;
    })
  };
});
