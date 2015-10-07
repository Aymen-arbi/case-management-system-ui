'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('BoardCtrl', function ($scope, $routeParams, boardService) {
		var projectId = $routeParams.id;

		$scope.leftLinks = [{
			link: 'Home',
			href: ' '
		}, {
			link: 'Overview',
			href: ' '
		}];
		$scope.rightLinks = [];

		boardService.getStories(projectId)
			.then(function (res) {
				console.log(res);
				$scope.stories = res.data;
			}, function (res) {
				console.log(res);
			});
	});