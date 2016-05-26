angular.module('Controllers').controller('CreateController', ['$scope', 'SalesforceContactCRUD',
     function ($scope, SalesforceContactCRUD, Helper) {

		$scope.model = {};
		
		//PENDIENTE Acá es cuando tiene que ir a buscar el token a la session
		SalesforceContactCRUD.createContact(username, password).then(
			function(response){
				//PENDIENTE Mostrar un mensaje de éxito o mostrar el coso ya editado.
				console.log(response);
			},
			function(event){
				console.log(event);
			}
		);
	
    }]);