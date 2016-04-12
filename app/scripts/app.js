'use strict';

/**
 * @ngdoc overview
 * @name medtechClientApp
 * @description
 * # medtechClientApp
 *
 * Main module of the application.
 */
angular
  .module('medtechClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .when('/benchmark', {
        templateUrl: 'views/benchmark.html',
        controller: 'BenchmarkCtrl',
        controllerAs: 'benchmark'
      })
      .when('/benchmark-dashboard', {
        templateUrl: 'views/benchmark-dashboard.html',
        controller: 'BenchmarkDashboardCtrl',
        controllerAs: 'benchmarkDashboard'
      })
      .when('/admin-dashboard', {
        templateUrl: 'views/admin-dashboard.html',
        controller: 'AdminDashboardCtrl',
        controllerAs: 'adminDashboard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
