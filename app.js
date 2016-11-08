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


    // filter returns function that accepts params of
    // 1. all data (array of arrays), 2. start date, 3. end date
    // returns array of arrays whose date value passes conditionals
    app.filter('dateRangeFilter', function(){
        return function(values, dateFrom, dateTo){

            // wait 200ms for controller to get data then execute filter code
            // window.setTimeout(filterValues(values, dateFrom, dateTo), 200);

            // see if date field on each item is >= from and <= to
            // then push onto array if passes and return array at end
            console.log('hello from dateRangeFilter');
            console.log(values);
            console.log(dateFrom);
            console.log( typeof dateFrom );

            console.log(dateTo);
            var sampleDateString = values[0][8].substr(0, 10);
            console.log(sampleDateString);
            // console.log(items);
            // console.log(dateInput);
            // return values;
            var filteredData = [];
            var fromString = dateFrom.toISOString().split('T')[0];
            var toString = dateTo.toISOString().split('T')[0];
            console.log(fromString);
            for (var i=0; i<values.length; i++){
                var dateSubString = values[i][8].substr(0, 10);
                if (dateSubString >= fromString && dateSubString <= toString){
                    filteredData.push(values[i]);
                }
            }
            return filteredData;

        };
    });




})();
