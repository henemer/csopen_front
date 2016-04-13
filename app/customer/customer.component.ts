import {Component} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'
import {CustomerListComponent} from '../customer/customerList.component'
import {CustomerFormComponent} from '../customer/customerForm.component'
import {CustomerDeleteComponent} from '../customer/customerDelete.component'
import {CustomerShowComponent} from '../customer/customerShow.component'

@Component({
    selector: 'my-app',
    providers: [CustomerService],
    templateUrl: '/app/customer/customer.component.html',
    directives: [CustomerListComponent, CustomerFormComponent, 
        CustomerDeleteComponent, CustomerShowComponent]
    
})
export class CustomerComponent{
    public customers:Array<Customer>;
    public selectedCustomer;
    public deleteSelectedCustomer;
    public operation;
    public customerService:CustomerService
    
    constructor(customerService:CustomerService) {
        this.operation = 'list';
        this.customerService = customerService;
        customerService.getCustomers('name','', true)
            .subscribe(customers => this.customers = customers);
            
    }
    
   newCustomer() {
        var c:Customer = new Customer();
        this.customerService.getNextCode(c);
        this.selectedCustomer = c;
        this.operation = 'new';
       
    }   
    
    
    onSelectCustomer(customer) {
       this.selectedCustomer = customer;
       this.operation = 'update';
       
    }
    
    onDeleteCustomer(customer) {
       this.deleteSelectedCustomer = customer;
       this.operation = 'delete';
    }

    onCloseForm() {
        this.selectedCustomer = null;
        this.operation = 'list';
    }    
    
    onClickHeader(field) {
        console.log(field);
    }
    
    onCloseDelete() {
        this.deleteSelectedCustomer = null;
        this.operation = 'list';
        this.customerService.getCustomers('name','',true)
            .subscribe(customers => this.customers = customers);        
    }
    
    onShowCustomer(customer) {
       this.selectedCustomer = customer;
       this.operation = 'show';
    }
    

    onCloseShow() {
        this.selectedCustomer = null;
        this.operation = 'list';
    }    
   
 }