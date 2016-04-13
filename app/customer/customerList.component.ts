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
    // customerService:CustomerService;
   // customers:Customer;  
    
    // constructor(customerService:CustomerService) {
        // this.customerService = customerService;
            
  //  }
    
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
    
    onButtonFiltrarClick(form) {
        // var filtrarPor = form.filtrarPor.value;
        // var filtro = form.filtro.value;
        // console.log(filtrarPor);
        // console.log(filtro);
        // this.customerService.getCustomers(filtrarPor, filtro, false)
        //     .subscribe(customers => this.customers = customers);
        
        
       
    }    
}