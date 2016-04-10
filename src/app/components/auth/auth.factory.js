angular.module('app').factory('loginService', function($http) {
  var loginService = {};
  loginService.login = function(info) {
    return $http({
      method: 'POST',
      url: '/api/user',
      data: {
        data: info
      }
    }).success(function(data) {
      return data;
    })
  }
  return loginService;
});
