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
          //setting the token
          CookieFactory.setToken(res.data.MESSAGE.Token);
          //creating the sesion
          Session.create(res.data.MESSAGE.Username, res.data.MESSAGE.Type.toUpperCase());
        }
        return res.data;
      });
  };

  //get userinfo based on token
  authService.userinfo = function() {
    var userToken = CookieFactory.getToken();
    return $http({
        method: 'GET',
        url: API_URL + "/user/info",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          token: userToken
        }
      })
      .then(function(res) {
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

  authService.registerChild = function(credentials) {
    return $http({
        method: 'POST',
        url: API_URL + "/user/registerchild",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json',
          'token' : CookieFactory.getToken()
        },
        data: {
          username: credentials.username,
          password: credentials.password,
          name: credentials.name,
          gender: credentials.gender,
          dateOfBirth: credentials.dateofbirth,
          mentorName: credentials.mentorname
        }
      })
      .then(function(res) {
        return res.data;
      });
  };

  authService.forgetpassword = function(credentials) {
    return $http({
        method: 'POST',
        url: API_URL + "/user/forget",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          email: credentials.email
        }
      })
      .then(function(res) {
        return res.data;
      });
  };
  authService.newpassword = function(credentials) {
    return $http({
        method: 'POST',
        url: API_URL + "/user/updatepassword",
        dataType: "json",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          email: credentials.email,
          token: credentials.token,
          password: credentials.password
        }
      })
      .then(function(res) {
        return res.data;
      });
  };

  //check is a username is set in the session
  authService.isAuthenticated = function() {
    return !!Session.userName;
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

  this.create = function(userName, userRole) {
    this.userRole = userRole;
    this.userName = userName;
  };
  this.destroy = function() {
    this.userRole = null;
    this.userName = null;
  };
});
