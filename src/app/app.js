var app = angular.module("app", ['ui.router', 'app.config', 'ngCookies', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../app/components/static/home.view.html',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: '../app/components/login/login.view.html',
      controller: 'LoginController',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('chat', {
      url: '/chat',
      templateUrl: '../app/components/chat/chat.view.html',
      controller: 'ChatController',
      data: {
        authorizedRoles: [USER_ROLES.child]
      }
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '../app/components/dashboard/dashboard.view.html',
      controller: 'DashboardController',
      data: {
        authorizedRoles: [USER_ROLES.mentor]
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: '../app/components/register/register.view.html',
      controller: 'RegisterController',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('forgetpassword', {
      url: '/forgetpassword',
      templateUrl: '../app/components/forgetpassword/forgetpassword.view.html',
      controller: 'ForgetPasswordController',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('newpassword', {
      url: '/newpassword/:tokenId/:email',
      templateUrl: '../app/components/forgetpassword/newpassword.view.html',
      controller: 'NewPasswordController',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('about', {
      url: '/about',
      templateUrl: '../app/components/static/about.view.html',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('helpmee', {
      url: '/helpmee',
      templateUrl: '../app/components/static/helpmee.view.html',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('styleguide', {
      url: '/styleguide',
      templateUrl: '../styleguide.html',
      data: {
        authorizedRoles: [USER_ROLES.all, USER_ROLES.mentor, USER_ROLES.child]
      }
    })
    .state('quiz', {
      url: '/quiz',
      templateUrl: '../app/components/quiz/quiz.view.html',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    })
  $urlRouterProvider.otherwise("/");

});

app.constant('USER_ROLES', {
  all: '*',
  mentor: 'MENTOR',
  child: 'CHILD'
});

app.run(function($rootScope, AuthService, $state, ErrorFactory, Session) {
  $rootScope.$on('$stateChangeStart', function(event, next) {
    var authorizedRoles = next.data.authorizedRoles;

    if (!AuthService.isAuthorized(authorizedRoles)) {

      event.preventDefault();

      if (AuthService.isAuthenticated()) {
        // user is not allowed
        ErrorFactory.setError('U bent niet ingelogd');
        $state.go("login");
      } else {
        // user is not logged in
        ErrorFactory.setError('U bent niet ingelogd');
        $stateProvider.go("login");
      }
    }
  });
});
