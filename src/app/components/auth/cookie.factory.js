angular.module('app').factory('CookieFactory', function($http, Session, $cookies) {
  var cookieService = {};
  cookieService.getToken = function() {
    return document.cookie = "token=" + token;
  };

  cookieService.setToken = function(token) {
    $cookies.put('token', token);
  };

  return cookieService;
});
