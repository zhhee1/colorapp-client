'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute', 'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/colors', {
        templateUrl: 'views/colors.html',
        controller: 'ColorsCtrl',
        controllerAs: 'colors'
      })
      .when('/create/color', {
        templateUrl: 'views/color-add.html',
        controller: 'ColorAddCtrl',
        controllerAs: 'colorAdd'
      })
      .when('/color/:id', {
        templateUrl: 'views/color-view.html',
        controller: 'ColorViewCtrl',
        controllerAs: 'colorView'
      })
      .when('/color/:id/delete', {
        templateUrl: 'views/color-delete.html',
        controller: 'ColorDeleteCtrl',
        controllerAs: 'colorDelete'
      })
      .when('/color/:id/edit', {
        templateUrl: 'views/color-edit.html',
        controller: 'ColorEditCtrl',
        controllerAs: 'colorEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('ColorRestangular', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id:'_id'
      });
    });
  })
  .factory('Color', function (ColorRestangular) {
    return ColorRestangular.service('color');
  });
