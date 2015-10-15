'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('errorHandling', function ($location) {

		return {
			handleError: function (response) {
				if (response.status === 401) {
					$location.path('/login');
					$location.replace();
				} else if (response.status === 400) {
					$location.path('/error');
					$location.replace();
				}
			}
		};
	});