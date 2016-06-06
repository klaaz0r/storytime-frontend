angular.module('app').controller('ChatController', ['$scope', function($scope, ngEnter, ChatService) {

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
        "text": "waar mee kan ik je helpen?",
        "quiz": {
            "title": "Verjaardag feestje",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam est, ultrices ac tellus consequat",
            "image": "https://s-media-cache-ak0.pinimg.com/736x/70/cc/40/70cc40437e3b042d26fa826a16482600.jpg"
        }
    }, {
        "author": "robin",
        "text": "waar mee kan ik je helpen?"
    }, {
        "author": "robin",
        "text": "waar mee kan ik je helpen?"
    }];

    $scope.sendMessage = function(text) {
        var message = {
            author: '',
            text: ''
        };
        $scope.text = "";

        message.text = text;
        message.author = 'child';

        $scope.messages.push(message);

        ChatService.sendMessage(message);

        //
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
