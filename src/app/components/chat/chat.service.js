angular.module('app').factory('ChatService', function($http, API_URL, CookieFactory) {
    var chatService = {};

    //TODO endpoints van chat
    chatService.getRoadmap = function(message) {
        return $http({
            method: 'POST',
            url: API_URL + "/chat/suggest",
            dataType: "json",
            headers: {
                'Content-Type': 'application/json',
                'token': CookieFactory.getToken()
            },
            data: {
                answer: message.text
            }
        }).then(function(res) {
            console.log(res);
            return res.data;
        });
    };

    chatService.getToken = function() {
        return $http({
            method: 'POST',
            url: API_URL + "/chat",
            dataType: "json",
            headers: {
                'Content-Type': 'application/json',
                'token': CookieFactory.getToken()
            },
            data: {}
        }).then(function(res) {
            console.log(res);
            return res.data;
        });
    };

    return chatService;
});
