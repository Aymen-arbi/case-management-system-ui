'use strict';

/**
 * @ngdoc function
 * @name caseManagementSystemUiApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the caseManagementSystemUiApp
 */
angular.module('caseManagementSystemUiApp')
	.controller('OverviewCtrl', function ($scope, $routeParams, boardService, socket, errorHandling) {
		function getAll() {
			boardService.getStories(projectId)
				.then(function (res) {
					$scope.stories = res.data;
				}, function (res) {
					errorHandling.handleError(res);
				});
		}

		var projectId = $routeParams.id;
		$scope.userlist = [];
		$scope.stories = {};
		$scope.teamMembers = {};
		$scope.backlog = {};

		$scope.left = [{
			link: 'Back',
			href: '/projects/' + projectId
		}];

		getAll();

		socket.on('update stories', function () {
			$scope.stories = getAll();
		});

		socket.on('addStoryToUser', function (data) {
			var user = data.user;
			var story = data.story;

			for (var i = 0; i < $scope.backlog.length; i++) {
				if ($scope.backlog[i] === story) {
					$scope.backlog.splice(i, 1);

					story.user = user;
					$scope.stories.push(story);
					return;
				}
			}

			story.user = user;
			$scope.stories.push(story);
		});

		boardService.getBacklog(projectId)
			.then(function (res) {
				$scope.backlog = res.data;
			}, function (res) {
				errorHandling.handleError(res);
			});

		boardService.getTeamMembers(projectId)
			.then(function (res) {
				$scope.teamMembers = res.data;
				fillUserList();
			}, function (res) {
				errorHandling.handleError(res);
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
				var userToSend, storyToSend;

				for (var i = 0; i < $scope.userlist.length; i++) {
					var list = $scope.userlist[i];
					var user = list.user;

					for (var n = 0; n < list.list.length; n++) {
						var story = list.list[n];
						boardService.assignStoryToUser(projectId, user.userId, story.storyId);

						userToSend = user;
						storyToSend = story;
					}

					list.list.splice(0, 1);
				}

				socket.emit('addStoryToUser', {
					user: userToSend,
					story: storyToSend
				});

			},
			accept: function (sourceItemHandleScope) {
				var user = sourceItemHandleScope.$parent.story.user;

				if (user.firstname === 'Not') {
					return true;
				}

				return false;
			}
		};
	});