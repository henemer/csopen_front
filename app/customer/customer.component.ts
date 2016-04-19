import {Component} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'
import {CustomerListComponent} from '../customer/customerList.component'
import {CustomerFormComponent} from '../customer/customerForm.component'
import {CustomerDeleteComponent} from '../customer/customerDelete.component'
import {CustomerShowComponent} from '../customer/customerShow.component'
import {CustomerFilter} from "./customerFilter";

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
    public customerService:CustomerService;
    public customerFilter:CustomerFilter;

    constructor(customerService:CustomerService) {
        this.operation = 'list';
        this.customerService = customerService;
        this.customerFilter = this.customerService.customerFilter;
        customerService.getCustomers()
            .subscribe(customers => this.customers = customers);


    }
    
   newCustomer() {
        var c:Customer = new Customer();
        this.customerService.getMaxCode(c);
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
        this.customerService.getCustomers()
            .subscribe(customers => this.customers = customers);
        this.selectedCustomer = null;
        this.operation = 'list';
    }    
    
    onClickHeader(field) {
        console.log(field);
    }
    
    onCloseDelete() {
        this.customerService.getCustomers()
            .subscribe(customers => this.customers = customers);
        this.selectedCustomer = null;
        this.operation = 'list';

    }
    
    onShowCustomer(customer) {
        this.customerService.show(customer.id)
            .subscribe(customers =>  {this.selectedCustomer = customers; this.operation='show'});

    }
    

    onCloseShow() {
        this.customerService.getCustomers()
            .subscribe(customers => this.customers = customers);
        this.selectedCustomer = null;
        this.operation = 'list';
    }    
   
 }