angular.module('Controllers').controller('CreateController', ['$scope', 'SalesforceContactCRUD',
     function ($scope, SalesforceContactCRUD, Helper) {

		$scope.model = {
			firstName: "", 
			lastName: "", 
			username: "", 
			password: "", 
			title: "", 
			phone: "", 
			email: ""
		};
		
		$scope.createCall = function(){  /*DUDA de Buenas Prácticas: es mejor pasar todos estos strings 
			o es mejor pasar un objeto y que sea parseado a JSON*/
			console.log("Entre en createCall");
			SalesforceContactCRUD.createContact($scope.model.firstName, $scope.model.lastName, 
				$scope.model.username, $scope.model.password, $scope.model.title, $scope.model.phone, $scope.model.email).then(
				function(response){
					//PENDIENTE Mostrar un mensaje de éxito o mostrar el coso ya editado.
					if (response != null){ // Caso positivo: devuelve un Id, entonces 
						//que me muestre el mensaje de Success y me diga que me logee

					} else { // Caso negativo, el Contacto no ha podido ser dado de alta
						//que me muestre el mensaje de alerta y me diga qué está mal
					}
				},
				function(event){
					console.log(event);
				}
			);
		};

    }]);


