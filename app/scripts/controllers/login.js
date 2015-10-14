'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('LoginCtrl', function ($scope, $location, boardService, loginService, tokenService) {
		var projectId = 'huryOspdl12';
		$scope.user = {};
		$scope.linksLeft = [{
			link: 'Sign up',
			href: ' '
		}];

		$scope.login = function () {
			if ($scope.user.email && $scope.user.password) {
				loginService.login($scope.user.email, $scope.user.password)
					.then(function (res) {
						tokenService.persistToken(res.headers('Authorization'));
						$location.path('/projects/' + projectId);
					});
			}
		};
	});