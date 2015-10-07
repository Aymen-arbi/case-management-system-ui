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
				story: '='
			},
			templateUrl: 'views/story.html',
			restrict: 'E',
			controller: function ($scope) {

				// TODO change to the real story
			switch ($scope.story.status) {
			case 'PENDING':
				$scope.dynamic = 0;
				break;
			case 'INPROGRESS':
				$scope.dynamic = 25;
				break;
			case 'ISSUED':
				$scope.dynamic = 50;
				break;
			case 'TEST':
				$scope.dynamic = 75;
				break;
			case 'DONE':
				$scope.dynamic = 100;
				break;
			default:
				$scope.dynamic = 0;
			}
			}
		};
	});