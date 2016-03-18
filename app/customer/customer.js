System.register([], function(exports_1) {
    var Customer;
    return {
        setters:[],
        execute: function() {
            Customer = (function () {
                function Customer(id, code, nickname, address, number, district, city, state, zipcode, cpf, rg, phone1, phone2, phone3, contact, email, complement, observations) {
                    this.id = id;
                    this.code = code;
                    this.nickname = nickname;
                    this.address = address;
                    this.number = number;
                    this.district = district;
                    this.city = city;
                    this.state = state;
                    this.zipcode = zipcode;
                    this.cpf = cpf;
                    this.rg = rg;
                    this.phone1 = phone1;
                    this.phone2 = phone2;
                    this.phone3 = phone3;
                    this.contact = contact;
                    this.email = email;
                    this.complement = complement;
                    this.observations = observations;
                }
                return Customer;
            })();
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=customer.js.map