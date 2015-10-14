'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('loginService', function ($http) {
		var url = 'https://localhost:8443/case-management-webservice/login';
		return {
			login: function (email, password) {
				var credential = {};
				credential.email = email;
				credential.password = password;

				return $http.post(url, credential);
			}
		};
	});