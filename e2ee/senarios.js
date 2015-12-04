describe('PhoneCat App', function() {

    describe('Phone List View', function () {


        beforeEach(function(){
            browser.get('http://angular.github.io/angular-phonecat/step-6/app/index.html');
        });

        it('Test Phone img', function() {
            var query = element(by.model('query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function(url) {
                expect(url).toBe('/phones/nexus-s');
            });
        });
    });
});