angular.module('app').factory('AuthService', function($http, Session, API_URL, CookieFactory) {
  var authService = {};

  authService.login = function(credentials) {
    return $http({
        method: 'POST',
        url: API_URL + "/user/login",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username: credentials.username,
          password: credentials.password
        }
      })
      .then(function(res) {
        if (res.data.STATE === "SUCCEEDED") {
          CookieFactory.setToken(res.data.MESSAGE);
        }
        return res.data;
      });
  };

  authService.register = function(credentials) {
    return $http({
        method: 'POST',
        url: API_URL + "/user/register",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username: credentials.username,
          password: credentials.password,
          email: credentials.email,
          name: credentials.name
        }
      })
      .then(function(res) {
        return res.data;
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
