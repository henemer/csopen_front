import {Component, EventEmitter} from 'angular2/core'
import {Validators} from 'angular2/common'
import {Customer} from '../model'
import {CustomerService} from '../service'

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
    
    constructor(private customerService:CustomerService) {}
    
    onButtonGravarClick(event) {
        if(this.customer.id > 0) {
            this.customerService.update(this.customer).subscribe(
                result => this.closeFormCustomer(event),
                error => console.log('erro')
            );        
            
        }
        else
        {
            this.customerService.insert(this.customer).subscribe(
                result => this.newCustomer(),
                error => console.log(error)
            );        
            
        }
  
     
    }
    
    newCustomer() {
        this.customer = new Customer();
        this.customerService.getNextCode(this.customer);
          
    }   
    
    closeFormCustomer(Event) {
        this.closeForm.next({});
    }
}
