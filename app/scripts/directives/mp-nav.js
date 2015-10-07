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
				right: '=',
				stories: '='
			},

			templateUrl: 'views/nav.html',
			restrict: 'E',
			controller: function ($scope, $modal) {
				$scope.leftLinks = $scope.left;
				$scope.rightLinks = $scope.right;
				$scope.stories = $scope.stories;

				$scope.open = function () {
					$modal.open({
						animation: true,
						templateUrl: 'views/overview-modal.html',
						controller: 'ModalInstanceCtrl',
						size: 'lg',
						resolve: {
							stories: function () {
								return $scope.stories;
							}
						}
					});
				};
			}
		};
	});