angular.module('app').factory('AchievementService', function($http, API_URL, CookieFactory) {
	var achievementService = {};

	achievementService.loadAchievements = function() {
		return $http({
			method : 'GET',
			url : API_URL + "/achievement/all",
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
	return achievementService;
});