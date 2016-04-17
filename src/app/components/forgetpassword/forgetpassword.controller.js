angular.module('app').controller('ForgetPasswordController', function($scope, AuthService, ErrorFactory) {
  $scope.credentials = {
    email: ''
  };

  $scope.forgetpassword = function(credentials) {
    console.log(credentials);
    AuthService.forgetpassword(credentials).then(function(data) {
      console.log(data.STATE);
      if (data.STATE === "SUCCEEDED") {
        ErrorFactory.setSuccess(data.MESSAGE);
      } else if (data.STATE === "ERROR") {
        ErrorFactory.setError(data.MESSAGE);
      }
    })
  };
});
