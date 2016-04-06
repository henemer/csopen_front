import {Component, EventEmitter} from 'angular2/core'
import {Customer} from '../model'
import {CustomerDataComponent} from '../customer/customerData.component'

@Component({
    selector:'customer-show',
    templateUrl: 'app/customer/customerShow.component.html',
    inputs:['c'],
    outputs:['closeShow'],
    directives: [CustomerDataComponent]
    
})
export class CustomerShowComponent{
    private closeShow = new EventEmitter();
    
    closeShowCustomer(Event) {
        this.closeShow.next({});
    }    
    
    
  
}
