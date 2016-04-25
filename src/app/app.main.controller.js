angular.module('app').controller('MainController', function($scope, $rootScope, Session, CookieFactory) {
  //create a default guest user
  Session.create('guest', '*');
 $rootScope.userRole = '*';
  //accept cookies function
  $scope.acceptCookies = function() {
    CookieFactory.setCookiesOk();
    $scope.cookiesoke = false;
  }

  //check if cookies are already accepted
  if (CookieFactory.getCookiesOke()) {
    $scope.cookiesoke = false;
  } else {
    $scope.cookiesoke = true;
  }
});
