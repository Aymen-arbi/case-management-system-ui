'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('BoardCtrl', function ($scope, $modal, $routeParams, boardService, socket) {
		var projectId = $routeParams.id;

		$scope.openAddModal = function () {
			$modal.open({
				animation: true,
				templateUrl: '../views/add-story-modal.html',
				controller: 'AddStoryCtrl',
				size: 'sm'
			});
		};

		function populateArrayStatus(array) {
			$scope.backlog = [];
			$scope.inProgress = [];
			$scope.test = [];
			$scope.done = [];

			for (var i = 0; i < array.length; i++) {
				var status = array[i].status;

				switch (status) {
				case 'PENDING':
					$scope.backlog.push(array[i]);
					break;
				case 'INPROGRESS':
					$scope.inProgress.push(array[i]);
					break;
				case 'TEST':
					$scope.test.push(array[i]);
					break;
				case 'DONE':
					$scope.done.push(array[i]);
					break;
				default:
					$scope.backlog.push(array[i]);
				}
			}
		}

		function getAll() {
			boardService.getStories(projectId)
				.then(function (res) {
					populateArrayStatus(res.data);
				});
		}

		getAll();

		$scope.leftLinks = [{
			link: 'Home',
			href: ' '
		}, {
			link: 'Overview',
			href: '/projects/' + projectId + '/overview'
		}];

		$scope.rightLinks = [];

		socket.on('update stories', function () {
			getAll();
		});

		$scope.dragControlListeners = {
			itemMoved: function (event) {
				var story = event.source.itemScope.story;
				var status = event.dest.sortableScope.$parent.$parent.title.replace(' ', '').toUpperCase();

				if (status === 'BACKLOG') {
					status = 'PENDING';
				}

				story.status = status;

				boardService.updateStory(story.storyId, story);
				socket.emit('update stories');
			}
		};
	});