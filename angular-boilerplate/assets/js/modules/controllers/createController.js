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
		
		$scope.createCall = function(){
			SalesforceContactCRUD.createContact(model.firstName, model.lastName, 
				model.username, model.password, model.title, model.phone, model.email).then(
				function(response){
					//PENDIENTE Mostrar un mensaje de éxito o mostrar el coso ya editado.
					console.log(response);
				},
				function(event){
					console.log(event);
				}
			);
		};

    }]);


