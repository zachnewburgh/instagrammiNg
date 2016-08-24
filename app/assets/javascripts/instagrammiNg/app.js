( function() {
  'use strict';

  angular
    .module('instagrammiNg', ['templates','ngRoute'])
    .config(['$routeProvider', 
      function($routeProvider) {
        $routeProvider
         .when('/', {
           templateUrl: 'instagrammiNg/views/dashboard.html'
          });
      }
    ]);
  })();