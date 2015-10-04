'use strict';

describe('Directive: myBoard', function () {

  // load the directive's module
  beforeEach(module('caseManagementSystemUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-board></my-board>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myBoard directive');
  }));
});
