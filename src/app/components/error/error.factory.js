angular.module('app').factory('ErrorFactory', function($rootScope) {
  var errorFactory = {};
  errorFactory.setError = function(message) {
    $rootScope.$broadcast('ERROR', message);
  };

  errorFactory.setSuccess = function(message) {
    $rootScope.$broadcast('SUCCESS', message);
  };

  return errorFactory;
});
