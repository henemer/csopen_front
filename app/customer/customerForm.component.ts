import {Component, EventEmitter} from 'angular2/core'
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
        this.customerService.insert(this.customer).subscribe(
            result => console.log('ok'),
            error => console.log(error)
        );        
  
    }
    
    
    closeFormCustomer(Event) {
        this.closeForm.next({});
    }
}
