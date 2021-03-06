angular.module('app').controller('ChatController', function($scope, ChatService, $rootScope) {

    //init van een message, wat het kind stuurt is altijd basic plain tekst
    $scope.message = {
        text: ''
    };
    $scope.roadmaps = {};
    //init
    $scope.messages = [{
        "author": "robin",
        "text": "hee! hoe gaat het " + $rootScope.name + "?"
    }];

    $scope.chat = {};
    //bools for views
    $scope.chatActive = true;
    $scope.roadmapssent = false;
    $scope.roadmapActive = false;


    // get chattoken
    // $scope.chatToken = ChatService.getToken();

    $scope.sendMessage = function(text) {
        var message = {
            author: '',
            text: ''
        };
        //leeg maken veld
        $scope.chat.message = null;

        message.text = text;
        message.author = 'child';

        $scope.messages.push(message);

        ChatService.sendMessage(message).then(function(message) {
            console.log(message);
            if (message.type === "CHAT") {
                $scope.messages.push({
                    "author": "robin",
                    "text": message.answer
                });
            } else if (message.type === "ROADMAP") {
                $scope.roadmaps = message.roadmap;
            }
        });


        // if ($scope.messages.length == 2) {
        //     $scope.messages.push({
        //         author: 'robin',
        //         text: 'kan ik je ergens mee helpen vandaag?'
        //     });
        // } else if ($scope.messages.length > 3) {
        //     ChatService.getRoadmap(message).then(function(roadmaps) {
        //         $scope.roadmaps = roadmaps;
        //         $scope.roadmapssent = true;
        //     });
        // };
        updateScroll();
    };

    $scope.startRoadmap = function(roadmap) {
        $scope.roadmapActive = true;
        $scope.chatActive = false;
        $scope.roadmap = roadmap;
        console.log(roadmap)
    };



    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function(index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function(index) {
        return $scope.currentIndex === index;
    };

    $scope.nextStep = function() {
        $scope.direction = 'right';
        if (($scope.currentIndex + 1) === $scope.roadmap.steps.length) {
            console.log("einde");
        } else {
            $scope.currentIndex = $scope.currentIndex + 1;
        }
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

});
