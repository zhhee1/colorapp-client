'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ColorAddCtrl
 * @description
 * # ColorAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ColorAddCtrl', function ($scope, Color, $location) {
    $scope.color = {};
    $scope.saveColor = function () {
      Color.post($scope.color).then(function () {
        $location.path('/colors');
      });
    };
  });
