angular.module('app').factory('ChatService', function($http, API_URL) {
    var childService = {};

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
                message: message.text
            }
        }).then(function(res) {
            return res.data;
        });
    };

    return chatService;
});
