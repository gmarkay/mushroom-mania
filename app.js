'use strict';

angular.module('mushrooms', ['ngRoute'])
  .config($routeProvider=>{
    $routeProvider
    .when('/',{
      templateUrl: 'partials/mushroom.html',
      controller:'MushroomCtrl'
    })
  });
