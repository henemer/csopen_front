import {Component, EventEmitter} from 'angular2/core'
// import {Supplier} from '../model'
import {SupplierDataComponent} from '../supplier/supplierData.component'

@Component({
    selector:'supplier-show',
    templateUrl: 'app/supplier/supplierShow.component.html',
    inputs:['s'],
    outputs:['closeShow'],
    directives: [SupplierDataComponent]

})
export class SupplierShowComponent{
    private closeShow = new EventEmitter();

    closeShowSupplier(Event) {
        this.closeShow.next({});
    }
}
