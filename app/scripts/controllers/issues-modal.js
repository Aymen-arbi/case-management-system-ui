'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('IssuesModalCtrl', function ($scope, story, boardService, socket, errorHandling) {
		$scope.story = story;

		$scope.issueDone = function (index) {
			console.log(index);
			boardService.removeIssue(story.storyId, story.issues[index].issueId)
				.then(function () {
					socket.emit('update stories');
					story.issues.splice(index, 1);
				}, function (res) {
					errorHandling.handleError(res);
				});
		};
	});