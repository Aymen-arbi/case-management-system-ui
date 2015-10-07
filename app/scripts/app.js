'use strict';

/**
 * @ngdoc overview
 * @name caseManagementSystemUiApp
 * @description
 * # caseManagementSystemUiApp
 *
 * Main module of the application.
 */
angular
  .module('caseManagementSystemUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects/:id', {
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl'
      })
      .otherwise({
        redirectTo: '/projects/'
      });
  });