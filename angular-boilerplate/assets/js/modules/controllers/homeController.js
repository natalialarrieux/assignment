angular.module('Controllers')
    .controller('HomeController', ['$http', '$rootScope', '$scope', 'SalesforceContactCRUD',
     function ($http, $rootScope, $scope, SalesforceContactCRUD, Helper) {

		$scope.model = {
			contacts: []
		};

	//	SalesforceContactCRUD.listUsers($rootScope.myUsername, $rootScope.myToken).then(
		SalesforceContactCRUD.listUsers("hola", "hola").then( // PENDIENTE cambiar por lo que está arriba cuando ande el login
			function(response){
				$scope.model.contacts = response;
			},
			function(event){
				console.log(event);
			}
		);
	
    }]);