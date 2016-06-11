describe('DashboardController test:', function() {
    var scope;
    var controller;
    var childService;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope, _ChildService_) {
        scope = $rootScope.$new();
        childService = _ChildService_;
        controller = $controller('DashboardController', {
            $scope: scope
        });
    }));

    it('Dashboard service test', function() {
        expect(childService.loadChilds()).toBeDefined();
    });

    it('should register a child', function() {
        var child = {
            username: 'test_username',
            password: 'test_password',
            name: 'test_name',
            gender: 'MALE',
            dateOfBirth: '2-7-2003',
            mentorName: 'klaas'
        };
        expect(childService.registerChild(child)).toBeDefined();
    });

    it('Dashboards variables and functions that should be defined:', function() {
        expect(scope.credentials).toBeDefined();
        expect(scope.childs).toBeDefined();
        expect(scope.quizes).toBeDefined();
        expect(scope.roadmaps).toBeDefined();
        expect(scope.achievements).toBeDefined();
        expect(scope.categories).toBeDefined();
        expect(scope.roadmap).toBeDefined();
        expect(scope.roadmap.steps).toBeDefined();

        //functions
        expect(scope.addNewQuestion).toBeDefined();
        expect(scope.removeQuestion).toBeDefined();
        expect(scope.addNewStep).toBeDefined();
        expect(scope.loadQuizes).toBeDefined();
        expect(scope.loadChilds).toBeDefined();
        expect(scope.loadRoadmaps).toBeDefined();
        expect(scope.loadAchievements).toBeDefined();
        expect(scope.loadCategories).toBeDefined();
        expect(scope.initRoadmap).toBeDefined();
    });
});
