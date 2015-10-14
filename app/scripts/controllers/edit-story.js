'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('EditStoryCtrl', function ($scope, $modalInstance, boardService, story, socket, errorHandling) {
		$scope.story = story;

		$scope.ok = function () {
			if ($scope.story.name && $scope.story.description && $scope.story.priority) {
				$modalInstance.close();
				boardService.updateStory($scope.story.storyId, $scope.story)
					.then(function () {},
						function (res) {
							errorHandling.handleError(res);
						});

				socket.emit('update stories');
			}
		};

		$scope.cancel = function () {
			$modalInstance.close();
		};
	});