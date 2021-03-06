angular.module('app').controller('DashboardController', function($scope, $rootScope, ChildService, RoadmapService, AchievementService, CategoryService, QuizService, ErrorFactory, $state) {
    $scope.credentials = {
        mentorname: $rootScope.userName
    };
    $scope.achievement = {};
    $scope.childs = {};
    $scope.roadmaps = {};
    $scope.quizes = {};
    $scope.achievements = {};
    $scope.categories = {};

    /**
     * Dynamic quiz fields
     */
    $scope.quiz = {};
    $scope.quiz.questions = [];
    $scope.quiz.questions.answers = [];

    $scope.addNewQuestion = function() {
        var newItemNo = $scope.quiz.questions.length + 1;
        $scope.quiz.questions.push({
            'id': 'question' + newItemNo,
            'theAnswers': []
        });
    };

    $scope.removeQuestion = function() {
        var lastItem = $scope.quiz.questions.length - 1;
        $scope.quiz.questions.splice(lastItem);
    };

    /**
     * Dynamic roadmap fields
     */
    $scope.roadmap = {};
    $scope.roadmap.steps = [];

    $scope.addNewStep = function() {
        var newItemNo = $scope.roadmap.steps.length + 1;
        $scope.roadmap.steps.push({
            'orderId': newItemNo
        });
    };

    $scope.removeStep = function() {
        var lastItem = $scope.roadmap.steps.length - 1;
        $scope.roadmap.steps.splice(lastItem);
    };

    $scope.loadQuizes = function() {
        QuizService.loadQuizes().then(function(data) {
            $scope.quizes = data;
        })
    };

    $scope.loadRoadmaps = function() {
        RoadmapService.loadRoadmaps().then(function(data) {
            $scope.roadmaps = data;
        })
    };

    $scope.loadAchievements = function() {
        AchievementService.loadAchievements().then(function(data) {
            $scope.achievements = data;
        })
    };


    $scope.registerChild = function(credentials) {
        ChildService.registerChild(credentials).then(function(data) {
            if (data.STATE === "SUCCEEDED") {
                ErrorFactory.setSuccess(data.MESSAGE);
            } else if (data.STATE === "ERROR") {
                ErrorFactory.setError(data.MESSAGE);
            }
        })
    };

    $scope.addNewQuiz = function(quiz) {
        QuizService.addNewQuiz(quiz).then(function(data) {
            if (data.STATE === "SUCCEEDED") {
                ErrorFactory.setSuccess(data.MESSAGE);
            } else if (data.STATE === "ERROR") {
                ErrorFactory.setError(data.MESSAGE);
            }
        })
    };

    $scope.addNewRoadmap = function(roadmap) {
        RoadmapService.addNewRoadmap(roadmap).then(function(data) {
            if (data.STATE === "SUCCEEDED") {
                ErrorFactory.setSuccess(data.MESSAGE);
            } else if (data.STATE === "ERROR") {
                ErrorFactory.setError(data.MESSAGE);
            }
        })
    };

    $scope.loadQuizes = function() {
        QuizService.loadQuizes().then(function(data) {
            $scope.quizes = data;
        })
    };

    $scope.loadChilds = function() {
        ChildService.loadChilds().then(function(data) {
            $scope.childs = data;
        })
    };

    $scope.loadRoadmaps = function() {
        RoadmapService.loadRoadmaps().then(function(data) {
            $scope.roadmaps = data;
        })
    };

    $scope.loadAchievements = function() {
        AchievementService.loadAchievements().then(function(data) {
            $scope.achievements = data;
        })
    };

    $scope.loadCategories = function() {
        CategoryService.loadCategories().then(function(data) {
            $scope.categories = data;
        })
    };

    $scope.initRoadmap = function() {
        $scope.loadAchievements()
        $scope.loadCategories()
    };

    $scope.addAchievement = function(achievement) {
    	AchievementService.addAchievement(achievement).then(function(data) {
    		if (data.STATE === "SUCCEEDED") {
                ErrorFactory.setSuccess(data.MESSAGE);
            } else if (data.STATE === "ERROR") {
                ErrorFactory.setError(data.MESSAGE);
            }
        })
    };
});
