'use strict';

describe('Controller: WorkitemcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('caseManagementSystemUiApp'));

  var WorkitemcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkitemcontrollerCtrl = $controller('WorkitemcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkitemcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
