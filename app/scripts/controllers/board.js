'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('BoardCtrl', function ($scope, $modal, $location, $routeParams, boardService, socket, errorHandling, authService) {
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
				}, function (res) {
					errorHandling.handleError(res);
				});
		}

		getAll();

		$scope.leftLinks = [{
			link: 'Home',
		}, {
			link: 'Overview',
			click: function () {
				$location.path('/projects/' + projectId + '/overview');
			}
		}];

		$scope.rightLinks = [{
			link: 'Sign out',
			click: function () {
				authService.logout()
					.then(function () {
						$location.path('/login');
					});
			}
		}];

		socket.on('update stories', function () {
			getAll();
		});

		socket.on('path param', function (data) {
			projectId = data.param;
		});

		$scope.dragControlListeners = {
			itemMoved: function (event) {
				var story = event.source.itemScope.story;
				var status = event.dest.sortableScope.$parent.$parent.title.replace(' ', '').toUpperCase();

				if (status === 'BACKLOG') {
					status = 'PENDING';
				}

				story.status = status;

				boardService.updateStory(story.storyId, story)
					.then(function () {},
						function (res) {
							errorHandling.handleError(res);
						});

				socket.emit('update stories');
			}
		};
	});