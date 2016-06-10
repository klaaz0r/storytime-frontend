angular.module('app').controller('RegisterController', function RegisterController($scope, AuthService, ErrorFactory) {
    $scope.credentials = {
        username: '',
        password: '',
        email: '',
        name: ''
    };

    $scope.register = function(credentials) {
        console.log(credentials);
        AuthService.register(credentials).then(function(data) {
            console.log(data.STATE);
            if (data.STATE === "SUCCEEDED") {
                ErrorFactory.setSuccess(data.MESSAGE);
            } else if (data.STATE === "ERROR") {
                ErrorFactory.setError(data.MESSAGE);
            }
        })
    };
});
