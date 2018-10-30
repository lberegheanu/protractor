var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^Go to Petclinic$/, function (callback) {
        callback.pending();
        element(by.xpath('/html/body/app-root/div[1]/nav/div/ul/li[2]/a')).click();
        browser.sleep(2000);

    });
    When(/^I'll add a new owner$/, function (callback) {
        callback.pending();
    });
    And(/^I'll click the save button$/, function (callback) {
        callback.pending();
    });
    Then(/^I should see my new owner in the list$/, function (callback) {
        callback.pending();
    });
});