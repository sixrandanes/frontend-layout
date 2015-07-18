// Karma configuration
// Generated on Tue Mar 10 2015 09:20:04 GMT+1100 (Pacifique Centre)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jspm', 'jasmine'],

        plugins: [
            'karma-jspm',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-coverage',
            'karma-jasmine'
        ],


        jspm: {
            config: '/app/config.js',
            packages: '/app/jspm_packages/',
            loadFiles: ['./app/**/*.spec.js'],
            serveFiles: [
                '/**/*.js',
                '/**/*.html'
            ]
        },

        proxies: {
            '/base/jspm_packages/': '/base/app/jspm_packages/'
        },


        // list of files to exclude
        exclude: [
            // '.src/libs/angular/angular-scenario.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './client/app/**/*.js/src/scripts/**/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'lcov',
            dir: 'test/coverage',
            subdir: '/'
        },


        // web server port
        port: 9876,
        hostname: '127.0.0.1',


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS', 'Firefox'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
