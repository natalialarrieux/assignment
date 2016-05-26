angular.module('Controllers').controller('EditController', ['$scope', 'SalesforceContactCRUD',
     function ($scope, SalesforceContactCRUD, Helper) {

		$scope.model = {};
		
		//PENDIENTE Acá es cuando tiene que ir a buscar el token a la session
		SalesforceContactCRUD.editContact(contactId, firstName, lastName, username, token).then(
			function(response){
				//PENDIENTE Mostrar un mensaje de éxito o mostrar el coso ya editado.
				console.log(response);
			},
			function(event){
				console.log(event);
			}
		);
	
    }]);