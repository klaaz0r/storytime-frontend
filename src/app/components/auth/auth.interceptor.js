app.run(function($rootScope, AuthService, $state, ErrorFactory, Session) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
        var authorizedRoles = next.data.authorizedRoles;

        // if (Session.userName === "guest") {
        //     console.log('geen session meer');
        //     // AuthService.reAuthUser();
        //     console.log(next);
        //     // if (AuthService.reAuthUser()) {
        //     //     console.log('reatuh user');
        //     //     $state.go(next.name);
        //     // }
        //
        // };

        if (!AuthService.isAuthorized(authorizedRoles)) {
            event.preventDefault();
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
        };
    });
});
