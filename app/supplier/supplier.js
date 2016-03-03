System.register([], function(exports_1) {
    var Supplier;
    return {
        setters:[],
        execute: function() {
            Supplier = (function () {
                function Supplier(id, code, company, trade, cnpj, observations) {
                    this.id = id;
                    this.code = code;
                    this.company = company;
                    this.trade = trade;
                    this.cnpj = cnpj;
                    this.observations = observations;
                }
                return Supplier;
            })();
            exports_1("Supplier", Supplier);
        }
    }
});
//# sourceMappingURL=supplier.js.map