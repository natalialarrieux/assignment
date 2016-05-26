angular.module('Services').service('HelperService', ['$q', function ($q) {

    this.helperMethod = function (param1, param2) {
		// Return whatever. Each service is a singleton, so this could be used to define methods to perform 
		// AJAX request to the server and return a promise.
	
        var something = "test";
        return something;
    }

}]);
