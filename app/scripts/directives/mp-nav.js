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
			scope: {
				left: '=',
				right: '=',
				click: '&'
			},

			templateUrl: 'views/nav.html',
			restrict: 'E',
		};
	});