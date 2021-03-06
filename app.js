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

    // uses user input dates to filter
    app.filter('dateRangeFilter', function(){
        return function(values, dateFrom, dateTo){
            var fromString;
            var toString;
            var filteredData = [];

            // get strings from date object since car data dates are strings
            if (dateFrom){
                fromString = dateFrom.toISOString().split('T')[0];
                console.log(fromString);
            }
            if (dateTo){
                toString = dateTo.toISOString().split('T')[0];
                console.log(toString);
            }
            // only run filter if we have all 3 dates else return all data
            if (values && fromString && toString){
                for (var i=0; i<values.length; i++){
                    var dateSubString = values[i][8].substr(0, 10);
                    if (dateSubString >= fromString && dateSubString <= toString){
                        filteredData.push(values[i]);
                    }
                }
                return filteredData;
            } else {
                return values;
            }
        };
    });




})();
