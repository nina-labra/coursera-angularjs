(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope){
    $scope.food = "";
    $scope.foodList = [];

    $scope.listFood = function () {
        let foodArr = $scope.food.split(' ');

        $scope.foodList = foodArr;
    }

    $scope.sendMessage = function () {
        if($scope.foodList.length > 3){
            return "Too much food!"
        }else if($scope.foodList.length > 0){
            return "Enjoy!"
        }else{
            return "You should eat something!"
        }
    }

}

})();