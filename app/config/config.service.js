System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                }
                Config.BASE_URL = "http://127.0.0.1:8000/api";
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.service.js.map