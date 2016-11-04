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
                // test: just color of first moved car
                console.log($scope.cars[0][10]);
            });
        }]); // end CarController

    // return a filter function which returns value passed to it without decimals
    app.filter('removeDecimal', function() {
        return function(value){
            return parseInt(value, 10);
        };
    });

})();
