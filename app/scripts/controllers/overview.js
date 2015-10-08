'use strict';

/**
 * @ngdoc function
 * @name caseManagementSystemUiApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the caseManagementSystemUiApp
 */
angular.module('caseManagementSystemUiApp')
	.controller('OverviewCtrl', function ($scope, $routeParams, boardService, socket) {
		function getAll() {
			boardService.getStories(projectId)
				.then(function (res) {
					$scope.stories = res.data;
				}, function (res) {
					console.log(res);
				});
		}

		var projectId = $routeParams.id;
		$scope.userlist = [];
		$scope.stories = {};
		$scope.teamMembers = {};
		$scope.backlog = {};

		$scope.left = [{
			link: 'Back to project',
			href: '/projects/' + projectId
		}];

		getAll();

		socket.on('update stories', function () {
			$scope.stories = getAll();
		});

		boardService.getBacklog(projectId)
			.then(function (res) {
				$scope.backlog = res.data;
			});

		boardService.getTeamMembers(projectId)
			.then(function (res) {
				$scope.teamMembers = res.data;
				fillUserList();
			}, function (res) {
				console.log(res);
			});

		function fillUserList() {
			for (var i = 0; i < $scope.teamMembers.length; i++) {
				$scope.userlist[i] = {
					user: $scope.teamMembers[i],
					list: []
				};
			}
		}

		$scope.dragControlListeners = {
			itemMoved: function () {
				for (var i = 0; i < $scope.userlist.length; i++) {
					var list = $scope.userlist[i];
					var user = list.user;
					console.log(user);
					console.log(list.list);
					for (var n = 0; n < list.list.length; n++) {
						var story = list.list[n];
						console.log(story);
						boardService.assignStoryToUser(projectId, user.userId, story.storyId);
					}

					list.list.splice(0, 1);
				}

				socket.emit('update stories');
			}
		};
	});