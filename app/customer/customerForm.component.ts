import {Component, EventEmitter} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'

@Component({
    selector:'customer-form',
    templateUrl: 'app/customer/customerForm.component.html',
    inputs:['customer'],
    outputs:['saveCustomer'],
    providers: [CustomerService]
})
export class CustomerFormComponent{
    private customer:Customer = new Customer();
    private saveCustomer = new EventEmitter();
    private editTitle:boolean = false;
    
    constructor(private customerService:CustomerService) {}
    
    onTitleClick() {
        this.editTitle = true;
    }
    
    onButtonGravarClick(event) {
        console.log(this.customer);
        this.customerService.insert(this.customer).subscribe(
            result => console.log('ok'),
            error => console.log(error)
        );        
  ///      this.saveCustomer.next({});
    }
    
    ngOnChanges() {
        this.editTitle = false;
    }
    
}
