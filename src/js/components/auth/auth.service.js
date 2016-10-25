(function() {

  'use strict';

  angular
    .module('myApp.components.auth', [])
    .service('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    /*jshint validthis: true */
    this.test = 'no sanity check';
  }

})();
