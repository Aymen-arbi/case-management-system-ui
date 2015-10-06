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
			templateUrl: 'scripts/directives/mp-collapsible-column.html',
			restrict: 'E',
			transclude: true,
			scope: {
				styleclass: '@',
				title: '@'
			},
			controller: function ($scope) {
					$scope.classesString = $scope.styleclass;
					$scope.title = $scope.title;

					$scope.toggle = false;

					$scope.toggleNow = function () {
						$scope.toggle = !$scope.toggle;
					};
				}
				// link: function postLink(scope, element, attrs) {
				// 	element.text('this is the myBoard directive');
				// }
		};
	});