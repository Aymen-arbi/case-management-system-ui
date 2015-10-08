'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('boardService', function ($http) {
		var projectUrl = "http://127.0.0.1:8080/case-management-webservice/projects/";
		var storyUrl = "http://127.0.0.1:8080/case-management-webservice/stories/";
		return {
			getProject: function (id) {
				return $http.get(projectUrl + id);
			},
			getStories: function (id) {
				return $http.get(projectUrl + id + '/stories');
			},
			getTeamMembers: function (id) {
				return $http.get(projectUrl + id + '/users');
			},
			getBacklog: function (projectId) {
				return $http.get(projectUrl + projectId + '/backlog');
			},
			getTeamMembersStories: function (projectId, userId) {
				return $http.get(projectUrl + projectId + '/users/' + userId + '/stories');
			},
			addTeamMember: function (projectId, teammember) {
				return $http.put(projectUrl + projectId + '/users', teammember);
			},
			removeTeamMember: function (projectId, userId) {
				return $http.put(projectUrl + projectId + '/users/' + userId);
			},
			assignStoryToUser: function (projectId, userId, storyId) {
				return $http.put(projectUrl + projectId + '/users/' + userId + '/stories', storyId);
			},
			addIssue: function (storyId, issue) {
				return $http.post(storyUrl + storyId + '/issues', issue);
			},
			removeIssue: function (storyId, issueId) {
				return $http.delete(storyUrl + storyId + '/issues/' + issueId);
			},
			addStory: function (id, story) {
				return $http.post(projectUrl + id + '/stories', story);
			},
			updateStory: function (storyId, story) {
				return $http.put(storyUrl + storyId, story);
			},
			removeStory: function (storyId) {
				return $http.delete(storyUrl + storyId);
			}
		};
	});