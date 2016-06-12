var App = angular.module('tripPlannerApp', []);

App.controller('tripPlannerController', function($scope, $http) {
    $http.get('../resources/json/cities.json')
        .then(function(result){
            $scope.cities = result.data;
        });
    
});