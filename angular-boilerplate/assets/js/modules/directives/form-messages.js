angular.module('Directives')

	// Utilities is being injected (dependency injection), for being used in this directive. It could be a service, factory, etc.
    .directive('formMessages', [function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'assets/templates/form-messages.html',
            scope: {
                messageGreen: "=",
                messageRed: "=",
                both: "=",
                display: "=",
                red: "="
            },
            link: function(scope, element, attrs) {

            }
        };
    }])
