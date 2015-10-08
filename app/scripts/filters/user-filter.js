'use strict';

angular.module('caseManagementSystemUiApp')
	.filter('userFilter', function () {
		return function (array, user) {
			var storiesToReturn = [];
			if (array) {
				for (var i = 0; i < array.length; i++) {
					var story = array[i];
					if (story.user) {
						if (story.user.email === user.email) {
							storiesToReturn.push(story);
						}
					}
				}
			}

			return storiesToReturn;
		};
	});