/**
 * Created by dge on 02/12/2015.
 */
'use strict';
angular
    .module('it-phonecat')
    .directive('tutoPhone',function(){

        return{
            restrict: 'EA',
            scope: {
                phone : '=phoneObject',
                toto : '&customClick'
            },
            controller : ['$scope', function($scope){

                $scope.monAction = function(e){
                    console.log("directive");
                    console.log(e);
                    $scope.toto(e);
                }

            }],
            templateUrl: 'app/features/phone/phoneTemplate.html'

        }



    });
