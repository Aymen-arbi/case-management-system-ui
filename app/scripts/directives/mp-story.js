'use strict';

/**
 * @ngdoc directive
 * @name caseManagementSystemUiApp.directive:myworkItem
 * @description
 * # myworkItem
 */
angular.module('caseManagementSystemUiApp')
	.directive('mpStory', function () {
		return {
			scope: {
				//Todo story: '='
			},
			templateUrl: 'views/story.html',
			restrict: 'E',
			controller: function ($scope) {
				$scope.story = {};
				$scope.story.name = "Hejhej";
			}
		};
	});