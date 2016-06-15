angular.module('app').factory('AchievementService',
		function($http, API_URL, CookieFactory) {
			var achievementService = {};

			achievementService.addAchievement = function(achievement) {
				return $http({
					method : 'POST',
					url : API_URL + "/achievement/add",
					dataType : "json",
					headers : {
						'Content-Type' : 'application/json',
						'token' : CookieFactory.getToken()
					},
					data : {
						name : achievement.name,
						points : achievement.points
					}
				}).then(function(res) {
					return res.data;
				});
			};

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

			achievementService.loadAchievementsByChild = function(child) {
				return $http({
					method : 'GET',
					url : API_URL + "/achievement/child/{id}",
					dataType : "json",
					headers : {
						'Content-Type' : 'application/json',
						'token' : CookieFactory.getToken()
					},
					data : {
						id : child.id
					}
				}).then(function(res) {
					return res.data;
				});
			};
			return achievementService;
		});