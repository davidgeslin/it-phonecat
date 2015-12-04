angular.module('it-phonecat.controllers')
    .provider('Phone', [function () {

        this.config;
        this.$get = ['$http', function ($http) {
            var _self = this;
            return {
                get: function () {
                    return $http.get(_self.config.baseUrl+'/phones.json');
                }
            }
        }]
    }
    ])



angular.module('it-phonecat.controllers')
    .config(['PhoneProvider',function(PhoneProvider){
    // ici l'utilisateur de votre lib a acc�s au provider avant la cr�ation de
    // l'objet, et � donc le loisir de changer les valeurs par d�faut
        PhoneProvider.config = {
            "baseUrl": "assets/js/phones"
        };
}]);

