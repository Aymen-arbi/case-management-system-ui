'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('errorHandling', function ($location) {

		return {
			handleError: function (response) {
				if (response.status === 401) {
					$location.path('/login');
					$location.replace();
				}
			}
		};
	});