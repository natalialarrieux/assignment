(function() {

    ////////////////////////////////////////////////////////////
    // App
    ////////////////////////////////////////////////////////////


    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);

    App.run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.myUsername = "";
        $rootScope.myToken = "";

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            //event.preventDefault();
            if ($rootScope.myToken == "") { 
                $location.path('login')
            }
        });
    }]);

    App.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'assets/templates/pages/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        });

        $routeProvider.when('/login', {
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

        $routeProvider.otherwise({redirectTo: '/'});

        // OTRA POSIBILIDAD: Usando Resolve
        // Lo bueno de resolve es que ya te carga la data en la otra view para que no haya espera
        
        /*$routeProvider.when('/home' ,{
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            resolve: {
                check: function(accessFac,$location){   
                    if (accessFac.checkPermission()){  // llama a una Factory, y dentro de ella al método checkPermission, que se fijaría si están los valores en $rootScope
                        $location.path('home');
                    } else {
                        $location.path('/');  //redirect user to login
                        alert("You don't have access here");
                    }
                }
            }
        });*/
    }]);

})();
