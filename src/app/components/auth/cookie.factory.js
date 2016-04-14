angular.module('app').factory('CookieFactory', function($http, Session, $cookies) {
  var cookieService = {};
  cookieService.getToken = function() {
    return $cookies.get('token');
  };

  cookieService.setToken = function(token) {
    $cookies.put('token', token);
  };

  return cookieService;
});
