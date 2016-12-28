'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ColorsCtrl
 * @description
 * # ColorsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ColorsCtrl', function ($scope, Color) {
    $scope.colors = Color.getList().$object;
  });
