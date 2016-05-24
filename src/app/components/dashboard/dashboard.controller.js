angular.module('app').controller('DashboardController', function($scope, $rootScope, ChildService, ErrorFactory, $state) {
    $scope.credentials = {
        mentorname: $rootScope.userName
    };
    $scope.childs = {};

    $scope.tabs = [{
        title: 'Nieuwe quiz',
        route: 'dashboard.new-quiz'
    }, {
        title: 'Quizzen',
        content: 'Dynamic content 2'
    }, {
        title: 'Stappenplan',
        content: 'Dynamic content 2'
    }];

    $scope.register = function(credentials) {
        console.log(credentials);
        ChildService.registerChild(credentials).then(function(data) {
            console.log(data.STATE);
            if (data.STATE === "SUCCEEDED") {
                ErrorFactory.setSuccess(data.MESSAGE);
            } else if (data.STATE === "ERROR") {
                ErrorFactory.setError(data.MESSAGE);
            }
        })
    };

    $scope.loadChilds = function() {
        ChildService.loadChilds().then(function(data) {
            $scope.childs = data;
            console.log(data);
        })
    };
});
