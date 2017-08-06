var app = angular.module('travelsApp', []);


app.controller('travelsController', function($scope, $http) {
    $http.get('resources/json/travels2017.json')
        .then(function(result){
            $scope.travels = result.data;
        });
});

app.controller('apartmentController', function($scope, $http) {
    $http.get('resources/json/apartment.json')
        .then(function(result){
            $scope.apartment = result.data;
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
