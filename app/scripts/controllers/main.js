'use strict';

/**
 * @ngdoc function
 * @name clicandpickangularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clicandpickangularjsApp
 */
angular.module('clicandpickangularjsApp')
    .controller('MainCtrl', ['$window', '$scope', function ($window, $scope) {
        $scope.search = function() {
            $window.location.href = '#/s/' + $scope.where + " - " + $scope.when;
        };
    }]
);
