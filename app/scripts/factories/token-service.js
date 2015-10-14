'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('tokenService', ['$window', function ($window) {
		var tokenStorage = $window.localStorage;
		var key = "token";
		return {
			persistToken: function (token) {
				tokenStorage[key] = JSON.stringify(token);
			},
			getToken: function () {
				return JSON.parse(key) || '{}';
			},
			removeToken: function () {
				tokenStorage.clear();
			}
		};
	}]);