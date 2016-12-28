'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ColorEditCtrl
 * @description
 * # ColorEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ColorEditCtrl', function ($scope, $routeParams, Color, $location) {
    $scope.editColor = true;
    $scope.color = {};
    Color.one($routeParams.id).get().then(function (color) {
      $scope.color = color;
      $scope.saveColor = function () {
        $scope.color.save().then(function () {
          $location.path('/colors');
        });
      };
    });
  });
