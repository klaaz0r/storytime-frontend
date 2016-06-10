describe('LoginController test:', function() {
    var scope;
    var controller;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('LoginController', {
            $scope: scope
        });
    }));

    it('Register function should be defined:', function() {
        expect(scope.login).toBeDefined();
        expect(scope.credentials).toBeDefined();
    });
});
