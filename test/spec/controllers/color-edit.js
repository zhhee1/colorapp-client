'use strict';

describe('Controller: ColorEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ColorEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorEditCtrl = $controller('ColorEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ColorEditCtrl.awesomeThings.length).toBe(3);
  });
});
