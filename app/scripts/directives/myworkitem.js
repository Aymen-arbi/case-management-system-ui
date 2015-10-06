'use strict';

/**
 * @ngdoc directive
 * @name caseManagementSystemUiApp.directive:myworkItem
 * @description
 * # myworkItem
 */
angular.module('caseManagementSystemUiApp')
	.directive('myWorkItem', function () {
		return {
			template: '<div>' +
				'<accordion close-others="oneAtATime">' +
				'<accordion-group is-open="status.open" class="panel-danger workItem">' +
				'<accordion-heading ng-controller = "WorkitemcontrollerCtrl">' +
				'<div class="workItemInfo">Title !' +
				'<i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}"> </i>' +
				'<progressbar class="progress-striped active workItemStatus" animate="false" value="dynamic" type="success">' +
				' <b>{{dynamic}}%</b></progressbar>' +
				'</div>' +
				'<div class="workItemInfo">' +
				'<p class="workItemName">Aymen Arbi</p>' +
				'<p class="workItemPrio">Prio : Hight</p>' +
				'</div>' +
				'</accordion-heading>' +
				'<h4>Descritpion:</h4>' +
				'<p>This is just some content to illustrate fancy headings.</p>' +
				'</accordion-group>' +
				'</accordion>' +
				'</div>',
			restrict: 'E'
				// link: function postLink(scope, element, attrs) {
				//   element.text('this is the myworkItem directive');
				// }
		};
	});