describe('PhoneListCtrl', function(){

    var scope, ctrl, $httpBackend;

    // Load our app module definition before each test.
    beforeEach(module('it-phonecat'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('assets/js/phones/phones.json').
            respond([{name: 'Motorola DEFY with MOTOBLUR'}, {name: 'Samsung GS3'}]);

        scope = $rootScope.$new();
        ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));

    it('Création de 3 phones en dur', inject(function($controller) {
        var scope = {},
            ctrl = $controller('PhoneListCtrl', {$scope:scope});

        expect(scope.phones.length).toBe(3);
    }));

    it('Création de 2 phones à partir d un JSon', function() {
        expect(scope.phones2).toBeUndefined();
        $httpBackend.flush();

        expect(scope.phones2).toEqual([{name: 'Motorola DEFY with MOTOBLUR'},
            {name: 'Samsung GS3'}]);
    });


});

