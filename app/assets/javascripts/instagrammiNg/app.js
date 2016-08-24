( function() {
  'use strict';

  angular
    .module('angular_rails', ['templates','ngRoute'])
    .config(['$routeProvider', 
      function($routeProvider) {
        $routeProvider
         .when('/', {
           templateUrl: 'instagrammiNg/dashboard.html'
          });
      }
    ]);
  })();