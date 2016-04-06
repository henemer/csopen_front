import {Component, EventEmitter} from 'angular2/core'
import {Customer} from '../model'

@Component({
    selector: 'customer-list',
    templateUrl: 'app/customer/customerList.component.html',
    inputs:['customers'],
    outputs:['selectCustomer', 'clickHeader', 'deleteSelectCustomer','showSelectCustomer']
})
export class CustomerListComponent {
    selectCustomer = new EventEmitter();
    deleteSelectCustomer = new EventEmitter();
    showSelectCustomer = new EventEmitter();
    clickHeader = new EventEmitter();
    
    onSelect(sup:Customer) {
        this.selectCustomer.next(sup);
    }
    
    onClickHeader(field) {
        this.clickHeader.next(field);
    }
    
    onDelete(sup:Customer) {
        this.deleteSelectCustomer.next(sup);
    }    
    
    onShow(sup:Customer) {
        this.showSelectCustomer.next(sup);
    }
    
}