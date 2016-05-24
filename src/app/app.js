var app = angular.module("app", ['ui.router', 'app.config', 'ngCookies', 'ngAnimate']);


app.constant('USER_ROLES', {
    all: '*',
    mentor: 'MENTOR',
    child: 'CHILD'
});
