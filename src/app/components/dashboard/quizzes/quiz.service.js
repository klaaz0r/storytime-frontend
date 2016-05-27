angular.module('app').factory('QuizService', function($http, API_URL, CookieFactory) {
    var quizService = {};

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