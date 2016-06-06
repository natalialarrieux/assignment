angular.module('Controllers')
    .controller('HomeController', ['$http', '$rootScope', '$scope', 'SalesforceContactCRUD',
     function ($http, $rootScope, $scope, SalesforceContactCRUD, Helper) {

		$scope.model = {
			contacts: []
		};

		SalesforceContactCRUD.listUsers($rootScope.myUsername, $rootScope.myToken).then(
			function(response){
				$scope.model.contacts = response;
				console.log(response);
			},
			function(event){
				console.log(event);
			}
		);
	
    }]);