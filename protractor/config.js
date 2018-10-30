exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.spec.js'],                //+1
    capabilities: {
        'browserName': 'chrome',
        framework: 'jasmine'               //+1
    }
};