angular.module('app').controller('MainController', function($scope, Session, CookieFactory) {
  //create a default guest user
  Session.create('guest', '*');

  $scope.acceptCookies = function() {
    CookieFactory.setCookiesOk();
    $scope.cookiesoke = false;
  }

  if (CookieFactory.getCookiesOke()) {
    $scope.cookiesoke = false;
  } else {
    $scope.cookiesoke = true;
  }
});
