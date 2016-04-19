import {Component, EventEmitter} from "angular2/core";
import {Customer} from "../model";
import {CustomerService} from "../service";

@Component({
    selector:'customer-form',
    templateUrl: 'app/customer/customerForm.component.html',
    inputs:['customer', 'selectedCustomer'],
    outputs:['closeForm'],
    providers: [CustomerService]
})
export class CustomerFormComponent{
    private customer:Customer = new Customer();
    private closeForm = new EventEmitter();
    errorMessage:string;
    active = true;
    testeClass = '';
    messageSuccess = '';

    constructor(private customerService:CustomerService) {}
    
    onButtonGravarClick(event) {
        this.errorMessage = '';
        if(this.customer.id > 0) {
            this.customerService.update(this.customer).subscribe(
                result => this.closeFormCustomer(event),
                error =>  this.errorMessage = <any>error
            );

        }
        else
        {
            this.customerService.insert(this.customer).subscribe(
                result => this.newCustomer(),
                error => this.showErrors(error._body)
            );        
            
        }
  
     
    }
    
    newCustomer() {
        this.messageSuccess = 'Novo cliente gravado com sucesso !';
        this.customer = new Customer();
        this.customerService.getMaxCode(this.customer);
        this.active = false;  // desabilita o form e reabilita para restaurar o pristine
        setTimeout(()=> this.active=true, 0);

        setTimeout(function() {
            this.messageSuccess = '';
        }.bind(this), 3000);

    }   
    
    closeFormCustomer(Event) {
        this.closeForm.next({});
    }

    showErrors(errors) {
        this.errorMessage = '';
        
        var teste = JSON.parse(errors);

        for (var i in teste) {
            if (teste.hasOwnProperty(i)) {
                this.errorMessage += ' - '+ teste[i] + '<br>';
            }
        }

    }

    blurCode(f) {
        var id = 0

        if (isNaN(this.customer.code))
        {
            return;
        }

        if (typeof this.customer.id !== "undefined") {
            id = this.customer.id;
        }

        this.customerService.codeExists(id, this.customer.code).subscribe(
            result => {
                if(result == true) {
                    this.errorMessage = 'Código já cadastrado, tente outro.';
                    f.codigo.error = 'Código já cadastrado';
                    this.testeClass = 'ng-invalid';
                }
                else
                {
                    this.errorMessage = '';
                    this.testeClass = 'form-control';
                }
            })
    }
}
