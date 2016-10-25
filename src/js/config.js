(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/coffee', {
        templateUrl: 'js/components/coffee/coffee.view.html',
        controller: 'coffeeController',
        controllerAs: 'coffeeCtrl'
      })
      .when('/user', {
        templateUrl: 'js/components/auth/auth.view.html',
        controller: 'authController',
        controllerAs: 'authCtrl'
      })
      .otherwise({
        redirectTo: '/coffee'
      });
  }

})();
