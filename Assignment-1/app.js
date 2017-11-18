(function(){
'use strict';
angular.module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.Mess = function () {
            if(!$scope.dishes)
                $scope.mess="Please enter data first";
            else {
                $scope.mess = "";
                var foodItems = $scope.dishes.split(",");
                foodItems = foodItems.filter(function (item) {
                    return item.trim().length > 0;
                });
                if(foodItems.length==0)
                    $scope.mess="Please enter correct data";
                else if (foodItems.length <= 3)
                    $scope.mess = "Enjoy!";
                else
                    $scope.mess = "Too much!";
            }
        }
    };
})();