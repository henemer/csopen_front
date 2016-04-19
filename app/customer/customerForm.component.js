System.register(['angular2/core', '../model', '../service'], function(exports_1, context_1) {
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
                    this.active = true;
                    this.testeClass = '';
                    this.messageSuccess = '';
                }
                CustomerFormComponent.prototype.onButtonGravarClick = function (event) {
                    var _this = this;
                    this.errorMessage = '';
                    if (this.customer.id > 0) {
                        this.customerService.update(this.customer).subscribe(function (result) { return _this.closeFormCustomer(event); }, function (error) { return _this.errorMessage = error; });
                    }
                    else {
                        this.customerService.insert(this.customer).subscribe(function (result) { return _this.newCustomer(); }, function (error) { return _this.showErrors(error._body); });
                    }
                };
                CustomerFormComponent.prototype.newCustomer = function () {
                    var _this = this;
                    this.messageSuccess = 'Novo cliente gravado com sucesso !';
                    this.customer = new model_1.Customer();
                    this.customerService.getMaxCode(this.customer);
                    this.active = false; // desabilita o form e reabilita para restaurar o pristine
                    setTimeout(function () { return _this.active = true; }, 0);
                    setTimeout(function () {
                        this.messageSuccess = '';
                    }.bind(this), 3000);
                };
                CustomerFormComponent.prototype.closeFormCustomer = function (Event) {
                    this.closeForm.next({});
                };
                CustomerFormComponent.prototype.showErrors = function (errors) {
                    this.errorMessage = '';
                    var teste = JSON.parse(errors);
                    for (var i in teste) {
                        if (teste.hasOwnProperty(i)) {
                            this.errorMessage += ' - ' + teste[i] + '<br>';
                        }
                    }
                };
                CustomerFormComponent.prototype.blurCode = function (f) {
                    var _this = this;
                    var id = 0;
                    if (this.customer.code == NaN) {
                        return;
                    }
                    if (typeof this.customer.id !== "undefined") {
                        id = this.customer.id;
                    }
                    this.customerService.codeExists(id, this.customer.code).subscribe(function (result) {
                        if (result == true) {
                            _this.errorMessage = 'Código já cadastrado, tente outro.';
                            f.codigo.error = 'Código já cadastrado';
                            _this.testeClass = 'ng-invalid';
                        }
                        else {
                            _this.errorMessage = '';
                            _this.testeClass = 'form-control';
                        }
                    });
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
            }());
            exports_1("CustomerFormComponent", CustomerFormComponent);
        }
    }
});
//# sourceMappingURL=customerForm.component.js.map