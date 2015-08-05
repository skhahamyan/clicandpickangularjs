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

app.controller('RestaurantCtrl', ['$scope', '$location', 'DataService', function ($scope, $location, DataService) {
    $scope.cart = DataService.cart;
    $scope.showMenu = function (id) {
        $location.path($location.path() + '/menu/' + id);
    };

    $scope.menu = {
        menus: [{id: 1, name: 'Best-of', price: 4}],
        starters: [],
        dishes: [
            {id: 1, name: 'BigMac', price: 3, img: 'http://encode.ru/attachment.php?attachmentid=1591&d=1309422214'},
            {id: 2, name: 'CheeseBurger', price: 2, img: 'http://38.media.tumblr.com/avatar_ce1f944df2bc_128.png'}
        ],
        desserts: [],
        drinks: [{id: 3, name: 'Coca', price: 1}]
    };
}]);