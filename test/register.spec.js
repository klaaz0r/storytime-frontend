describe('RegisterController test:', function() {
    var scope;
    var controller;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('RegisterController', {
            $scope: scope
        });
    }));

    it('should display a list', function() {
        expect(scope.register).toBeDefined();
    });
});
