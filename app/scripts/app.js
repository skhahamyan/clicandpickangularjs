'use strict';

/**
 * @ngdoc overview
 * @name clicandpickangularjsApp
 * @description
 * # clicandpickangularjsApp
 *
 * Main module of the application.
 */
var app = angular
    .module('clicandpickangularjsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMap',
    ]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/s/:where', {
            templateUrl: 'views/restaurants.html',
            controller: 'RestaurantsCtrl',
            controllerAs: 'restaurants'
        })
        .when('/restaurants/:restaurantId', {
            templateUrl: 'views/restaurant.html',
            controller: 'RestaurantCtrl',
            controllerAs: 'restaurant'
        })
        .when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'CartCtrl',
            controllerAs: 'cart'
        })
        .when('/restaurants/:restaurantId/menu/:menuId', {
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl',
            controllerAs: 'menu'

        })
        .otherwise({
            redirectTo: '/'
        });
});

app.factory('DataService', function () {
    var cart = new ShoppingCart();

    return {cart: cart};
});