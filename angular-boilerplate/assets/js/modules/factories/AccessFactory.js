angular.module('Factories').factory('AccessFactory', ['$q', '$rootScope',
 function AccessFactory($q, $rootScope){

 	return {
		checkPermission: function(){
			var ret = true;
			if ($rootScope.myToken == "" || $rootScope.myUsername == ""){
				ret = false;
			}
			return ret;
		}
 	};
 }]);