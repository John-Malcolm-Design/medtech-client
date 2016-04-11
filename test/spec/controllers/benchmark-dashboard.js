'use strict';

describe('Controller: BenchmarkDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('medtechClientApp'));

  var BenchmarkDashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BenchmarkDashboardCtrl = $controller('BenchmarkDashboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BenchmarkDashboardCtrl.awesomeThings.length).toBe(3);
  });
});
