(function() {

    ////////////////////////////////////////////////////////////
    // App
    ////////////////////////////////////////////////////////////


    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);

    App.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController'
        })



        .otherwise({redirectTo: '/'});

    }]);

})();
