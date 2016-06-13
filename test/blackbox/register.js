describe('Register account:', function() {
    it('Should be able to login', function() {


        browser.url('http://localhost:8081/#/register');
        browser.setValue('#main-content > main > div > div > div > form > div:nth-child(1) > div > div > input', 'klaas');
        browser.setValue('#main-content > main > div > div > div > form > div:nth-child(2) > div > div > input', 'klaas');
        browser.setValue('#main-content > main > div > div > div > form > div:nth-child(3) > div > div > input', 'wachtwoord');
        browser.setValue('#main-content > main > div > div > div > form > div:nth-child(4) > div > div > input', 'klaas.test@gmail.com');
        browser.click('#main-content > main > div > div > div > form > div:nth-child(5) > div > a');


    });
});
