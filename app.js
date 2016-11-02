// app CarFinder
// CarController

// immediately invoked functiono IIFE
(function(){

    // module CarFinder
    var app = angular.module('carFinder', []);

    // CarController
    app.controller('CarController', ['$http', '$scope',
        function($http, $scope){
            // get data and put on a scope var avail to html
            $http.get('relocated.json').success(function(data){
                $scope.cars = data;
                console.log(data);
            });

        }]); // end CarController

    //

})(); // end IIFE
