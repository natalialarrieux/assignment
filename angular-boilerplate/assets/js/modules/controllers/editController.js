angular.module('Controllers').controller('EditController', ['$rootScope', '$routeParams', '$scope', 'SalesforceContactCRUD',
	function ($rootScope, $routeParams, $scope, SalesforceContactCRUD, Helper) {

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

		//SalesforceContactCRUD.readContact($scope.model.contactId, $rootScope.myUsername, $rootScope.myToken).then(
		SalesforceContactCRUD.readContact($routeParams.id, 'hola', 'hola').then(
			function(response){ //response tendría que devolver el objeto con todos los campos, menos Id, que ya lo tengo
				$scope.model.contactId = response.Id;
				$scope.model.firstName = response.FirstName;
				$scope.model.lastName = response.LastName;
				$scope.model.username = response.Username__c;
				$scope.model.password = response.Password__c;
				$scope.model.title = response.Title;
				$scope.model.phone = response.Phone;
				$scope.model.email = response.Email;
				console.log(response);
			},
			function(event){
				console.log(event);
			}
		);

		$scope.saveCall = function(){
			//SalesforceContactCRUD.editContact($scope.model.contactId, $rootScope.myUsername, $rootScope.myToken,
			SalesforceContactCRUD.editContact($scope.model.contactId, 'hola', 'hola', 
				$scope.model.title, $scope.model.phone, $scope.model.email).then(
					function(response){ //response es true si todo bien, y si no anduvo da false
						//PENDIENTE Mostrar un mensaje de éxito o mostrar el coso ya editado.
						console.log(response);
					},
					function(event){
						console.log(event);
					}
			);
		};
}]);