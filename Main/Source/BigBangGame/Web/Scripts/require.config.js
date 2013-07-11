(function (define) {
    define([], function () {
        return {
            baseUrl: 'Scripts',
            paths: {
                jquery: 'jquery-2.0.2',
                jqueryui: 'jquery-ui-1.10.3',
                ko: 'knockout-2.2.0',
                komapping: 'knockout.mapping-latest',
                sammy: 'sammy-0.7.4',
                jqueryvalidate: 'jquery.validate',
                jqueryunobtrusive: 'jquery.validate.unobtrusive',
                jqueryunobtrusivereparse: 'jquery.validate.unobtrusive.reparse',
                viewModel: 'viewModel',
                economy: '../../economy/scripts'
            },
            shim: {
                'underscore': {
                    exports: '_'
                },
                'amplify': {
                    deps: ['jquery'],
                    exports: 'amplify'
                },
                'sammy': {
                    deps: ['jquery'],
                    exports: 'Sammy'
                },
                'jqueryui': {
                    deps: ['jquery'],
                    exports: 'jQuery'
                },
                'jqueryvalidate': {
                    deps: ['jquery'],
                    exports: 'jQuery'
                },
                'jqueryunobtrusive': {
                    deps: ['jquery', 'jqueryvalidate'],
                    exports: 'jQuery'
                },
                'toastr': {
                    deps: ['jquery'],
                    exports: 'toastr'
                }
            },
            map: {
                '*': {
                    'knockout': 'ko'
                },
            }
        };
    });
})(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    window['require'] = factory();
});