'use strict';

/**
 * @ngdoc directive
 * @name caseManagementSystemUiApp.directive:mpNav
 * @description
 * # mpNav
 */
angular.module('caseManagementSystemUiApp')
	.directive('mpNav', function () {
		return {
			scope: {
				left: '=',
				right: '='
			},

			templateUrl: 'views/nav.html',
			restrict: 'E',
			controller: function ($scope) {
				$scope.leftLinks = $scope.left;
				$scope.rightLinks = $scope.right;
			}
		};
	});