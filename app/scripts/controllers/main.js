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
        $scope.search = function () {
            $window.location.href = '#/s/' + $scope.where.replace(/ /g, '~') + "?time=" + $scope.when;
        };

        $scope.geolocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    geocoder.geocode({'location': latlng}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                $scope.$apply(function () {
                                    console.log(results[0].formatted_address);
                                    $scope.where = results[0].formatted_address;
                                });
                            }
                        }
                    });
                });
            }
        };
    }]
);
