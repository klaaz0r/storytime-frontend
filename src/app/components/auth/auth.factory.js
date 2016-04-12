angular.module('app').factory('AuthService', function($http, Session, API_URL, CookieFactory) {
  var authService = {};

  authService.login = function(credentials) {
    return $http
      .post(API_URL + '/user/login', credentials)
      .then(function(res) {
        if (res.data.STATE === "SUCCESS") {
          //create sessions
          Session.create(res.data.id, res.data.user.id,
            res.data.user.role);
          //store the token
          CookieFactory.setToken(res.data.token);
          return res.data.user;
        } else {

        }
      });
  };

  authService.isAuthenticated = function() {
    return !!Session.userId;
  };

  authService.isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };

  return authService;
});

//create a session
angular.module('app').service('Session', function() {
  this.create = function(sessionId, userId, userRole) {
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function() {
    this.userId = null;
    this.userRole = null;
  };
});
