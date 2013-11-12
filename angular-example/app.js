angular.module('myApp', [])
  .controller('MyCtrl', function ($scope, $http) {
    $scope.greeting = 'loading';

    var translations;

    $http.get('translations.json').success(function (data) {
      $scope.greeting = 'hello';
      translations = data;
    });

    $scope.translate = function (lang) {
      $scope.greeting = translations[lang];
    };
  });
