angular.module('Factories').factory('SomeFactory', ['$q', '$rootScope', 'HelperService', '$filter', function($q, $rootScope, HelperService, $filter) {

    var deferred = $q.defer();

	// This Factory returns a factory which resolves in an instance of the SomeFactory function.
    var SomeFactory = function (recordId) {

        save = function () {
			
            // If there's no Id set yet, save the record. Otherwise update it.
            if (this.fields.Id === undefined) {
				
                return HelperService.insertRecord (this.fields);
				
            } else { 
			
                return HelperService.updateRecord (this.fields);
				
            }

        }

        if (recordId == null) {

            var fields = {
                            name: '',
                            email: ''
                         }

            deferred.resolve({
                fields: fields,
                save: save
            });

        } else {

            // Load record based on constructor parameter
            var loadRecordDetails = HelperService.getRecordDetails(recordId);

            loadRecordDetails.then(function(response) {

                deferred.resolve({
                    fields: response.fields,
                    save: save
                });
                
            });

        }

        return deferred.promise;
    };

    return SomeFactory;

}]);
