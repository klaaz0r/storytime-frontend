angular.module('app').factory('CookieFactory', function($http, Session, $cookies) {
  var cookieService = {};

  cookieService.getToken = function() {
    return $cookies.get('token');
  };

  cookieService.setToken = function(token) {
    $cookies.put('token', token);
  };

  cookieService.getCookiesOke = function() {
    return !!$cookies.get('cookiesok');
  };

  cookieService.setCookiesOk = function() {
    $cookies.put('cookiesok', 'true');
  };


  return cookieService;
});
