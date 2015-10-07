'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('IssuesModalCtrl', function ($scope, $modalInstance, story, boardService, socket) {
		$scope.story = story;

		$scope.issueDone = function (index) {
			boardService.removeIssue(story.storyId, story.issues[index].issueId)
				.then(function () {
					socket.emit('update stories');
					story.issues.splice(index, 1);
				});
		};
	});