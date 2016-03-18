System.register(['angular2/core', '../service', '../customer/customerList.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1, customerList_component_1;
    var CustomerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (customerList_component_1_1) {
                customerList_component_1 = customerList_component_1_1;
            }],
        execute: function() {
            CustomerComponent = (function () {
                function CustomerComponent(customerService) {
                    var _this = this;
                    customerService.getCustomers()
                        .subscribe(function (customers) { return _this.customers = customers; });
                }
                CustomerComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [service_1.CustomerService],
                        templateUrl: '/app/customer/customer.component.html',
                        directives: [customerList_component_1.CustomerListComponent]
                    }), 
                    __metadata('design:paramtypes', [service_1.CustomerService])
                ], CustomerComponent);
                return CustomerComponent;
            })();
            exports_1("CustomerComponent", CustomerComponent);
        }
    }
});
//# sourceMappingURL=customer.compoent.js.map