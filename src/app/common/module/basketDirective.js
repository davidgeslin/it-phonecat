'use strict';
angular.module('it-basketmodule',[]);

angular.module('it-basketmodule').directive('itBasketElementCounter', [function () {
    return {
        restrict: 'E',
        scope: {
            phone: '=phoneObject',
            removePhone: '&'
        },
        controller: ["$scope", function ($scope) {
            $scope.phone.count = 1;
            $scope.increaseCount = function () {
                $scope.phone.count++;
            }
            $scope.decreaseCount = function () {
                $scope.phone.count--;
                if ($scope.phone.count <= 0) {
                    $scope.removePhone({'phoneToRemove':$scope.phone});
                }
            }
        }],
        template: '<div class="row">    <div class="col-xs-12" style="text-align:center">        <button type="button" class="btn btn-danger" ng-click="decreaseCount()">-</button>        {{phone.count}}        <button type="button" class="btn btn-success" ng-click="increaseCount()">+</button>    </div></div>'
    }
}])
