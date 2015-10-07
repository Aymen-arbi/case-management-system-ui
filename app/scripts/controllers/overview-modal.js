'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('ModalInstanceCtrl', function ($scope, $modalInstance, stories) {

		$scope.stories = stories;

		$scope.ok = function () {
			$modalInstance.close('ok');
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	});