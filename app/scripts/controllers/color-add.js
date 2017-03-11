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
    $scope.inputs = [];
    $scope.leads = [];
    $scope.colors = Color.getList().$object;
    $scope.color = {};
    $scope.color.prerequisites = [];
    $scope.color.leads = [];
    $scope.addfield=function(){
      $scope.inputs.push({});
    };
    $scope.addfield2=function(){
      $scope.leads.push({});
    };
    $scope.saveColor = function () {
      Color.post($scope.color).then(function () {
        $location.path('/concept');
      });
    };
  });
