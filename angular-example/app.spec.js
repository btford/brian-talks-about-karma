
describe('MyController', function () {

  var controller,
      scope;

  // load the `myApp` module before each test
  beforeEach(module('myApp'));


  // instantiate MyCtrl with the given scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    $httpBackend.expect('GET', 'translations.json').respond({
      french: 'bonjour'
    });
    scope = $rootScope.$new();
    controller = $controller('MyCtrl', { $scope: scope });
  }));

  it('should have a loading message before the translations are available', function () {
    expect(scope.greeting).toBe('loading');
  });


  // you can nest describes
  describe('after the translations load', function () {

    beforeEach(inject(function ($httpBackend) {
      $httpBackend.flush();
    }));

    it('should have a greet property the server returns the translations', function ($httpBackend) {
      expect(scope.greeting).toBe('hello');
    });

    it('should change the greeting when translate is called', function ($httpBackend) {
      scope.translate('french');
      expect(scope.greeting).toBe('bonjour');
    });
  });
});
