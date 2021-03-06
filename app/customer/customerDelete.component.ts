import {Component, EventEmitter} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'
import {CustomerDataComponent} from '../customer/customerData.component'

@Component({
    selector:'customer-delete',
    templateUrl: 'app/customer/customerDelete.component.html',
    inputs:['c'],
    outputs:['closeDelete', 'deleteCustomer'],
    providers: [CustomerService],
    directives: [CustomerDataComponent]
    
})
export class CustomerDeleteComponent{
    private customer:Customer = new Customer();
    private closeDelete = new EventEmitter();
    private deleteCustomer = new EventEmitter();
    
    constructor(private customerService:CustomerService) {}
    
    clickDeleteCustomer(id) {
        this.customerService.delete(id).subscribe(
            result => this.closeDeleteCustomer(this.closeDelete),
            error =>  console.log(<any>error)
        );        
    }
    
    closeDeleteCustomer(Event) {
        this.closeDelete.next({});
    }    
    
    
  
}


