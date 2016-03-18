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
    var CustomerFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomerFormComponent = (function () {
                function CustomerFormComponent() {
                    this.closeForm = new core_1.EventEmitter();
                    this.editTitle = false;
                }
                CustomerFormComponent.prototype.onTitleClick = function () {
                    this.editTitle = true;
                };
                CustomerFormComponent.prototype.onButtonOkClick = function () {
                    this.closeForm.next({});
                };
                CustomerFormComponent.prototype.ngOnChanges = function () {
                    this.editTitle = false;
                };
                CustomerFormComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-form',
                        templateUrl: 'app/customer/customerForm.component.html',
                        inputs: ['customer'],
                        outputs: ['closeForm']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerFormComponent);
                return CustomerFormComponent;
            })();
            exports_1("CustomerFormComponent", CustomerFormComponent);
        }
    }
});
//# sourceMappingURL=customerForm.component.js.map