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
			controller: 'StoryCtrl'
		};
	});