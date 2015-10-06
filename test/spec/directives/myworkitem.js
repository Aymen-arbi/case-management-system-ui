'use strict';

describe('Directive: myworkItem', function () {

  // load the directive's module
  beforeEach(module('caseManagementSystemUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mywork-item></mywork-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myworkItem directive');
  }));
});
