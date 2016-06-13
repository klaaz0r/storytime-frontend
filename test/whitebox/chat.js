describe('ChatController test:', function() {
    var scope;
    var controller;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        childService = _ChildService_;
        controller = $controller('ChatController', {
            $scope: scope
        });
    }));



    it('Chat functions should be defined', function() {
        expect(scope.message).toBeDefined();
        expect(scope.sendMessage).toBeDefined();
    });
});
