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
    $scope.inputs = [];
    $scope.leads = [];
    $scope.color.prerequisites = [];
    $scope.color.leads = [];
    Color.one($routeParams.id).get().then(function (color) {
      $scope.colors = Color.getList().$object;
      $scope.color = color;
      $scope.addfield=function(){
        $scope.inputs.push({});
      };
      $scope.addfield2=function(){
        $scope.leads.push({});
      };
      $scope.saveColor = function () {
        $scope.color.save().then(function () {
          $location.path('/colors');
        });
      };
    });
  });
