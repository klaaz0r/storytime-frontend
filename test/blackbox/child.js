describe('Create child:', function() {
    it('Should be able to create a quiz', function() {
        browser.url('http://localhost:8081/#/login');
        //login again
        browser.setValue('#main-content > main > div > form > div > div > div:nth-child(2) > input', 'klaas');
        browser.setValue('#main-content > main > div > form > div > div > div:nth-child(3) > input', 'klaas');
        browser.click('#main-content > main > div > form > div > div > a');
        //timeout
        browser.timeoutsImplicitWait(6000);
        //create a quiz

        browser.click('#main-content > main > div > div > ul > li.uib-tab.nav-item.ng-scope.ng-isolate-scope.active > a');
        browser.setValue('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-roadmap.ng-scope > form > div:nth-child(1) > div > input', 'stappenplan');
        browser.setValue('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-roadmap.ng-scope > form > div:nth-child(2) > div > textarea', 'stappen plan omschrijving');
        browser.setValue('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-roadmap.ng-scope > form > div:nth-child(3) > div > div > select > option:nth-child(1)', '');
        browser.setValue('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-roadmap.ng-scope > form > div:nth-child(4) > div > div > select', '');

        browser.click('#main-content > main > div > div > div > div.tab-pane.ng-scope.active > div > div.col-md-12.create-roadmap.ng-scope > form > div:nth-child(5) > div:nth-child(2) > button');
    });
});
