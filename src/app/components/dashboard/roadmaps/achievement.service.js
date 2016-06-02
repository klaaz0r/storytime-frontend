angular.module('app').factory('AchievementService', function($http, API_URL, CookieFactory) {
	var achievementService = {};

	achievementService.loadAchievements = function() {
		console.log("IK zit hier");
		return $http({
			method : 'GET',
			url : API_URL + "/achievement/achievements/all",
			dataType : "json",
			headers : {
				'Content-Type' : 'application/json',
				'token' : CookieFactory.getToken()
			},
			data : {}
		}).then(function(res) {
			console.log('Hier staat de data: ');
			console.log(res.data);
			return res.data;
		});
	};
	return achievementService;
});