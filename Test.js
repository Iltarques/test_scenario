describe('Test Google', function() {
    test('Search test', function(browser) {
        browser
            .url('https://www.google.com/')
            .waitForElementVisible('body')
            .assert.titleContains('Google')
            .assert.visible('input[type=text]')
            .sendKeys('input[type=text]', 'Persona 5 Royal')
            .assert.visible('input[type=submit]')
            .click('input[type=submit]')
            .assert.visible('div[data-hveid]')
            .end();
    })
});