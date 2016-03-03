System.register([], function(exports_1) {
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                }
                Config.BASE_URL = "http://127.0.0.1:8000/api/";
                return Config;
            })();
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.service.js.map