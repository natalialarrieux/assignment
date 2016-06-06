angular.module('Controllers').controller('EditController', ['$rootScope', '$location', '$routeParams', '$scope', 'SalesforceContactCRUD',
	function ($rootScope, $location, $routeParams, $scope, SalesforceContactCRUD, Helper) {

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

		SalesforceContactCRUD.readContact($routeParams.id, $rootScope.myUsername, $rootScope.myToken).then(
			function(response){ //response tendría que devolver el objeto con todos los campos, incluido el Id, aunque ya lo tengo
				$scope.model.contactId = response.Id;
				$scope.model.firstName = response.FirstName;
				$scope.model.lastName = response.LastName;
				$scope.model.username = response.Username__c;
				$scope.model.password = response.Password__c;
				$scope.model.title = response.Title;
				$scope.model.phone = response.Phone;
				$scope.model.email = response.Email;
			},
			function(event){
				console.log(event);
			}
		);

		$scope.saveCall = function(){
			SalesforceContactCRUD.editContact($scope.model.contactId, $rootScope.myUsername, $rootScope.myToken,
				$scope.model.title, $scope.model.phone, $scope.model.email).then(
					function(response){
						if (response == true) {
							$location.path("home");
						}
					},
					function(event){
						console.log(event);
					}
			);
		};
}]);