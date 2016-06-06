app.run(function($rootScope, AuthService, $state, ErrorFactory, Session) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
        var authorizedRoles = next.data.authorizedRoles;
        if (!AuthService.isAuthorized(authorizedRoles)) {
            event.preventDefault();
            if (AuthService.reAuthUser()) {
                $state.go(next.name);
                console.log("reaut the user!");
            }
            if (AuthService.isAuthenticated()) {
                // User is not allowed
                console.log("auth false");
                ErrorFactory.setError('U bent niet ingelogd');
                $state.go("login");
            } else {
                // User is not logged in
                ErrorFactory.setError('U bent niet ingelogd');
                $state.go("login");
            }
        }
    });
});
