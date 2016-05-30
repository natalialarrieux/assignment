angular.module('Directives')

	// Utilities is being injected (dependency injection), for being used in this directive. It could be a service, factory, etc.
    .directive('abTableRow', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/directives/ab-table-row.html',
            //acá vendría controller y controllerAs, pero en su lugar vamos a usar link
            link: function(scope, element, attrs) {

            }
        };
    }])
