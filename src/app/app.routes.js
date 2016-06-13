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
                authorizedRoles: [USER_ROLES.mentor, USER_ROLES.child]
            }
        })
        //nested views
        .state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController',
            data: {
                authorizedRoles: [USER_ROLES.mentor]
            },
            views: {
                // the main template will be placed here (relatively named)
                '': {
                    templateUrl: '../app/components/dashboard/dashboard.view.html',
                    controller: 'DashboardController'
                },
                'quiz-overview@dashboard': {
                    templateUrl: '../app/components/dashboard/quizzes/quiz.overview.view.html',
                    controller: ''
                },
                'quiz-new@dashboard': {
                    templateUrl: '../app/components/dashboard/quizzes/quiz.new.view.html',
                    controller: ''
                },
                'child-overview@dashboard': {
                    templateUrl: '../app/components/dashboard/children/child.overview.view.html',
                    controller: ''
                },
                'child-new@dashboard': {
                    templateUrl: '../app/components/dashboard/children/child.new.view.html',
                    controller: ''
                },
                'roadmap-overview@dashboard': {
                	templateUrl: '../app/components/dashboard/roadmaps/roadmap.overview.view.html',
                	controller: ''
                },
                'roadmap-new@dashboard': {
                    templateUrl: '../app/components/dashboard/roadmaps/roadmap.new.view.html',
                    controller: ''
                }
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
        .state('helpus', {
            url: '/helpus',
            templateUrl: '../app/components/static/helpus.view.html',
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
        .state('quizView', {
            url: '/quiz',
            templateUrl: '../app/components/quiz/quiz.view.html',
            data: {
                authorizedRoles: [USER_ROLES.mentor]
            }
        })

    $urlRouterProvider.otherwise("/");
});
