'use strict';

angular.module('mushrooms').factory('MushroomFactory', function ($q, $http) {
  let getMushrooms = () => {
    return $q((resolve, reject) => {
      $http
        .get('https://mushrooms-b45e5.firebaseio.com/mushrooms.json')
        .then((shrooms) => {
          let shroomArr = Object.values(shrooms.data);
          resolve(shroomArr);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  return { getMushrooms };
});