import {Component, EventEmitter} from 'angular2/core'
import {Supplier} from '../model'
import {SupplierService} from '../service'
import {SupplierDataComponent} from '../supplier/supplierData.component'

@Component({
    selector:'supplier-delete',
    templateUrl: 'app/supplier/supplierDelete.component.html',
    inputs:['s'],
    outputs:['closeDelete'],
    providers: [SupplierService],
    directives: [SupplierDataComponent]

})
export class SupplierDeleteComponent{
    private supplier:Supplier = new Supplier();
    private closeDelete = new EventEmitter();

    constructor(private supplierService:SupplierService) {}

    clickDeleteSupplier(id) {
        this.supplierService.delete(id).subscribe(
            result => this.closeDeleteSupplier(this.closeDelete),
            error =>  console.log(<any>error)
        );
    }

    closeDeleteSupplier(Event) {
        this.closeDelete.next({});
    }



}


