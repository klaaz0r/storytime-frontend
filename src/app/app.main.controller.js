angular.module('app').controller('MainController', function($scope,
  USER_ROLES,
  AuthService) {
  $scope.currentUser = USER_ROLES.all;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;

  $scope.setCurrentUser = function(user) {
    $scope.currentUser = user;
  };
})
