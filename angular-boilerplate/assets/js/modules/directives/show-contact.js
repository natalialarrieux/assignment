angular.module('Directives')

	// Utilities is being injected (dependency injection), for being used in this directive. It could be a service, factory, etc.
    .directive('showContact', [function() {

        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/show-contact.html',
            // scope: {
            //     name: "=",
            //     company: "=",
            //     phone: "=",
            //     username: "=",
            //     id: "="
            // }
            scope: {
                contact: "="
            },
            link: function(scope, element, attrs) {
                
            }
        };
    }])
