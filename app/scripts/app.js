'use strict';

/**
 * @ngdoc overview
 * @name clicandpickangularjsApp
 * @description
 * # clicandpickangularjsApp
 *
 * Main module of the application.
 */

var api = "http://localhost:8080";

var app = angular
  .module('clicandpickangularjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap',
    'satellizer'
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
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    }).
    when('/logout', {
      resolve: {
        logout: ['LogoutService', function (logoutService) {
          logoutService();
        }]
      }
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.config(function ($authProvider) {
  $authProvider.loginUrl = api + '/auth/login';
  $authProvider.signupUrl = api + '/auth/signup';
});

app.factory('DataService', function () {
  var cart = new ShoppingCart();

  return {cart: cart};
});

app.factory('LogoutService', ['$auth', '$location', function ($auth, $location) {
    return function () {
      console.log("Logout");
      if ($auth.isAuthenticated())
        $auth.logout();
      $location.path('/');
    }
  }]
);
