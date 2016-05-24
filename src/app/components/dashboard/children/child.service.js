angular.module('app').factory('ChildService', function($http, API_URL, CookieFactory) {
    var childService = {};

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

    childService.loadChilds = function() {
        return $http({
                method: 'POST',
                url: API_URL + "/user/loadchilds",
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

    return childService;
});
