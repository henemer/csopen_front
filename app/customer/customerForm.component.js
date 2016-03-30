System.register(['angular2/core', '../model', '../service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, model_1, service_1;
    var CustomerFormComponent;
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
            }],
        execute: function() {
            CustomerFormComponent = (function () {
                function CustomerFormComponent(customerService) {
                    this.customerService = customerService;
                    this.customer = new model_1.Customer();
                    this.closeForm = new core_1.EventEmitter();
                }
                CustomerFormComponent.prototype.onButtonGravarClick = function (event) {
                    this.customerService.insert(this.customer).subscribe(function (result) { return console.log('ok'); }, function (error) { return console.log(error); });
                };
                CustomerFormComponent.prototype.closeFormCustomer = function (Event) {
                    console.log('closeFormCustomer');
                    this.closeForm.next({});
                };
                CustomerFormComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-form',
                        templateUrl: 'app/customer/customerForm.component.html',
                        inputs: ['customer', 'selectedCustomer'],
                        outputs: ['closeForm'],
                        providers: [service_1.CustomerService]
                    }), 
                    __metadata('design:paramtypes', [service_1.CustomerService])
                ], CustomerFormComponent);
                return CustomerFormComponent;
            })();
            exports_1("CustomerFormComponent", CustomerFormComponent);
        }
    }
});
//# sourceMappingURL=customerForm.component.js.map