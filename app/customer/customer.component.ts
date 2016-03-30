import {Component} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'
import {CustomerListComponent} from '../customer/customerList.component'
import {CustomerFormComponent} from '../customer/customerForm.component'

@Component({
    selector: 'my-app',
    providers: [CustomerService],
    templateUrl: '/app/customer/customer.component.html',
    directives: [CustomerListComponent, CustomerFormComponent]
    
})
export class CustomerComponent{
    public customers:Array<Customer>;
    public selectedCustomer;
    public customerService:CustomerService
    
    constructor(customerService:CustomerService) {
        this.customerService = customerService;
        customerService.getCustomers()
            .subscribe(customers => this.customers = customers);
            
    }
    
   newCustomer() {
        var c:Customer = new Customer();
        this.customerService.getNextCode(c);
        this.selectedCustomer = c;
    }   
    
    onSaveCustomer(customer) {
        console.log(customer);
    }         
    
    
    onSelectCustomer(customer) {
       this.selectedCustomer = customer;
    }
 }