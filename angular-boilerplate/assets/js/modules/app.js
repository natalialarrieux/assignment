(function() {

    ////////////////////////////////////////////////////////////
    // App
    ////////////////////////////////////////////////////////////


    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);

    App.config(['$routeProvider', function ($routeProvider) {

        var username = 'hola';
        var password = 'hola';
        var token = 'hola';


        $routeProvider.when('/', {
            templateUrl: 'assets/templates/pages/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })

        $routeProvider.when('/login', {
            templateUrl: 'assets/templates/pages/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })

        $routeProvider.when('/home', {
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })

        $routeProvider.when('/edit', {
            templateUrl: 'assets/templates/pages/editContact.html',
            controller: 'EditController',
            controllerAs: 'editCtrl'
        })

        $routeProvider.when('/create', {
            templateUrl: 'assets/templates/pages/createContact.html',
            controller: 'CreateController',
            controllerAs: 'createCtrl'
        })

        .otherwise({redirectTo: '/'});

    }]);

})();
