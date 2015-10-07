'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('ModalInstanceCtrl', function ($scope, $modalInstance, stories) {

		console.log('Hejsan');
		console.log(stories);

		$scope.ok = function () {
			$modalInstance.close('ok');
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	});