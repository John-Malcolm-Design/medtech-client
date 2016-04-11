'use strict';

describe('Service: benchmarkService', function () {

  // load the service's module
  beforeEach(module('medtechClientApp'));

  // instantiate service
  var benchmarkService;
  beforeEach(inject(function (_benchmarkService_) {
    benchmarkService = _benchmarkService_;
  }));

  it('should do something', function () {
    expect(!!benchmarkService).toBe(true);
  });

});
