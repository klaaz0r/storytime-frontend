var app = angular.module("app", ['ui.router', 'app.config', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../app/components/home/home.view.html',
      controller: 'HomeController',
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
        authorizedRoles: [USER_ROLES.child, USER_ROLES.admin, USER_ROLES.all]
      }
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '../app/components/dashboard/dashboard.view.html',
      controller: 'DashboardController'
    })
    .state('register', {
      url: '/register',
      templateUrl: '../app/components/register/register.view.html',
      controller: 'RegisterController',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    })
    .state('about', {
      url: '/about',
      templateUrl: '../app/components/about/about.view.html',
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
  admin: 'admin',
  mentor: 'mentor',
  child: 'child'
});

app.run(function($rootScope, AuthService) {
  $rootScope.$on('$stateChangeStart', function(event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    // if (!AuthService.isAuthorized(authorizedRoles)) {
    //   event.preventDefault();
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
