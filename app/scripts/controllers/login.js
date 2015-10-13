'use strict';
angular.module('caseManagementSystemUiApp')
	.controller('LoginCtrl', function ($scope) {

		$scope.user = {};

		$scope.login = function () {


			// check user email and password 
			console.log("Logged in");
		};

		$scope.linksLeft = [{
			link: 'Sign up',
			href: ' '
		}];



	});