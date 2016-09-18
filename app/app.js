/**
 * Created by cmakohon on 9/17/16.
 */

var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {

    $scope.zipcity = '';

    $scope.find = function() {
        $scope.result = $scope.zipcity;
    };
});