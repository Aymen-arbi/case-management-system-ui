'use strict';

/**
 * @ngdoc directive
 * @name caseManagementSystemUiApp.directive:mpNav
 * @description
 * # mpNav
 */
angular.module('caseManagementSystemUiApp')
  .directive('mpNav', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mpNav directive');
      }
    };
  });
