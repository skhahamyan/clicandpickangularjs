/**
 * Created by Marc on 30/07/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name clicandpickangularjsApp.controller:RestaurantsCtrl
 * @description
 * # RestaurantsCtrl
 * Controller of the clicandpickangularjsApp
 */
var app = angular.module('clicandpickangularjsApp');

app.controller('RestaurantsCtrl', ['$scope', function ($scope) {
        $scope.types = ['burger', 'pizza', 'tapas', 'none'];
        $scope.selectedTypes = [];
        $scope.restaurants = [
            {id: 1, name: 'Macdo', type: 'burger', img: 'http://38.media.tumblr.com/avatar_cf8da1444f9c_128.png'},
            {id: 2, name: 'Quick', type: 'pizza', img: 'http://a398.idata.over-blog.com/3/98/47/25/logo_quick.png'},
            {
                id: 3,
                name: 'In-N-Out Burger',
                type: 'tapas',
                img: 'https://38.media.tumblr.com/avatar_5a6fa0e3435b_128.png'
            }
        ];

        $scope.addType = function (type) {
            var i = $.inArray(type, $scope.selectedTypes);
            if (i > -1) {
                $scope.selectedTypes.splice(i, 1);
            } else {
                $scope.selectedTypes.push(type);
            }
        }

        $scope.selectedTypesFilter = function (restaurant){
            if ($scope.selectedTypes.length > 0) {
                if ($.inArray(restaurant.type, $scope.selectedTypes) < 0)
                    return;
            }
            return restaurant;

        }
    }]
);
