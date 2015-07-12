var signUpSheetApp = angular.module('signUpSheetApp', ['ngRoute', 'signUpSheetControllers'] );

signUpSheetApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/all', {
        templateUrl: 'partials/all.html',
        controller: 'SheetAllController'
      }).
      when('/event/:eventId', {
        templateUrl: 'partials/event.html',
        controller: 'SheetEventController'
      }).
      otherwise({
        redirectTo: '/all'
      });
  }]);
