import {Component, EventEmitter} from 'angular2/core'
import {Supplier} from '../model'

@Component({
    selector: 'supplier-list',
    templateUrl: 'app/supplier/supplierList.component.html',
    inputs:['suppliers'],
    outputs:['selectSupplier']
})
export class SupplierListComponent {
    selectSupplier = new EventEmitter();
    
    
    onSelect(sup:Supplier) {
        this.selectSupplier.next(sup);
    }
}