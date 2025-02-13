

  module.exports = function(config) {
    config.set({
            // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],
files: [
    // bower:js
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-cookies/angular-cookies.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-touch/angular-touch.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angularUtils-pagination/dirPagination.js',
    // endbower
    "app/scripts/**/*.js",
    "test/spec/controllers/*.js",
    "test/mock/**/*.js",
    "test/spec/**/*.js"
],

singleRun: true,

browsers: [
    "PhantomJS"
],

// Which plugins to enable
plugins: [
    "karma-phantomjs-launcher",
    "karma-jasmine"
]
    });
  };