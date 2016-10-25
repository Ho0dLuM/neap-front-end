(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.config',
      'myApp.components.coffee',
      'myApp.components.main',
      'myApp.components.auth'
    ]);

})();
