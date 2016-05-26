angular.module('Factories').factory('SalesforceContactCRUD', ['$q',
 function SalesforceContactCRUDFactory($q){

 	return {
 		createContact: function(username, password){
			var deferred = $q.defer();
			AssignmentContactCRUDControllerExtension.createContact(username, password, 
				function (result, event){
					if (event.status) {
						deferred.resolve(JSON.parse(result)); // DUDA: El valor de retorno en realidad es un Id, debo parsearlo a JSON igual o eso es sólo para sObjects
					} else {
						deferred.reject(event);
					}
				},
				{buffer: false, escape: false, timeout: 30000;}
			);
			return deferred.promise;
		},

		editContact: function(contactId, firstName, lastName, username, token){
			var deferred = $q.defer();
			AssignmentContactCRUDControllerExtension.editContact(contactId, firstName, lastName, username, token, 
				function (result, event){
					if (event.status) {
						deferred.resolve(JSON.parse(result)); 
					} else {
						deferred.reject(event);
					}
				},
				{buffer: false, escape: false, timeout: 30000;}
			);
			return deferred.promise;
		},

		listUsers: function(username, token){
			var deferred = $q.defer();
			AssignmentContactCRUDControllerExtension.listUsers(username, token, 
				function (result, event){
					if (event.status) {
						deferred.resolve(JSON.parse(result)); 
					} else {
						deferred.reject(event);
					}
				},
				{buffer: false, escape: false, timeout: 30000;}
			);
			return deferred.promise;
		}
 	};
	
}]);