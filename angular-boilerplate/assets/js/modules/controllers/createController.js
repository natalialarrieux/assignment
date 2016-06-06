angular.module('Controllers').controller('CreateController', ['$scope', '$location', 'SalesforceContactCRUD',
     function ($scope, $location, SalesforceContactCRUD) {

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
			SalesforceContactCRUD.createContact($scope.model.firstName, $scope.model.lastName, 
				$scope.model.username, $scope.model.password, $scope.model.title, $scope.model.phone, $scope.model.email).then(
				function(response){
					if (response != null) {
						$location.path("login");
					}
				},
				function(event){
					console.log(event);
				}
			);
		};

    }]);


