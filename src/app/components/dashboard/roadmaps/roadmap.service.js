angular.module('app').factory('RoadmapService', function($http, API_URL, CookieFactory) {
    var roadmapService = {};

    roadmapService.loadRoadmaps = function() {
        return $http({
                method: 'GET',
                url: API_URL + "/roadmap/all",
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json',
                    'token': CookieFactory.getToken()
                }
            })
            .then(function(res) {
                return res.data;
            });
    };
    
    roadmapService.addNewRoadmap = function(roadmap) {
    	console.log(roadmap);
        return $http({
                method: 'POST',
                url: API_URL + "/roadmap/add",
                dataType: "json",
                headers: {
                    'Content-Type': 'application/json',
                    'token': CookieFactory.getToken()
                },
                data: {
                	name: roadmap.name,
                	description: roadmap.description, 
                	achievement: roadmap.achievement,
                	categories: roadmap.categories,
                	steps: roadmap.steps
                }
            })
            .then(function(res) {
                return res.data;
            });
    };
    return roadmapService;
});