'use strict';

/**
 * @ngdoc function
 * @name caseManagementSystemUiApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the caseManagementSystemUiApp
 */
angular.module('caseManagementSystemUiApp')
	.controller('OverviewCtrl', function ($scope, $routeParams, boardService) {
		var projectId = $routeParams.id;

		boardService.getStories(projectId)
			.then(function (res) {
				$scope.stories = res.data;
			}, function (res) {
				console.log(res);
			});
	});