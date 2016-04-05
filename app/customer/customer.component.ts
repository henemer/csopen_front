import {Component} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'
import {CustomerListComponent} from '../customer/customerList.component'
import {CustomerFormComponent} from '../customer/customerForm.component'
import {CustomerDeleteComponent} from '../customer/customerDelete.component'

@Component({
    selector: 'my-app',
    providers: [CustomerService],
    templateUrl: '/app/customer/customer.component.html',
    directives: [CustomerListComponent, CustomerFormComponent, CustomerDeleteComponent]
    
})
export class CustomerComponent{
    public customers:Array<Customer>;
    public selectedCustomer;
    public deleteSelectedCustomer;
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
    
    
    onSelectCustomer(customer) {
       this.selectedCustomer = customer;
    }
    
    onDeleteCustomer(customer) {
       this.deleteSelectedCustomer = customer;
    }

    onCloseForm() {
        this.selectedCustomer = null;
    }    
    
    onClickHeader(field) {
        console.log(field);
    }
    
    onCloseDelete() {
        this.deleteSelectedCustomer = null;
        this.customerService.getCustomers()
            .subscribe(customers => this.customers = customers);        
    }
   
 }