'use strict';

/**
 * @ngdoc function
 * @name caseManagementSystemUiApp.controller:ErrorCtrl
 * @description
 * # ErrorCtrl
 * Controller of the caseManagementSystemUiApp
 */
angular.module('caseManagementSystemUiApp')
	.controller('ErrorCtrl', function ($scope, $location, socket) {
		var id = 'huryOspdl12';
		$scope.leftLinks = [{
			link: 'Home',
			click: function () {
				$location.path('projects/' + id);
				socket.emit('path param', {
					param: id
				});
			}
		}];
	});