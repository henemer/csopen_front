System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CustomerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomerListComponent = (function () {
                function CustomerListComponent() {
                    this.selectCustomer = new core_1.EventEmitter();
                    this.clickHeader = new core_1.EventEmitter();
                }
                CustomerListComponent.prototype.onSelect = function (sup) {
                    this.selectCustomer.next(sup);
                };
                CustomerListComponent.prototype.onClickHeader = function (field) {
                    this.clickHeader.next(field);
                };
                CustomerListComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-list',
                        templateUrl: 'app/customer/customerList.component.html',
                        inputs: ['customers'],
                        outputs: ['selectCustomer', 'clickHeader']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerListComponent);
                return CustomerListComponent;
            })();
            exports_1("CustomerListComponent", CustomerListComponent);
        }
    }
});
//# sourceMappingURL=customerList.component.js.map