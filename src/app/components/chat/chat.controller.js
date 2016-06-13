angular.module('app').controller('ChatController', ['$scope', function($scope, ngEnter, ChatService) {

    //init van een message, wat het kind stuurt is altijd basic plain tekst
    $scope.message = {
        text: ''
    };

    //init
    $scope.messages = [{
        "author": "robin",
        "text": "hee! hoe gaat het?"
    }];

    $scope.sendMessage = function(text) {
        var message = {
            author: '',
            text: ''
        };
        //leeg maken veld
        $scope.text = "";
        ChatService.getRoadmap(message);
        message.text = text;
        message.author = 'child';

        $scope.messages.push(message);
        console.log(message);
        if ($scope.messages.length == 2) {
            $scope.messages.push({
                author: 'robin',
                text: 'kan ik je ergens mee helpen vandaag?'
            });
        } else if ($scope.messages.length > 3) {
            ChatService.getRoadmap(message).then(function(res){
              console.log(res);
            });
        }

        updateScroll();
    };

    var scrolled = false;

    function updateScroll() {
        if (!scrolled) {
            console.log("Scrolled automaticly down");
            //$(".chat").scrollTop();
            $(".chat").animate({
                    scrollTop: $(".chat")[0].scrollHeight
                },
                300
            );
            return false;
        }
    }

    $('.chat').bind('scroll', function() {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            console.log('Bottom reached, Auto scroll enabled');
            scrolled = false;
        } else {
            console.log('Not at bottom, Auto scroll disabled');
            scrolled = true;
        }
    })

}]);
