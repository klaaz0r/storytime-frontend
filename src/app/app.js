var app = angular.module("app", ['ui.router', 'app.config', 'ngCookies', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../app/components/static/home.view.html',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: '../app/components/login/login.view.html',
      controller: 'LoginController',
      data: {
        authorizedRoles: [USER_ROLES.all]
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
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .state('forgetpassword', {
      url: '/forgetpassword',
      templateUrl: '../app/components/forgetpassword/forgetpassword.view.html',
      controller: 'ForgetPasswordController',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .state('about', {
      url: '/about',
      templateUrl: '../app/components/static/about.view.html',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .state('helpmee', {
      url: '/helpmee',
      templateUrl: '../app/components/static/helpmee.view.html',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .state('styleguide', {
      url: '/styleguide',
      templateUrl: '../styleguide.html',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    })
  $urlRouterProvider.otherwise("/");

});

app.constant('USER_ROLES', {
  all: '*',
  mentor: 'mentor',
  child: 'child'
});

app.run(function($rootScope, AuthService) {
  $rootScope.$on('$stateChangeStart', function(event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    // if (!AuthService.isAuthorized(authorizedRoles)) {
    //   event.preventDefault();
    //   console.log("AUTH SERVICE:");
    //   console.log(next.data);
    //   console.log(authorizedRoles);
    //   if (AuthService.isAuthenticated()) {
    //     // user is not allowed
    //
    //   } else {
    //     // user is not logged in
    //
    //   }
    // }
  });
});
