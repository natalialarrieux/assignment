angular.module('Controllers')
    .controller('HomeController', ['$http', '$scope', 'SalesforceContactCRUD',
     function ($http, $scope, SalesforceContactCRUD, Helper) {

		$scope.model = {
			contacts: [
			{
				firstName: 'yo',
				lastName: 'soy',
				company: 'unTallarin',
				password: 'spagetti',
				token: 'spa'
			},
			{
				firstName: 'el',
				lastName: 'es',
				company: 'otroTallarin',
				password: 'spagetti',
				token: 'spa'
			}]
		};

		//PENDIENTE Acá es cuando tiene que ir a buscar el token a la session
		SalesforceContactCRUD.listUsers(username, token).then(
			function(response){
				$scope.model.contacts = response;
				console.log(response);
			},
			function(event){
				console.log(event);
			}
		);
	
    }]);