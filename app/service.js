System.register(['./supplier/supplier.service'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (supplier_service_1_1) {
                exportStar_1(supplier_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=service.js.map