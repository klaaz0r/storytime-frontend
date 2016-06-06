angular.module('app').factory('RoadmapService', function($http, API_URL, CookieFactory) {
    var roadmapService = {};

    roadmapService.loadRoadmaps = function() {
        return $http({
                method: 'GET',
                url: API_URL + "/roadmap/roadmaps/all",
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
    return roadmapService;
});