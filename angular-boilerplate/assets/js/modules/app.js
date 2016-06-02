(function() {

    ////////////////////////////////////////////////////////////
    // App
    ////////////////////////////////////////////////////////////


    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);

    App.run(['$rootScope', function($rootScope) {
        $rootScope.myUsername = "";
        $rootScope.myToken = "";
    }]);

    App.config(['$routeProvider', function ($routeProvider) {
        //if ($rootScope.myUsername == "" ) //PENDIENTE Inhabilitar views que no tenga que ver un usuario no loggeado
        $routeProvider.when('/', {
            templateUrl: 'assets/templates/pages/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        });

        $routeProvider.when('/home', {
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });

        $routeProvider.when('/edit/:id', {
            templateUrl: 'assets/templates/pages/editContact.html',
            controller: 'EditController',
            controllerAs: 'editCtrl'
        });

        $routeProvider.when('/create', {
            templateUrl: 'assets/templates/pages/createContact.html',
            controller: 'CreateController',
            controllerAs: 'createCtrl'
        });

         // $routeProvider.otherwise({redirectTo: '/'});

    }]);

})();
