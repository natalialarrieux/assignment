angular.module('Controllers')
    .controller('LoginController', ['$scope', 'SalesforceAuthentication',
     function ($scope, SalesforceAuthentication, Helper) {

		$scope.model = {};
		
		//PENDIENTE Acá es cuando tiene que ir a buscar el token a la session
		SalesforceAuthentication.userLogin(username, password).then(
			function(response){
				//PENDIENTE Lo que sucede cuando se loggea
				console.log(response);
			},
			function(event){
				console.log(event);
			}
		);
	
    }]);