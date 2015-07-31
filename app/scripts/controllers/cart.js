/**
 * Created by Marc on 31/07/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name clicandpickangularjsApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the clicandpickangularjsApp
 */
var app = angular.module('clicandpickangularjsApp');

app.controller('CartCtrl', ['$scope', 'DataService', function ($scope, DataService) {
    $scope.cart = DataService.cart;
}]);