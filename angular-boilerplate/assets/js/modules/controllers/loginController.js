angular.module('Controllers')
.controller('LoginController', ['$scope', '$location', 'SalesforceAuthentication', '$rootScope',
	function ($scope, $location, SalesforceAuthentication, $rootScope) {

		$scope.model = {
			/*Los defino como temporales y en el scope de la LoginController. 
			Cuando se confirme que son valores válidos, los paso al $rootscope*/
			tempUser: "",
			tempPass: "",
		};

		$rootScope.myUsername = "";
		$rootScope.myToken = ""; // esto provoca que si yo ya me autentiqué y modifico la ruta a mano, me tengo que volver a loggear
		
		$scope.loginCall= function(){
			SalesforceAuthentication.userLogin($scope.model.tempUser, $scope.model.tempPass).then(
				function(response){ //si no se cae la llamada 
					if (response != null) { //Caso positivo: se loggeó correctamente
						$rootScope.myUsername = $scope.model.tempUser; //Primero: paso los valores a rootscope
						$rootScope.myToken = response;
						$scope.model.tempUser = ""; //Segundo: limpio las variables temporales
						$scope.model.tempPass = "";
						$location.path("home");//Tercero: ir a la view correspondiente a home.html
					}
				},
				function(event){
					console.log(event);
				}
			);
		};
	}]);