import {Component, EventEmitter} from 'angular2/core'
import {Customer} from '../model'

@Component({
    selector: 'customer-list',
    templateUrl: 'app/customer/customerList.component.html',
    inputs:['customers'],
    outputs:['selectCustomer', 'clickHeader']
})
export class CustomerListComponent {
    selectCustomer = new EventEmitter();
    clickHeader = new EventEmitter();
    
    onSelect(sup:Customer) {
        this.selectCustomer.next(sup);
    }
    
    onClickHeader(field) {
        this.clickHeader.next(field);
    }
}