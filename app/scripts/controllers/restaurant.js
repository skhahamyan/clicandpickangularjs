/**
 * Created by Marc on 31/07/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name clicandpickangularjsApp.controller:RestaurantCtrl
 * @description
 * # RestaurantCtrl
 * Controller of the clicandpickangularjsApp
 */
var app = angular.module('clicandpickangularjsApp');

app.controller('RestaurantCtrl', ['$scope', 'DataService', function ($scope, DataService) {
    $scope.cart = DataService.cart;

    $scope.types = ['Entree', 'Plat', 'Dessert', 'Boisson'];
    $scope.menu = [
        {id:1, name: 'BigMac', price: 3, type: 'dish', img: 'http://encode.ru/attachment.php?attachmentid=1591&d=1309422214'},
        {id:2, name: 'CheeseBurger', price: 2, type: 'dish', img: 'http://38.media.tumblr.com/avatar_ce1f944df2bc_128.png'},
        {id:3, name: 'Coca', price: 1, type: 'drink'}
    ];
}]);