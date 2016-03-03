System.register(['angular2/core', './service', './supplier/supplierList.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1, supplierList_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (supplierList_component_1_1) {
                supplierList_component_1 = supplierList_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(supplierService) {
                    var _this = this;
                    supplierService.getSuppliers()
                        .subscribe(function (suppliers) { return _this.suppliers = suppliers; });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [service_1.SupplierService],
                        templateUrl: '/app/app.component.html',
                        directives: [supplierList_component_1.SupplierListComponent]
                    }), 
                    __metadata('design:paramtypes', [service_1.SupplierService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map