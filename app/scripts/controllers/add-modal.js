 'use strict';
 angular.module('caseManagementSystemUiApp')
   .controller('AddModalCtrl', function ($scope, $routeParams, boardService) {

     var projectId = $routeParams.id;



     $scope.addStory = function () {
       var story = $scope.story;
       story.status = 'PENDING';
       console.log('close');
       boardService.addStory(projectId, story);
       console.log(story);
     };


   });