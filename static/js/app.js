/**
 * Created by cmakohon on 9/17/16.
 */

/* weather api key: 8a0a3e42b0668a07c7c695c10e0df6aa */

var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope, $http) {

    $scope.zipcity = '';
    $scope.currTemp = '';
    $scope.sentence = '';

    $scope.find = function() {
        $scope.result = $scope.zipcity;

        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.zipcity + ',us&appid=8a0a3e42b0668a07c7c695c10e0df6aa').
            then(function(response) {
                $scope.result = angular.fromJson(response);
                $scope.currTemp = parseInt($scope.result.data.main.temp);
                $scope.currTemp = (1.8 * ($scope.currTemp - 273)) + 32;
                $scope.sentence = 'Current temperature for ' + $scope.zipcity + ' is ' + $scope.currTemp + ' degrees fahrenheit.';
            });
    };
});