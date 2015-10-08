'use strict';

angular.module('caseManagementSystemUiApp')
	.controller('BoardCtrl', function ($scope, $routeParams, boardService, socket) {
		var projectId = $routeParams.id;
		$scope.backlog = [];
		$scope.inProgress = [];
		$scope.test = [];
		$scope.done = [];

		function populateArrayStatus(array) {
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
					$scope.stories = res.data;
					populateArrayStatus($scope.stories);
				}, function (res) {
					console.log(res);
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
				var moveSuccess;
				console.log(event);

				moveSuccess = function () {
					console.log(event);
				};
				// socket.emit('update stories');
			}
		};
	});