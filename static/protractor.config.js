exports.config = {
    //seleniumServerJar: 'C:/Users/sylvain.leborgne@recif.nc/Desktop/selenium-server-2.45.0-javadoc.jar',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/e2e/login.spec.js',
        './test/e2e/logout.spec.js']
    /*,
     multiCapabilities: [{
     browserName: 'firefox'
     }, {
     browserName: 'chrome'
     }]*/
};

/*exports.config = {
 allScriptsTimeout: 11000,

 specs: [
 '*.js'
 ],

 capabilities: {
 'browserName': 'chrome'
 },

 baseUrl: 'http://localhost:8000/app/',

 framework: 'jasmine',

 jasmineNodeOpts: {
 defaultTimeoutInterval: 30000
 }
 };*/
