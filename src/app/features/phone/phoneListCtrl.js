'use strict';


angular.module('it-phonecat.controllers')
    .controller('PhoneListCtrl', ['$scope', '$http', 'resolvedPhones', 'Phone',
        function ($scope, $http, resolvedPhones, Phone) {

            Phone.get().then(function (data) {
                $scope.phones2 = data.data;
            },
            function(data){
                console.log(data);
            });

            // $scope.phones2 = resolvedPhones.data;


            console.log($scope.phones2);
            $scope.form = {};

            $scope.panier = [];

            $scope.count = 0;

            $scope.addOne = function () {
                $scope.count++;
            };

            $scope.focusinControl = function (selectedPhone) {

                var testPresent = false;
                angular.forEach($scope.panier, function (item) {

                    if (selectedPhone.id == item.id) {
                        testPresent = true;
                        selectedPhone.count++;
                    }
                });

                if (!testPresent) {
                    $scope.panier.push(selectedPhone);
                    selectedPhone.count = 1;
                }

            };

            $scope.deletePhone = function (selectedPhone) {

                selectedPhone.count--;
                if (selectedPhone.count <= 0) {
                    var index = $scope.panier.indexOf(selectedPhone);
                    $scope.panier.splice(index, 1);
                }


            };

            $scope.deletePhones = function () {

                $scope.panier = [];
            };

            $scope.removeSelected = function (phoneToRemove) {
                var index = $scope.panier.indexOf(phoneToRemove);
                $scope.panier.splice(index, 1);
            }

            $scope.phones = [
                {
                    'name': 'Nexus S',
                    'snippet': 'Fast just got faster with Nexus S.'
                },
                {
                    'name': 'Motorola XOOM with Wi-Fi',
                    'snippet': 'The Next, Next Generation tablet.'
                },
                {
                    'name': 'MOTOROLA XOOM',
                    'snippet': 'The Next, Next Generation tablet.'
                }
            ];


        }]);