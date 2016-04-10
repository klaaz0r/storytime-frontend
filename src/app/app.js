var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../app/components/home/home.view.html',
      controller: 'homeController',
    })
    .state('login', {
      url: '/login',
      templateUrl: '../app/components/login/login.view.html',
      controller: 'LoginController'
    })
    .state('chat', {
      url: '/chat',
      templateUrl: '../app/components/chat/chat.view.html',
      controller: 'chatController'
    })
    .state('about', {
      url: '/about',
      templateUrl: '../app/components/about/about.view.html'
    })
    .state('styleguide', {
      url: '/styleguide',
      templateUrl: '../assets/css/styleguide.html',
    })
  $urlRouterProvider.otherwise("/");
  // $locationProvider.html5Mode(true);
});
