'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('LoginCtrl', function ($scope, $location, boardService, authService, tokenService) {
		var projectId = 'huryOspdl12';
		$scope.user = {};
		$scope.emailCheck = /\S+@\S+\.\S+/;
		$scope.linksLeft = [{
			link: 'Sign up',
			click: function () {}
		}];

		$scope.login = function () {
			if (!$scope.loginForm.$error.pattern) {
				authService.login($scope.user.email, $scope.user.password)
					.then(function (res) {
						tokenService.persistToken(res.headers('Authorization'));
						$location.path('/projects/' + projectId);
					}, function (res) {
						if (res.status === 401) {
							$scope.user.password = '';
							$scope.toggleWrongCredentials = true;
						}
					});
			} else {
				$scope.toggleUsername = true;
			}
		};
	});