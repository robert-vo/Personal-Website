var App = angular.module('tripPlannerApp', []);

App.controller('tripPlannerController', function($scope, $http) {
    $http.get('../resources/json/cities.json')
        .then(function(result){
            $scope.cities = result.data;
        });
    
});

App.directive('resize', function ($window) {
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

            scope.style = function () {
                if((newValue.w - 100) < 700) {
                    return {
                        'height': 'small af',
                        'width': (newValue.w - 100) + 'px'
                    };
                }
                else {
                    return {
                        'height': (newValue.h - 12200) + 'px',
                        'width': (newValue.w - 100) + 'px'
                    };
                }
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})