'use strict';
angular.module('caseManagementSystemUiApp')
	.factory('socket', function (socketFactory) {
		var myIoSocket = io.connect('http://socketcms-patrikappelqvist.rhcloud.com:8000/', {
			'forceNew': true
		});

		var mySocket = socketFactory({
			ioSocket: myIoSocket
		});

		return mySocket;
	});