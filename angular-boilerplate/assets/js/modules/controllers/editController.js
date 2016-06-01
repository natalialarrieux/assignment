angular.module('Controllers').controller('EditController', ['$rootScope', '$scope', 'SalesforceContactCRUD',
     function ($rootScope, $scope, SalesforceContactCRUD, Helper) {

		$scope.model = {
			contactId: "", 
			firstName: "", 
			lastName: "", 
			username: "", 
			password: "", 
			title: "", 
			phone: "", 
			email: ""
		};
		
		$scope.saveCall = function(){
			SalesforceContactCRUD.editContact(model.contactId, $rootScope.myUsername, $rootScope.myToken, 
				model.title, model.phone, model.email).then(
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