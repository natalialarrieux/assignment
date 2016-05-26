
describe('Controllers', function() {

    beforeEach(module('AngularBoilerplate'));

    ////////////////////////////////////////////////////////////
    // Home Controller
    ////////////////////////////////////////////////////////////

    describe('HomeController', function() {

        var scope, controller;

        beforeEach(inject(function($rootScope, $compile, $controller) {
            
            if (scope === undefined) {

                scope       = $rootScope.$new();
                controller  = $controller('HomeController', { $scope: scope });

            }

        }));

        it('has a model', function() {

            expect(scope).not.toBeNull();

        });

    });

});