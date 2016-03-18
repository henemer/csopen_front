import {Component} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'
import {CustomerListComponent} from '../customer/customerList.component'

@Component({
    selector: 'my-app',
    providers: [CustomerService],
    templateUrl: '/app/customer/customer.component.html',
    directives: [CustomerListComponent]
    
})
export class CustomerComponent{
    public customers:Array<Customer>;
    constructor(customerService:CustomerService) {
        customerService.getCustomers()
            .subscribe(customers => this.customers = customers);
            
         
            
        
    }
 }