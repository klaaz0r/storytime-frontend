var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../app/components/home/home.view.html',
      controller: 'HomeController',
    })
    .state('login', {
      url: '/login',
      templateUrl: '../app/components/login/login.view.html',
      controller: 'LoginController'
    })
    .state('chat', {
      url: '/chat',
      templateUrl: '../app/components/chat/chat.view.html',
      controller: 'ChatController'
    })
    .state('register', {
      url: '/register',
      templateUrl: '../app/components/register/register.view.html',
      controller: 'RegisterController'
    })
    .state('about', {
      url: '/about',
      templateUrl: '../app/components/about/about.view.html'
    })
    .state('styleguide', {
      url: '/styleguide',
      templateUrl: '../styleguide.html',
    })
  $urlRouterProvider.otherwise("/");

});

app.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  mentor: 'mentor',
  child: 'child',
  guest: 'guest'
})
