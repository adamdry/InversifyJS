module.exports = function (config) {
    'use strict';
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        browsers: ['PhantomJS'],
        reporters: ['progress', 'coverage'],
        coverageReporter: {
          type : 'text',
          dir : './coverage/',
          file : 'coverage.txt'
        },
        plugins : [
          'karma-coverage',
          'karma-mocha',
          'karma-chai',
          'karma-sinon',
          'karma-phantomjs-launcher'
        ],
        preprocessors: {
          './bundled/test/*.test.js' : ['coverage']
        },
        files : [
          './bundled/test/*.test.js'
        ],
        port: 9876,
        colors: true,
        autoWatch: false,
        logLevel: config.LOG_INFO
    });
};
