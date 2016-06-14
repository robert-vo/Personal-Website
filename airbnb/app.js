var app = angular.module('tripPlannerApp', []);

app.controller('tripPlannerController', function($scope, $http) {
    $http.get('../resources/json/cities.json')
        .then(function(result){
            $scope.cities = result.data;
        });
    
});

app.controller('newOrleansController', function($scope, $http) {
    $http.get('../resources/json/neworleans.json')
        .then(function(result){
            $scope.neworleans = result.data;
        });
});

app.controller('atlantaController', function($scope, $http) {
    $http.get('../resources/json/atlanta.json')
        .then(function(result){
            $scope.atlanta = result.data;
        });
});

app.controller('charlotteController', function($scope, $http) {
    $http.get('../resources/json/charlotte.json')
        .then(function(result){
            $scope.charlotte = result.data;
        });
});

app.controller('washingtonDcController', function($scope, $http) {
    $http.get('../resources/json/dc.json')
        .then(function(result){
            $scope.dc = result.data;
        });
});

app.controller('philadelphiaController', function($scope, $http) {
    $http.get('../resources/json/philly.json')
        .then(function(result){
            $scope.philly = result.data;
        });
});

app.controller('newYorkCityController', function($scope, $http) {
    $http.get('../resources/json/nyc.json')
        .then(function(result){
            $scope.nyc = result.data;
        });
});

app.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});

app.directive('scrollUpButton', function() {
    return {
        restrict: 'AE',
        templateUrl: 'scrollUpButton.html'
    }
});
