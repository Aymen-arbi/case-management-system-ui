'use strict';

/**
 * @ngdoc directive
 * @name caseManagementSystemUiApp.directive:myworkItem
 * @description
 * # myworkItem
 */
angular.module('caseManagementSystemUiApp')
	.directive('mpWorkItem', function () {
		return {
			scope: {
				//Todo story: '='
			},
			templateUrl: 'views/workitem.html',
			restrict: 'E',
			controller: function ($scope) {
					$scope.story = {};
					$scope.story.name = "Hejhej";
				}
				// link: function postLink(scope, element, attrs) {
				//   element.text('this is the myworkItem directive');
				// }
		};
	});