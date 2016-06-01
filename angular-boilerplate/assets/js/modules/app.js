(function() {

    ////////////////////////////////////////////////////////////
    // App
    ////////////////////////////////////////////////////////////


    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);

    App.run(['$rootScope', function($rootScope) {
        $rootScope.myUsername = "";
        $rootScope.myPassword = ""; //DUDA: esto capaz que ni lo llego a subir al rootScope
        $rootScope.myToken = "";
    }]);

    App.config(['$routeProvider', function ($routeProvider) {
        //if ($rootScope.myUsername == "" ) //PENDIENTE Inhabilitar views que no tenga que ver un usuario no loggeado
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
