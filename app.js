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
            $http.get('relocated.json').success(function(dataObject){
                // just the meta data, description etc.
                $scope.meta = dataObject.meta;
                console.log($scope.meta);

                // just array of car moves
                $scope.cars = dataObject.data;
                console.log($scope.cars);
                // just color of first moved car
                console.log($scope.cars[0][10]);




            });

        }]); // end CarController

    //

})(); // end IIFE
