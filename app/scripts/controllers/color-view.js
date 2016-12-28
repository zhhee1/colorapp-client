'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ColorViewCtrl
 * @description
 * # ColorViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ColorViewCtrl', function ($scope, $routeParams, Color) {
    $scope.viewColor = true;
    $scope.color = Color.one($routeParams.id).get().$object;
  });
