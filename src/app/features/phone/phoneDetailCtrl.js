'use strict';


angular.module('it-phonecat.controllers')
    .controller('PhoneDetailCtrl', ['$scope', '$http', 'resolvedPhoneDetail',
        function ($scope,$http, resolvedPhoneDetail) {

            $scope.phoneDetail = resolvedPhoneDetail.data;

            $scope.mainImageUrl = $scope.phoneDetail.images[0];

            $scope.setImage = function(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }]);