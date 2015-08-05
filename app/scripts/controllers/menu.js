/**
 * Created by Marc on 05/08/2015.
 */

'use strict';

/**
 * @ngdoc function
 * @name clicandpickangularjsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the clicandpickangularjsApp
 */
var app = angular.module('clicandpickangularjsApp');

app.controller('MenuCtrl', ['$scope', '$location', 'DataService', function ($scope, $location, DataService) {
    var cart = DataService.cart;
    $scope.menu = {
        id: 1, name: 'Best-of', price: 4,
        options: {
            starters: [],
            dishes: [
                {id: 1, name: 'BigMac', img: 'http://encode.ru/attachment.php?attachmentid=1591&d=1309422214'},
                {id: 2, name: 'CheeseBurger', img: 'http://38.media.tumblr.com/avatar_ce1f944df2bc_128.png'}
            ],
            desserts: [],
            drinks: [{id: 3, name: 'Coca'}, {id: 3, name: 'Fanta'}]
        }
    };
    var choosenMenu = {};

    var menu = $scope.menu.options;

    $scope.showStarters = menu.starters.length > 0;
    $scope.showDishes = !$scope.showStarters && menu.dishes.length > 0;
    $scope.showDesserts = !$scope.showStarters && !$scope.showDishes && menu.desserts.length > 0;
    $scope.showDrinks = !$scope.showDesserts && !$scope.showStarters && !$scope.showDishes && menu.drinks.length > 0;

    $scope.chooseStarter = function (starter) {
        $scope.showStarters = false;
        if (starter != null)
            choosenMenu.starter = starter;
        if (menu.dishes.length > 0)
            $scope.showDishes = true;
        else
            $scope.chooseDish();
    };

    $scope.chooseDish = function (dish) {
        $scope.showDishes = false;
        if (dish != null)
            choosenMenu.dish = dish;
        if (menu.desserts.length > 0)
            $scope.showDesserts = true;
        else
            $scope.chooseDessert();
    };

    $scope.chooseDessert = function (dessert) {
        $scope.showDesserts = false;
        if (dessert != null)
            choosenMenu.dessert = dessert;
        if (menu.drinks.length > 0)
            $scope.showDrinks = true;
        else
            $scope.chooseDrink();
    };

    $scope.chooseDrink = function (drink) {
        $scope.showDrinks = false;
        if (drink != null)
            choosenMenu.drink = drink;
        cart.add($scope.menu.id, $scope.menu.name, $scope.menu.price, 1, $scope.choosenMenu);
        console.log(cart);
        $location.path($location.path().replace(/menu.*$/, ''));
    };
}]);