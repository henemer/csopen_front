System.register(['./supplier/supplier', './customer/customer'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (supplier_1_1) {
                exportStar_1(supplier_1_1);
            },
            function (customer_1_1) {
                exportStar_1(customer_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=model.js.map