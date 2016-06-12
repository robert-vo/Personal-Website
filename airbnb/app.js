var app = angular.module('tripPlannerApp', []);

app.controller('tripPlannerController', function($scope, $http) {
    $http.get('../resources/json/cities.json')
        .then(function(result){
            $scope.cities = result.data;
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
