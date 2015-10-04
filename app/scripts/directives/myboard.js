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

				'<div class="panel panel-primary" id="panelToDo">' +
				'<div class="panel-heading">' +
				'<h4 class="panel-title">' +
				'<a data-toggle="collapse" data-target="#collapseToDo"> To Do </a>' +
				'</h4> ' +
				'</div>' +
				'<div id="collapseToDo" class="panel-collapse collapse in">' +
				'<div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada a nunc nec egestas. Curabitur aliquet venenatis felis a vulputate. In placerat viverra massa, convallis efficitur sem ultrices non. Vivamus auctor justo sed felis maximus laoreet. Phasellus at nisi non dolor ultricies pretium. Vivamus feugiat at turpis sed aliquet. Aliquam luctus vehicula mauris, id pretium lectus accumsan mollis. Praesent commodo, ipsum eu facilisis placerat, odio neque auctor elit, ac tincidunt sapien sem ac dui. Praesent porta lectus nec leo auctor luctus at malesuada ex. Sed at mauris cursus, sodales sem quis, ultricies lorem. Nullam eros quam, vestibulum ut tellus egestas, pharetra sollicitudin dui. Aenean vel dui feugiat, dignissim justo eget, convallis enim. Fusce eget consequat diam, vitae dictum enim. Phasellus vitae laoreet purus. Vivamus bibendum, mi a feugiat sodales, ex velit ullamcorper ipsum, a vehicula neque nisi eu urna. Etiam mattis mi quis varius sollicitudin. Donec blandit lacinia nulla, vitae gravida est accumsan ac. ' +
				'</div>' +
				'</div>' +
				'</div>' +

				'<div class = "panel panel-info" id = "panelInProgress">' +
				'<div class = "panel-heading" >' +
				'<h4 class = "panel-title" >' +
				'<a data-toggle = "collapse" data-target="#collapseInProgress"> In Progress </a>' +
				'</h4>' +
				'</div>' +
				'<div id = "collapseInProgress" class = "panel-collapse collapse in">' +
				'<div class = "panel-body">' +
				'</div>' +
				'</div>' +
				'</div>' +

				'<div class = "panel panel-warning" id = "panelToTest">' +
				'<div class = "panel-heading">' +
				'<h4 class = "panel-title">' +
				'<a data-toggle = "collapse" data-target = "#collapseToTest"> To Test </a></h4>' +
				'</div> <div id = "collapseToTest" class = "panel-collapse collapse in">' +
				'<div class = "panel-body">' +
				'</div>' +
				'</div >' +
				'</div>' +

				'<div class = "panel panel-success" id = "panelDone">' +
				'<div class = "panel-heading">' +
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