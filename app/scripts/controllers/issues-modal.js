'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('IssuesModalCtrl', function ($scope, $modalInstance, story, boardService) {
		$scope.story = story;

		$scope.issueDone = function (index) {
			boardService.removeIssue(story.storyId, story.issues[index].issueId)
				.then(function () {
					$modalInstance.close();
				});
		};
	});