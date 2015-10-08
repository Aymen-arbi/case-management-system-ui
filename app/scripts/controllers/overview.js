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
		$scope.userlist = [];
		$scope.teamMembers = {};

		boardService.getStories(projectId)
			.then(function (res) {
				$scope.stories = res.data;
			}, function (res) {
				console.log(res);
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
			itemMoved: function (event) {
				var stories = event.dest.sortableScope.modelValue;
				console.log($scope.userlist.length);
				for (var i = 0; i < $scope.userlist.length; i++) {
					var list = $scope.userlist[i];
					var user = list.user;
					console.log(user);
					for (var n = 0; n < list.list.length; n++) {
						var story = list.list[n];
						console.log(story.storyId);
						boardService.assignStoryToUser(projectId, user.userId, story.storyId);
					}
				}
				stories.splice(0, stories.length);
			}
		};
	});