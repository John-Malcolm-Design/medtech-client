'use strict';

describe('Controller: BenchmarkCtrl', function () {

  // load the controller's module
  beforeEach(module('medtechClientApp'));

  var BenchmarkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BenchmarkCtrl = $controller('BenchmarkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BenchmarkCtrl.awesomeThings.length).toBe(3);
  });
});
