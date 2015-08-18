/**
 * Created by Marc on 12/08/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name clicandpickangularjsApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the clicandpickangularjsApp
 */
var app = angular.module('clicandpickangularjsApp');

app.controller('AuthCtrl', ['$scope', '$auth', function ($scope, $auth) {
  $scope.login = function () {
    $auth.login({email: $scope.email, password: $scope.password});
  };

  $scope.authenticate = function (provider) {
    $auth.authenticate(provider);
  };

  $scope.signup = function () {
    $auth.signup({
      email: $scope.email,
      password: $scope.password
    });
  };
}]);
