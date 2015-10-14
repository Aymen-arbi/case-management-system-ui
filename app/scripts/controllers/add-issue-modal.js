'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('AddIssueCtrl', function ($scope, $modalInstance, story, boardService, socket, errorHandling) {
		$scope.issue = {};

		$scope.ok = function () {
			if ($scope.issue.title && $scope.issue.description) {
				$modalInstance.close();
				boardService.addIssue(story.storyId, $scope.issue)
					.then(function () {
						socket.emit('update stories');
						$scope.issue = {};
					}, function (res) {
						errorHandling.handleError(res);
					});
			}
		};

		$scope.cancel = function () {
			$modalInstance.close();
			$scope.issue = {};
		};
	});