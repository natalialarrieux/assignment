angular.module('Controllers')
.controller('LoginController', ['$scope', 'SalesforceAuthentication', '$rootScope',
	function ($scope, SalesforceAuthentication, $rootScope) {

		$scope.model = {
			/*Los defino como temporales y en el scope de la LoginController. 
			Cuando se confirme que son valores válidos, los pasaré al $rootscope*/
			tempUser: "",
			tempPass: ""
		};
		$scope.loginCall= function(){
			SalesforceAuthentication.userLogin(model.tempUser, model.tempPass).then(
				function(response){ //si no se cae la llamada 
					if (response != null) { //Caso positivo: se loggeó correctamente
						$rootScope.username = model.tempUser; //Primero: paso los valores a rootscope
						$rootScope.token = response;
						model.tempUser = ""; //Segundo: limpio las variables temporales
						model.tempPass = "";
						//Tercero: ir a la view correspondiente a home.html
					} else { //Caso negativo: usuario o password incorrecto
						// Reutilization.setErrorMessage("The username or password are incorrect"); PENDIENTE esto lo voy a hacer con una directiva
					}
					console.log(response);
				},
				function(event){
					console.log(event);
				}
			);
		};
	}]);