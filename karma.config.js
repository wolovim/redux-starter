var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './test/helpers/setup.js',
      './test/*.spec.js',
      './test/**/*.spec.js'
    ],

    preprocessors: {
      './test/helpers/setup.js': ['webpack']
      './test/*.spec.js': ['webpack']
      './test/**/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}
