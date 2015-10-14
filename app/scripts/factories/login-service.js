'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('loginService', function ($http) {
		var url = "https://127.0.0.1:8443/case-management-webservice/login";
		return {
			login: function (username, password) {
				var credential = {};
				credential.username = username;
				credential.password = password;

				return $http.post(url, credential);
			}
		};
	});