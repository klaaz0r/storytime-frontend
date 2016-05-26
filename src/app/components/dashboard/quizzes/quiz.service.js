angular.module('app').factory('QuizService', function($http, API_URL, CookieFactory) {
    var quizService = {};

    childService.registerChild = function(credentials) {
        return $http({
                method: 'POST',
                url: API_URL + "/user/registerchild",
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json',
                    'token': CookieFactory.getToken()
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

    quizService.loadQuizes = function() {
        return $http({
                method: 'GET',
                url: API_URL + "quiz/quizes/all",
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json',
                    'token': CookieFactory.getToken()
                },
                data: {}
            })
            .then(function(res) {
                return res.data;
            });
    };
    return quizService;
});