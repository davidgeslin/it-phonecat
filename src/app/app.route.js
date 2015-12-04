angular.module('it-phonecat')
    .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'app/features/phone/phone-list.html',
                controller: 'PhoneListCtrl',
                resolve: {
                    resolvedPhones: ['$http', function($http){
                        return  $http.get('assets/js/phones/phones.json');
                    }]
                }

            }).
            when('/phones/:phoneId', {
                templateUrl: 'app/features/phone/phone-detail.html',
                controller: 'PhoneDetailCtrl',
                resolve: {
                    resolvedPhoneDetail: ['$http', '$route', function($http, $route){
                        return  $http.get('assets/js/phones/phone/phone-' + $route.current.params.phoneId + '.json');
                    }]
                }
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
