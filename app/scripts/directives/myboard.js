'use strict';

/**
 * @ngdoc directive
 * @name caseManagementSystemUiApp.directive:myBoard
 * @description
 * # myBoard
 */
angular.module('caseManagementSystemUiApp')
	.directive('myBoard', function () {
		return {
			template: '<div>' +

				'<div class="panel panel-primary panel-board" id="panelToDo">' +
				'<div class="panel-heading panel-heading-board">' +
				'<h4 class="panel-title">' +
				'<a data-toggle="collapse" data-target="#collapseToDo"> To Do </a>' +
				'</h4> ' +
				'</div>' +
				'<div id="collapseToDo" class="panel-collapse collapse in">' +
				'<div class="panel-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada a nunc nec egestas. Curabitur aliquet venenatis felis a vulputate. In placerat viverra massa, convallis efficitur sem ultrices non</p> ' +


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



				'</div>' +
				'</div>' +
				'</div>' +

				'<div class = "panel panel-info panel-board" id = "panelInProgress">' +
				'<div class = "panel-heading panel-heading-board" >' +
				'<h4 class = "panel-title" >' +
				'<a data-toggle = "collapse" data-target="#collapseInProgress"> In Progress </a>' +
				'</h4>' +
				'</div>' +
				'<div id = "collapseInProgress" class = "panel-collapse collapse in">' +
				'<div class = "panel-body">' +
				'</div>' +
				'</div>' +
				'</div>' +

				'<div class = "panel panel-warning panel-board" id = "panelToTest">' +
				'<div class = "panel-heading panel-heading-board">' +
				'<h4 class = "panel-title">' +
				'<a data-toggle = "collapse" data-target = "#collapseToTest"> To Test </a></h4>' +
				'</div> <div id = "collapseToTest" class = "panel-collapse collapse in">' +
				'<div class = "panel-body">' +
				'</div>' +
				'</div >' +
				'</div>' +

				'<div class = "panel panel-success panel-board" id = "panelDone">' +
				'<div class = "panel-heading panel-heading-board">' +
				'<h4 class = "panel-title">' +
				'<a data-toggle = "collapse" data-target = "#collapseDone"> Done </a></h4>' +
				'</div>' +
				'<div id = "collapseDone" class = "panel-collapse collapse in">' +
				'<div class = "panel-body">' +
				'</div>' +
				'</div>' +
				'</div>' +

				'</div>',
			restrict: 'E'
				// link: function postLink(scope, element, attrs) {
				// 	element.text('this is the myBoard directive');
				// }
		};
	});