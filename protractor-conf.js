exports.config = {
    allScriptsTimeout : 11000,

    specs: [

    ],

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly : true,

    baseUrl: 'http://localhost:8000',

    framework: 'jasmine',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};