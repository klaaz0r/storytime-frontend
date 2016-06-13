describe('Quiz create:', function() {
    it('Should be able to create a quiz', function() {
        browser.url('http://localhost:8081/#/login');
        //login again
        browser.setValue('#main-content > main > div > form > div > div > div:nth-child(2) > input', 'klaas');
        browser.setValue('#main-content > main > div > form > div > div > div:nth-child(3) > input', 'klaas');
        browser.click('#main-content > main > div > form > div > div > a');
        //timeout
        browser.timeoutsImplicitWait(6000);
        //create a quiz
        browser.setValue('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-quiz.ng-scope > form > div:nth-child(1) > div > input', 'quiz naam');
        browser.setValue('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-quiz.ng-scope > form > div:nth-child(2) > div > textarea', 'quiz omschrijving');
        browser.click('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-quiz.ng-scope > form > div:nth-child(3) > div:nth-child(2) > button');
    });
});
