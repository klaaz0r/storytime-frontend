angular.module('app').controller('ChatController', ['$scope', function($scope) {

    //init van een message, wat het kind stuurt is altijd basic plain tekst
    $scope.message = {
        text: ''
    };

    //dit is even snel een demo
    $scope.messages = [{
        "author": "robin",
        "text": "hee! hoe gaat het"
    }, {
        "author": "child",
        "text": "met mij best goed"
    }, {
        "author": "robin",
        "text": "waar mee kan ik je helpen?"
    }];

    $scope.sendMessage = function(text) {
        //message object maken
        var message = {
            author: '',
            text: ''
        };

        // dit maakt de text balk leeg na het versturen!
        $scope.text = "";

        //setten van de values
        message.text = text;
        message.author = 'child';

        console.log(message);
        //hier tussen moet nog een service komen voor het versturen naar de server
        //push de message in de array zodat hij ook op het scherm getoond word
        $scope.messages.push(message);
    };
}]);
