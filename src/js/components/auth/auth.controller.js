(function() {

  'use strict';

  angular
    .module('myApp.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['$scope', 'authService'];

  function authController(authService) {
    //console.log(authService.test);
  }

})();
