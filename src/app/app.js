var app = angular.module('app', ['ui.router', 'app.config', 'ngCookies', 'ngAnimate', 'ui.bootstrap']);
//user roles
app.constant('USER_ROLES', {
    all: '*',
    mentor: 'MENTOR',
    child: 'CHILD'
});
