System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', '../service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, service_1;
    var SupplierService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            SupplierService = (function () {
                function SupplierService(http) {
                    this.http = http;
                }
                SupplierService.prototype.getSuppliers = function () {
                    return this.http.get(service_1.Config.BASE_URL + 'fornecedores/')
                        .map(function (res) { return res.json(); });
                };
                SupplierService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SupplierService);
                return SupplierService;
            })();
            exports_1("SupplierService", SupplierService);
        }
    }
});
//# sourceMappingURL=supplier.service.js.map