'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('LoginCtrl', function ($scope, boardService, loginService) {

		$scope.user = {};
		$scope.linksLeft = [{
			link: 'Sign up',
			href: ' '
		}];

		$scope.login = function () {
			if ($scope.user.email && $scope.user.password) {
				loginService.login($scope.user.email, $scope.user.password)
					.then(function () {

					});
			}
		};
	});