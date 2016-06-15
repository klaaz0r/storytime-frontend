angular.module('app').controller('ChatController', function($scope, ChatService) {

    //init van een message, wat het kind stuurt is altijd basic plain tekst
    $scope.message = {
        text: ''
    };
    $scope.roadmaps = {};
    //init
    $scope.messages = [{
        "author": "robin",
        "text": "hee! hoe gaat het?"
    }];

    $scope.chatActive = true;
    $scope.roadmapssent = false;
    $scope.roadmapActive = false;

    $scope.sendMessage = function(text) {
        var message = {
            author: '',
            text: ''
        };
        //leeg maken veld
        $scope.inputMessage = "";

        message.text = text;
        message.author = 'child';

        $scope.messages.push(message);

        if ($scope.messages.length == 2) {
            $scope.messages.push({
                author: 'robin',
                text: 'kan ik je ergens mee helpen vandaag?'
            });
        } else if ($scope.messages.length > 3) {
            ChatService.getRoadmap(message).then(function(roadmaps) {
                $scope.roadmaps = roadmaps;
                $scope.roadmapssent = true;
            });
        };
        updateScroll();
    };

    $scope.startRoadmap = function(roadmap) {
        $scope.roadmapActive = true;
        $scope.chatActive = false;
        $scope.roadmap = roadmap;
        console.log(roadmap)
    };

    $scope.nextStep = function(step) {

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

    $scope.prevSlide = function() {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function() {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
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
