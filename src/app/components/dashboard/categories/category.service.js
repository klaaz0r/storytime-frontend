angular.module('app').factory('CategoryService', function($http, API_URL, CookieFactory) {
	var categoryService = {};

	categoryService.loadCategories = function() {
		return $http({
			method : 'GET',
			url : API_URL + "/category/all",
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
	return categoryService;
});