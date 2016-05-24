angular.module('app').directive('dashboardNavbar', function() {
    return {
        restrict: 'E',
        templateUrl: '../app/components/dashboard/dashboard-menu.view.html',
        controller: 'NavbarController'
    };
});
