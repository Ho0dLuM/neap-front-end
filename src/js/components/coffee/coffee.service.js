(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    // const baseURL = 'http://salty-harbor-81589.herokuapp.com/coffee'
    const baseURL = 'http://localhost:3000/coffee';
    this.getAllCoffee = function() {
      return $http.get(baseURL);
    };

    this.getSingleCoffee = function(id) {
      return $http.get(`${baseURL}${id}`);
    };

    this.addCoffee = function(coffee) {
      return $http({
        method: 'POST',
        url: baseURL,
        data: coffee,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();
