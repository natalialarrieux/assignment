angular.module('Factories').factory('SalesforceContactCRUD', ['$q', 'SalesforceAuthentication', '$rootScope',
 function SalesforceContactCRUDFactory($q, SalesforceAuthentication, $rootScope){

 	return {

 		createContact: function(firstName, lastName, username, password, title, phone, email){
			var deferred = $q.defer();
			AssignmentContactCRUDControllerExtension.createContact(firstName, lastName, 
		username, password, title, phone, email, 
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
		},

		editContact: function(contactId, myUsername, myToken, title, phone, email){
			var deferred = $q.defer();
			AssignmentContactCRUDControllerExtension.editContact(contactId, myUsername, myToken, title, phone, email, 
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
		},

		listUsers: function(myUsername, myToken){
			var deferred = $q.defer();
			AssignmentContactCRUDControllerExtension.listUsers(myUsername, myToken, 
				function (result, event){
					if (event.status) {
						deferred.resolve(JSON.parse(result)); 
					} else {
						deferred.reject(event);
					}
				},
				{buffer: false, escape: false, timeout: 30000}
			);
			return deferred.promise;
		},

		textoPrueba: function(myUsername, myToken){
			var deferred = $q.defer();
			AssignmentContactCRUDControllerExtension.elTexto(myUsername, myToken, 
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

