'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('BoardCtrl', function ($scope, $routeParams, boardService) {
		var projectId = $routeParams.id;

		$scope.leftLinks = [{
			link: 'Home',
			href: ' ',
			click: ''
		}, {
			link: 'Overview',
			href: '/projects/' + projectId + '/overview',
			click: 'open()'
		}, {
			link: 'addStory',
			href: '/projects/' + projectId + '/story',
			click: 'openM()'


		}];
		$scope.rightLinks = [];

		boardService.getStories(projectId)
			.then(function (res) {
				$scope.stories = res.data;

			}, function (res) {
				console.log(res);
			});
	});