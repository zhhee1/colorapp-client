'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ViewCtrl', function($scope, $http) {
  $http.get("https://colorapp-server.herokuapp.com/color").then(function(response) {
    $scope.myData = response.data;
  });
});
