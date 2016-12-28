'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ColorDeleteCtrl
 * @description
 * # ColorDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ColorDeleteCtrl', function ($scope, $routeParams, Color, $location) {
    $scope.color = Color.one($routeParams.id).get().$object;
    $scope.deleteColor = function () {
      $scope.color.remove().then(function () {
        $location.path('/colors');
      });
    };
    $scope.back = function () {
      $location.path('/colors');
    };
  });
