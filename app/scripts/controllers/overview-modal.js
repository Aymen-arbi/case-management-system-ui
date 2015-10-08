'use strict';

angular.module('caseManagementSystemUiApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, stories) {



    $scope.stories = stories;
    $scope.marcusItems = [];

    $scope.ok = function () {
      $modalInstance.close();
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');

    };
  });