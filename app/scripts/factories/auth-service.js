'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('authService', function ($http, tokenService) {
		var url = 'https://localhost:8443/case-management-webservice/';
		return {
			login: function (email, password) {
				var credential = {};
				credential.email = email;
				credential.password = password;

				return $http.post(url + 'login', credential);
			},
			logout: function () {
				var token = tokenService.getToken();
				tokenService.removeToken();
				return $http.post(url + 'logout', token);
			}
		};
	});