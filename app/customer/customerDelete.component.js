System.register(['angular2/core', '../model', '../service', '../customer/customerData.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, model_1, service_1, customerData_component_1;
    var CustomerDeleteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (customerData_component_1_1) {
                customerData_component_1 = customerData_component_1_1;
            }],
        execute: function() {
            CustomerDeleteComponent = (function () {
                function CustomerDeleteComponent(customerService) {
                    this.customerService = customerService;
                    this.customer = new model_1.Customer();
                    this.closeDelete = new core_1.EventEmitter();
                    this.deleteCustomer = new core_1.EventEmitter();
                }
                CustomerDeleteComponent.prototype.clickDeleteCustomer = function (id) {
                    var _this = this;
                    this.customerService.delete(id).subscribe(function (result) { return _this.closeDeleteCustomer(_this.closeDelete); }, function (error) { return console.log(error); });
                };
                CustomerDeleteComponent.prototype.closeDeleteCustomer = function (Event) {
                    this.closeDelete.next({});
                };
                CustomerDeleteComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-delete',
                        templateUrl: 'app/customer/customerDelete.component.html',
                        inputs: ['c'],
                        outputs: ['closeDelete', 'deleteCustomer'],
                        providers: [service_1.CustomerService],
                        directives: [customerData_component_1.CustomerDataComponent]
                    }), 
                    __metadata('design:paramtypes', [service_1.CustomerService])
                ], CustomerDeleteComponent);
                return CustomerDeleteComponent;
            }());
            exports_1("CustomerDeleteComponent", CustomerDeleteComponent);
        }
    }
});
//# sourceMappingURL=customerDelete.component.js.map