'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('BoardCtrl', function ($scope, $routeParams, boardService, socket) {
		function getAll() {
			boardService.getStories(projectId)
				.then(function (res) {
					$scope.stories = res.data;
				}, function (res) {
					console.log(res);
				});
		}

		var projectId = $routeParams.id;

		getAll();

		$scope.leftLinks = [{
			link: 'Home',
			href: ' '
		}, {
			link: 'Overview',
			href: '/projects/' + projectId + '/overview'
		}];

		$scope.rightLinks = [];

		socket.on('update stories', function () {
			getAll();
		});
	});