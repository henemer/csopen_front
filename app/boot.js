System.register(['angular2/platform/browser', './app.component', 'angular2/http', 'angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_1, core_1, router_1;
    var MyExceptionHandler;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MyExceptionHandler = (function () {
                function MyExceptionHandler() {
                }
                MyExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
                    console.log(exception);
                    alert('Não foi possível processar a sua requisição, verifique a conexão com a internet e tente novamente');
                };
                return MyExceptionHandler;
            }());
            exports_1("MyExceptionHandler", MyExceptionHandler);
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                core_1.provide(core_1.ExceptionHandler, { useClass: MyExceptionHandler })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map