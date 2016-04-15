System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', '../service'], function(exports_1, context_1) {
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
    var http_1, core_1, service_1;
    var CustomerService;
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
            CustomerService = (function () {
                function CustomerService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                }
                CustomerService.prototype.getCustomers = function (filterBy, filter, all) {
                    if (all == true) {
                        filterBy = '';
                        filter = '';
                    }
                    return this.http.get(service_1.Config.BASE_URL + '/clientes/' + filterBy + filter)
                        .map(function (res) { return res.json(); });
                };
                CustomerService.prototype.show = function (id) {
                    return this.http.get(service_1.Config.BASE_URL + '/clientes/' + id)
                        .map(function (res) { return res.json(); });
                };
                CustomerService.prototype.insert = function (c) {
                    return this.http
                        .post(service_1.Config.BASE_URL + '/clientes/', JSON.stringify(c), { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                CustomerService.prototype.update = function (c) {
                    return this.http
                        .put(service_1.Config.BASE_URL + '/clientes/' + c.id, JSON.stringify(c), { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                CustomerService.prototype.getMaxCode = function (c) {
                    return this.http
                        .get(service_1.Config.BASE_URL + '/clientes/getmaxcode').subscribe(function (response) { return c.code = parseInt(response.text()); });
                };
                CustomerService.prototype.delete = function (id) {
                    return this.http
                        .delete(service_1.Config.BASE_URL + '/clientes/' + id)
                        .map(function (res) { return res.json(); });
                };
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});
//# sourceMappingURL=customer.service.js.map