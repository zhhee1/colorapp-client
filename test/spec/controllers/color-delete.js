'use strict';

describe('Controller: ColorDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ColorDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorDeleteCtrl = $controller('ColorDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ColorDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
