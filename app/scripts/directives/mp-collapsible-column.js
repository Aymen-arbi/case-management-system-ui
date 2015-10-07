'use strict';

/**
 * @ngdoc directive
 * @name caseManagementSystemUiApp.directive:myBoard
 * @description
 * # myBoard
 */
angular.module('caseManagementSystemUiApp')
	.directive('mpCollapsibleColumn', function () {
		return {
			templateUrl: 'views/collapsible-column.html',
			restrict: 'E',
			transclude: true,
			scope: {
				styleclass: '@',
				title: '@'
			},
			controller: function ($scope) {
				$scope.classesString = $scope.styleclass;
				$scope.title = $scope.title;
				$scope.idTitle = $scope.title.replace(' ', '-');

				$scope.toggle = false;

				$scope.toggleNow = function () {
					$scope.toggle = !$scope.toggle;
				};
			}
		};
	});