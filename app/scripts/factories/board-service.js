'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('boardService', function ($http, tokenService) {
		var projectUrl = "https://127.0.0.1:8443/case-management-webservice/projects/";
		var storyUrl = "https://127.0.0.1:8443/case-management-webservice/stories/";
		var token = tokenService.getToken();
		var config = {
			headers: {
				Authorization: token.token
			}
		};

		return {
			getProject: function (id) {
				return $http.get(projectUrl + id, config);
			},
			getStories: function (id) {
				return $http.get(projectUrl + id + '/stories', config);
			},
			getTeamMembers: function (id) {
				return $http.get(projectUrl + id + '/users', config);
			},
			getBacklog: function (projectId) {
				return $http.get(projectUrl + projectId + '/backlog', config);
			},
			getTeamMembersStories: function (projectId, userId) {
				return $http.get(projectUrl + projectId + '/users/' + userId + '/stories', config);
			},
			addTeamMember: function (projectId, teammember) {
				return $http.put(projectUrl + projectId + '/users', teammember, config);
			},
			removeTeamMember: function (projectId, userId) {
				return $http.put(projectUrl + projectId + '/users/' + userId, config);
			},
			assignStoryToUser: function (projectId, userId, storyId) {
				return $http.put(projectUrl + projectId + '/users/' + userId + '/stories', storyId, config);
			},
			addIssue: function (storyId, issue) {
				return $http.post(storyUrl + storyId + '/issues', issue, config);
			},
			removeIssue: function (storyId, issueId) {
				return $http.delete(storyUrl + storyId + '/issues/' + issueId, config);
			},
			addStory: function (id, story) {
				return $http.post(projectUrl + id + '/stories', story, config);
			},
			updateStory: function (storyId, story) {
				return $http.put(storyUrl + storyId, story, config);
			},
			removeStory: function (storyId) {
				return $http.delete(storyUrl + storyId, config);
			}
		};
	});