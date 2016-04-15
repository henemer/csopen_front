import {Component, EventEmitter} from 'angular2/core'
import {Customer} from '../model'
import {CustomerService} from '../service'

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
    customerService:CustomerService;
    customers:Customer;  

     constructor(customerService:CustomerService) {
         this.customerService = customerService;

    }
    
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
    
    onButtonFilterClick(form,all) {
        console.log(all);
        var filterBy = form.filterBy.value;
        var filter = form.filter.value;
        this.customerService.getCustomers(filterBy, filter, false)
             .subscribe(customers => this.customers = customers);

    }

    onButtonFilterAllClick() {
        console.log('aqui O');
        this.customerService.getCustomers('', '', true)
            .subscribe(customers => this.customers = customers);

    }
}