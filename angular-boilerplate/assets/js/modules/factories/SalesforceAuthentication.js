angular.module('Factories').factory('SalesforceAuthentication', ['$q',
 function SalesforceAuthenticationFactory($q){

 	return {
		userLogin: function(myUsername, myPassword){
			var deferred = $q.defer();
			AssignmentMainController.userLogin(myUsername, myPassword, 
				function (result, event){
					if (event.status) {
						deferred.resolve(result);
					} else {
						deferred.reject(event);
					}
				},
				{buffer: false, escape: false, timeout: 30000}
			);
			return deferred.promise;
		}
 	};
 }]);