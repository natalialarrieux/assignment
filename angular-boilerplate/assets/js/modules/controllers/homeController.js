angular.module('Controllers')
    .controller('HomeController', ['$http', '$scope', 'SalesforceContactCRUD',
     function ($http, $scope, SalesforceContactCRUD, Helper) {

		//$scope.model = {}; // DUDA Por ahora no se si quiero aislar el scope

		//PENDIENTE Acá es cuando tiene que ir a buscar el token a la session
		SalesforceContactCRUD.listUsers(username, token).then(
			function(response){
				$scope.contacts = response;
				console.log(response);
			},
			function(event){
				console.log(event);
			}
		);
	
    }]);