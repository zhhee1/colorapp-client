'use strict';

describe('Controller: ColorAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ColorAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorAddCtrl = $controller('ColorAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ColorAddCtrl.awesomeThings.length).toBe(3);
  });
});
