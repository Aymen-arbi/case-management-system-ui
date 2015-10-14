'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('boardService', function ($http, tokenService) {
		var projectUrl = "https://127.0.0.1:8443/case-management-webservice/projects/";
		var storyUrl = "https://127.0.0.1:8443/case-management-webservice/stories/";

		function createConfig() {
			var token = tokenService.getToken();
			return {
				headers: {
					Authorization: token
				}
			};
		}

		return {
			getProject: function (id) {
				return $http.get(projectUrl + id, createConfig());
			},
			getStories: function (id) {
				return $http.get(projectUrl + id + '/stories', createConfig());
			},
			getTeamMembers: function (id) {
				return $http.get(projectUrl + id + '/users', createConfig());
			},
			getBacklog: function (projectId) {
				return $http.get(projectUrl + projectId + '/backlog', createConfig());
			},
			getTeamMembersStories: function (projectId, userId) {
				return $http.get(projectUrl + projectId + '/users/' + userId + '/stories', createConfig());
			},
			addTeamMember: function (projectId, teammember) {
				return $http.put(projectUrl + projectId + '/users', teammember, createConfig());
			},
			removeTeamMember: function (projectId, userId) {
				return $http.put(projectUrl + projectId + '/users/' + userId, createConfig());
			},
			assignStoryToUser: function (projectId, userId, storyId) {
				return $http.put(projectUrl + projectId + '/users/' + userId + '/stories', storyId, createConfig());
			},
			addIssue: function (storyId, issue) {
				return $http.post(storyUrl + storyId + '/issues', issue, createConfig());
			},
			removeIssue: function (storyId, issueId) {
				return $http.delete(storyUrl + storyId + '/issues/' + issueId, createConfig());
			},
			addStory: function (id, story) {
				return $http.post(projectUrl + id + '/stories', story, createConfig());
			},
			updateStory: function (storyId, story) {
				return $http.put(storyUrl + storyId, story, createConfig());
			},
			removeStory: function (storyId) {
				return $http.delete(storyUrl + storyId, createConfig());
			}
		};
	});