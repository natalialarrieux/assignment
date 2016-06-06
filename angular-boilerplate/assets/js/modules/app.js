(function() {

    ////////////////////////////////////////////////////////////
    // App
    ////////////////////////////////////////////////////////////


    var App = angular.module('AngularBoilerplate', ['ngRoute', 'ui.bootstrap', 'Controllers', 'Directives', 'Factories', 'Filters', 'Services']);

    App.run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.myUsername = "";
        $rootScope.myToken = "";

/*      Esto funcionaba bien, porque bloqueaba el ingreso a /home pero también bloqueaba el ingreso a /create,
        que no quiero bloquear, entonces dejé de usarlo:*/

        // $routeChangeStart te permite acceder a la ruta que digitó el usuario, entonces podría decirle que 
        // haga lo siguiente en caso de que la ruta elegida no fuera /create, a la que quiero poder dejarlo pasar
        $rootScope.$on("$routeChangeStart", function (event, next, current) { 
            //event.preventDefault(); // DUDA Esto lo había comentado porque no lo investigué en profundidad
            if (next.templateUrl != 'assets/templates/pages/createContact.html' && $rootScope.myToken == "") { 
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

/////////// OTRA POSIBILIDAD: Usando Resolve
        // Lo bueno de resolve es que ya te carga la data en la otra view para que no haya espera
        // Lo malo es que no debería cargarte la data si no estás loggeado, así que por eso no lo voy a usar
        
/*        $routeProvider.when('/home' ,{
            templateUrl: 'assets/templates/pages/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            resolve: {
                check: function(AccessFactory, $location){   
                    if (AccessFactory.checkPermission()){  // llama a una Factory, y dentro de ella al método checkPermission, que se fijaría si están los valores en $rootScope
                        $location.path('home');
                    } else {
                        $location.path('/');  //redirect user to login
                        alert("You don't have access here"); // DUDA pero me trae la data igual?
                    }
                }
            }
        });*/

        $routeProvider.when('/edit/:id', {
            templateUrl: 'assets/templates/pages/editContact.html',
            controller: 'EditController',
            controllerAs: 'editCtrl'
        });

/*        $routeProvider.when('/edit/:id',{
            templateUrl: 'assets/templates/pages/editContact.html',
            controller: 'EditController',
            controllerAs: 'editCtrl',
            resolve: {
                check: function(AccessFactory, $location, $routeParams){   
                    if (AccessFactory.checkPermission()){ 
                        $location.path('edit/' + $routeParams.Id); //esto no funciona como quiero, da: /edit/undefined
                    } else {
                        $location.path('/'); 
                        alert("You don't have access here");
                    }
                }
            }
        });*/

        $routeProvider.when('/create', {
            templateUrl: 'assets/templates/pages/createContact.html',
            controller: 'CreateController',
            controllerAs: 'createCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    }]);

})();
