'use strict';
angular.module('caseManagementSystemUiApp')
	.filter('backlogFilter', function () {
		return function (stories) {
			var storiesToReturn = [];
			console.log(stories);
			for (var i = 0; i < stories.length; i++) {
				var story = stories[i];
				if (story.user) {
					if (story.user.firstname === 'Not') {
						storiesToReturn.push(story);
					}
				}
			}

			return storiesToReturn;
		};
	});