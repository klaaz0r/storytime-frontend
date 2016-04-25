angular.module('app').controller('NewPasswordController', function($scope, $stateParams, AuthService, ErrorFactory) {
  $scope.credentials = {
    email: $stateParams.email,
    token: $stateParams.tokenId
  };
  $scope.newpassword = function(credentials) {
    console.log(credentials);
    AuthService.newpassword(credentials).then(function(data) {
      console.log(data.STATE);
      if (data.STATE === "SUCCEEDED") {
        ErrorFactory.setSuccess(data.MESSAGE);
      } else if (data.STATE === "ERROR") {
        ErrorFactory.setError(data.MESSAGE);
      }
    })
  };
});
