'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('BoardCtrl', ['boardService', function ($scope, $routeParams, boardService) {
		var projectId = $routeParams.id;

		boardService.getStories(projectId)
			.then(function (res) {
				console.log(res);
			}, function (res) {
				console.log(res);
			});
	}]);