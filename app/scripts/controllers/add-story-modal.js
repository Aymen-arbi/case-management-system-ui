'use strict';
angular.module('caseManagementSystemUiApp')
  .controller('AddStoryCtrl', function ($scope, $modalInstance, $routeParams, boardService, socket) {

    var projectId = $routeParams.id;
    $scope.story = {};

    $scope.ok = function () {
      if ($scope.story.name && $scope.story.description && $scope.story.priority) {
        $modalInstance.close();
        $scope.story.status = 'PENDING';
        boardService.addStory(projectId, $scope.story)
          .then(function () {
            socket.emit('update stories');
            $scope.story = {};
          });

      }
    };

    $scope.cancel = function () {
      $modalInstance.close();
      $scope.story = {};
    };
  });