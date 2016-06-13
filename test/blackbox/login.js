describe('Logging in:', function() {
    it('Should be able to login', function() {
        browser.url('http://localhost:8081/#/login');
        browser.setValue('#main-content > main > div > form > div > div > div:nth-child(2) > input', 'klaas');
        browser.setValue('#main-content > main > div > form > div > div > div:nth-child(3) > input', 'klaas');
        browser.click('#main-content > main > div > form > div > div > a');
    });
});
