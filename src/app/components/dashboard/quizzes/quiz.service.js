angular.module('app').factory('QuizService',
	function($http, API_URL, CookieFactory) {
		var quizService = {};

		quizService.loadQuizes = function() {
			return $http({
				method : 'GET',
				url : API_URL + "/quiz/all",
				dataType : "json",
				headers : {
					'Content-Type' : 'application/json',
					'token' : CookieFactory.getToken()
				},
				data : {}
			}).then(function(res) {
				return res.data;
			});
		};

		quizService.addNewQuiz = function(quiz) {
			quiz.questions[0].theAnswers[0].correct = true; // dirty, yes.
			return $http({
				method : 'POST',
				url : API_URL + "/quiz/add",
				dataType : "json",
				headers : {
					'Content-Type' : 'application/json',
					'token' : CookieFactory.getToken()
				},
				data: {
					name: quiz.name,
					description: quiz.description,
					theQuestions: quiz.questions,
					theCategories: quiz.category
				}
			}).then(function(res) {
				return res.data;
			});
		};
		return quizService;
});
