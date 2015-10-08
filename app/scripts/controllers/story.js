'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('StoryCtrl', function ($scope, $modal) {
		switch ($scope.story.status) {
		case 'PENDING':
			$scope.dynamic = 0;
			break;
		case 'INPROGRESS':
			$scope.dynamic = 25;
			break;
		case 'ISSUED':
			$scope.dynamic = 50;
			break;
		case 'TEST':
			$scope.dynamic = 75;
			break;
		case 'DONE':
			$scope.dynamic = 100;
			break;
		default:
			$scope.dynamic = 0;
		}

		if (!$scope.story.user) {
			$scope.story.user = {};
			$scope.story.user.firstname = "Not";
			$scope.story.user.lastname = "assigned";
		}

		$scope.hasIssues = function () {
			return $scope.story.issues.length > 0;
		};

		$scope.openIssuesModal = function () {
			if ($scope.hasIssues()) {
				$modal.open({
					animation: true,
					templateUrl: '../views/issues-modal.html',
					controller: 'IssuesModalCtrl',
					resolve: {
						story: function () {
							return $scope.story;
						}
					},
					size: 'sm'
				});
			}
		};
	});