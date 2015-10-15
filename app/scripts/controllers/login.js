'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('LoginCtrl', function ($scope, $location, boardService, authService, tokenService) {
		var projectId = 'huryOspdl12';
		$scope.user = {};
		$scope.linksLeft = [{
			link: 'Sign up',
			click: function () {}
		}];

		$scope.login = function () {
			if ($scope.user.email && $scope.user.password) {
				authService.login($scope.user.email, $scope.user.password)
					.then(function (res) {
						tokenService.persistToken(res.headers('Authorization'));
						$location.path('/projects/' + projectId);
					}, function (res) {
						if (res.status === 400) {
							$scope.user.password = '';
							$scope.bad = true;
						}
					});

			}
		};
	});